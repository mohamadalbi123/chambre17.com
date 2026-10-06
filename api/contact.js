const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "chambre17@icloud.com";
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "CHAMBRE 17 <contact@chambre17.com>";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

function clean(value, maxLength) {
  return String(value || "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, maxLength);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { ok: false, message: "Method not allowed." });
  }

  const name = clean(request.body?.name, 120);
  const company = clean(request.body?.company, 120);
  const email = clean(request.body?.email, 180);
  const phone = clean(request.body?.phone, 80);
  const need = clean(request.body?.need, 160);
  const message = clean(request.body?.message, 4000);

  if (!name || !email || !isEmail(email) || !message) {
    return sendJson(response, 400, {
      ok: false,
      message: "Please complete the required fields with a valid email address."
    });
  }

  if (!process.env.RESEND_API_KEY) {
    return sendJson(response, 500, {
      ok: false,
      message: "Missing RESEND_API_KEY environment variable."
    });
  }

  const text = [
    "New CHAMBRE 17 project enquiry",
    "",
    `Name: ${name}`,
    `Company: ${company || "-"}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Need: ${need || "-"}`,
    "",
    "Message:",
    message
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#111">
      <h2>New CHAMBRE 17 project enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Need:</strong> ${need || "-"}</p>
      <hr>
      <p style="white-space:pre-wrap">${message}</p>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: "New project enquiry — CHAMBRE 17",
      text,
      html
    })
  });

  if (!resendResponse.ok) {
    let details = "Resend request failed.";
    try {
      const errorPayload = await resendResponse.json();
      details = errorPayload.message || details;
    } catch (error) {}

    return sendJson(response, 502, {
      ok: false,
      message: details
    });
  }

  return sendJson(response, 200, { ok: true });
}
