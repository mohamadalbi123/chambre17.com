#!/usr/bin/env node
// Contact API regression checks. All email-provider requests are mocked;
// this script never sends email or requires production credentials.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../api/contact.js", import.meta.url), "utf8");
const originalFetch = globalThis.fetch;
const originalEnv = Object.fromEntries(
  ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "RESEND_FROM_EMAIL"].map((key) => [key, process.env[key]])
);
process.env.RESEND_API_KEY = "mock-api-key-never-sent";
process.env.CONTACT_TO_EMAIL = "owner@example.test";
process.env.RESEND_FROM_EMAIL = "CHAMBRE 17 <sender@example.test>";

let requests = [];
let provider;
globalThis.fetch = async (url, options) => {
  assert.equal(url, "https://api.resend.com/emails");
  requests.push({ url, options, payload: JSON.parse(options.body) });
  return provider(url, options);
};

const { default: handler } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
const validBody = {
  name: "Test Visitor",
  email: "visitor@example.test",
  message: "This is an offline test enquiry.",
  company: "Example",
  phone: "+33 1 23 45 67 89",
  need: "Website design",
  website: ""
};

async function invoke({ method = "POST", body = validBody } = {}) {
  const result = { headers: {}, statusCode: undefined, body: undefined };
  const response = {
    set statusCode(value) { result.statusCode = value; },
    setHeader(name, value) { result.headers[name.toLowerCase()] = value; },
    end(value) { result.body = JSON.parse(value); }
  };
  await handler({ method, body }, response);
  assert.equal(result.headers["content-type"], "application/json; charset=utf-8");
  return result;
}

const checks = [
  ["rejects GET without contacting the provider", async () => {
    const result = await invoke({ method: "GET" });
    assert.equal(result.statusCode, 405);
    assert.equal(result.headers.allow, "POST");
    assert.equal(result.body.ok, false);
    assert.equal(requests.length, 0);
  }],
  ["rejects missing, whitespace-only and malformed required fields", async () => {
    for (const body of [undefined, {}, { ...validBody, name: " " }, { ...validBody, email: "invalid" }, { ...validBody, message: "\r\n " }]) {
      const result = await invoke({ body: body ?? {} });
      assert.equal(result.statusCode, 400);
      assert.equal(result.body.ok, false);
    }
    assert.equal(requests.length, 0);
  }],
  ["accepts the honeypot silently without sending email", async () => {
    const result = await invoke({ body: { ...validBody, website: "spam.example" } });
    assert.equal(result.statusCode, 200);
    assert.equal(result.body.ok, true);
    assert.equal(requests.length, 0);
  }],
  ["returns a configuration error when the API key is absent", async () => {
    delete process.env.RESEND_API_KEY;
    try {
      const result = await invoke();
      assert.equal(result.statusCode, 500);
      assert.equal(result.body.ok, false);
      assert.equal(requests.length, 0);
    } finally {
      process.env.RESEND_API_KEY = "mock-api-key-never-sent";
    }
  }],
  ["delivers the correct recipient, reply-to and escaped HTML", async () => {
    const result = await invoke({ body: { ...validBody, name: "  Test Visitor  ", message: '<script>alert("test")</script> & enquiry\r\nSecond line' } });
    assert.equal(result.statusCode, 200);
    assert.equal(result.body.ok, true);
    assert.equal(requests.length, 1);
    const { options, payload } = requests[0];
    assert.equal(options.method, "POST");
    assert.equal(payload.to, "owner@example.test");
    assert.equal(payload.from, "CHAMBRE 17 <sender@example.test>");
    assert.equal(payload.reply_to, "visitor@example.test");
    assert.match(payload.text, /Name: Test Visitor\n/);
    assert.match(payload.html, /&lt;script&gt;alert\(&quot;test&quot;\)&lt;\/script&gt; &amp; enquiry/);
    assert.doesNotMatch(payload.html, /<script>/);
    assert.doesNotMatch(payload.text, /\r/);
  }],
  ["returns JSON failure when the provider rejects an email", async () => {
    provider = async () => ({ ok: false, json: async () => ({ message: "Provider rejected the request" }) });
    const result = await invoke();
    assert.equal(result.statusCode, 502);
    assert.equal(result.body.ok, false);
  }],
  ["returns JSON failure for an unreadable provider error body", async () => {
    provider = async () => ({ ok: false, json: async () => { throw new SyntaxError("Not JSON"); } });
    const result = await invoke();
    assert.equal(result.statusCode, 502);
    assert.equal(result.body.ok, false);
  }],
  ["returns JSON failure when the provider connection fails", async () => {
    provider = async () => { throw new TypeError("Mock network connection failed"); };
    const result = await invoke();
    assert.ok(result.statusCode >= 500 && result.statusCode <= 599);
    assert.equal(result.body.ok, false);
  }]
];

let failures = 0;
try {
  for (const [name, check] of checks) {
    requests = [];
    provider = async () => ({ ok: true });
    try {
      await check();
      console.log(`PASS ${name}`);
    } catch (error) {
      failures += 1;
      console.error(`FAIL ${name}: ${error.message}`);
    }
  }
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

console.log(`${checks.length - failures}/${checks.length} checks passed. Provider calls were mocked; no email was sent.`);
process.exitCode = failures ? 1 : 0;
