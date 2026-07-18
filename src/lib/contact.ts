/** Web3Forms + optional Cloudflare Turnstile (set at build time for static export). */
export const contactForm = {
  /** From https://web3forms.com — emails are routed in the Web3Forms dashboard. */
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  /** Public site key from Cloudflare Turnstile. Pair with the secret in Web3Forms (Pro). */
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
  submitUrl: "https://api.web3forms.com/submit",
} as const;

export function isContactFormConfigured(): boolean {
  return contactForm.web3formsAccessKey.length > 0;
}
