import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SiteClockr — questions about GPS site clock-in, pricing, demos, or getting your first site set up.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact SiteClockr",
    description:
      "Questions about GPS site clock-in, pricing, or demos? Send us a message — we usually reply within one business day.",
    url: `${SITE_URL}/contact/`,
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
