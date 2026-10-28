import { next } from '@vercel/functions';
import { entryRedirect } from './lib/language.mjs';

export default function proxy(request) {
  return entryRedirect(request) || next();
}
