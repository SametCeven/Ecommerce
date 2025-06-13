export default async function getGravatarHash(email) {

  if(!email) return;

  const encoder = new TextEncoder();
  const data = encoder.encode(email.trim().toLowerCase());

  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex;
}