#!/usr/bin/env node
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";

if (!key) {
  console.warn(
    "\n⚠️  NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing.\n" +
      "   Save your key in .env.local, then rebuild:\n" +
      "     NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-from-web3forms.com\n" +
      "   The /contact/ page will show an email fallback until this is set.\n",
  );
} else {
  console.log("✓ Web3Forms access key loaded for build (length %d).\n", key.length);
}
