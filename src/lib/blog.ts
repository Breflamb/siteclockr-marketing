export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readMinutes: number;
  sections: { heading?: string; paragraphs: string[] }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "share-site-clock-in-link",
    title: "Share a site clock-in link from your phone — WhatsApp, email, or SMS",
    description:
      "Skip printing a QR when you just need the crew on the right page. From Admin → Sites, share the clock-in URL via WhatsApp, email, SMS, or copy — ready for the gate.",
    date: "2026-07-18",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "A printed QR at the gate is still the best permanent sign-in. But plenty of mornings you just need to get a new starter — or a subbie who arrived without scanning — onto the right clock-in page before the pour starts.",
          "SiteClockr now lets you share that site link straight from admin on your phone: WhatsApp, email, SMS, or copy. No image attachment to wrestle with — just the URL workers open in the browser.",
        ],
      },
      {
        heading: "What workers get",
        paragraphs: [
          "They receive a normal message with a link. Tap it, and SiteClockr opens the clock-in page for that site — same destination as scanning the QR. No app store download.",
          "If the site has a geofence, they still need a live GPS fix inside the boundary before the time is recorded. Sharing the link doesn't bypass location checks.",
        ],
      },
      {
        heading: "How admins share",
        paragraphs: [
          "In Admin → Sites, every active site has a Share action next to Preview. Tap it and pick WhatsApp, Email, SMS, or Copy link. On phones that support the system share sheet, that may open first.",
          "You can also share after Generate in the Site QR Code section — useful when you're already making a printout and want to ping the same URL to a foreman.",
          "Only active sites show Share. Deactivated sites stay off the list so old jobs don't get sent by mistake.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "Log in at siteclockr.ie, open Sites, and try Share on an active site. Sole Trader is free forever for one site and one worker — enough to test with your next crew.",
        ],
      },
    ],
  },
  {
    slug: "gps-geofencing-construction",
    title: "How GPS geofencing stops buddy punching on construction sites",
    description:
      "Why paper dockets and honour-system clock-ins fail on busy sites — and how a GPS geofence proves workers were actually there when they clocked in.",
    date: "2026-07-07",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Every contractor has seen it: a worker clocks in from the car park, or a mate taps in for someone still on the way. Paper dockets and honour-system apps make it easy — and expensive when payroll or a dispute lands on your desk.",
          "GPS geofencing fixes that without buying hardware. You set each site's location on-site (or from an Eircode or UK postcode), choose a radius in metres, and every clock-in needs a live GPS fix inside that boundary before the time is recorded.",
        ],
      },
      {
        heading: "What workers experience",
        paragraphs: [
          "They open SiteClockr on their phone — no app store download — or scan a QR code printed at the gate. The site loads, they tap clock in, and the phone grabs a fresh GPS reading. If they're outside the fence, the check-in is rejected with a clear message.",
          "That single step removes most casual buddy punching. It's not about tracking people all day; it's about proving they were on site at the moment they claimed to be.",
        ],
      },
      {
        heading: "What you get as the admin",
        paragraphs: [
          "Every check-in is time-stamped and tied to a verified location. You can see who's on site right now, filter by site or name, and export weekly hours to CSV for payroll.",
          "If someone forgets their phone, you can add or fix a check-in manually — and sensitive changes are logged in an audit trail.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          "SiteClockr's Sole Trader plan is free forever for one site and one worker — enough to try geofencing on your next job. Paid plans add more sites, staff, SafePass tracking, and automatic expiry reminders.",
        ],
      },
    ],
  },
  {
    slug: "safepass-expiry-reminders",
    title: "SafePass and manual handling expiry reminders — why contractors need them",
    description:
      "An expired SafePass or CSCS card on site is a compliance risk. Here's how to track card numbers, photos, and expiry dates — and get emailed before anything lapses.",
    date: "2026-07-07",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Turning up to site with an expired SafePass — or a CSCS card in Britain — isn't just embarrassing. It puts your compliance record, insurance, and main contractor relationships at risk.",
          "Most teams still rely on spreadsheets or folder checks that only happen when someone asks. By then, the worker is already through the gate.",
        ],
      },
      {
        heading: "Store the card properly once",
        paragraphs: [
          "SiteClockr keeps each worker's card number, expiry date, and front/back photos in one register. Take a photo of the card and the app reads the number and expiry for SafePass — or confirm the details manually for CSCS.",
          "Manual-handling certificates are tracked the same way, so you're not maintaining two separate systems.",
        ],
      },
      {
        heading: "Automatic reminders before expiry",
        paragraphs: [
          "Email reminders go out before SafePass or manual-handling certs expire — to you and/or the worker — so nobody reaches the gate out of date.",
          "On clock-in, their qualification status is visible at a glance. You can see at a glance who is out of date before they start work.",
        ],
      },
      {
        heading: "Part of the same app as time tracking",
        paragraphs: [
          "Because compliance sits beside GPS clock-in and weekly timesheets, you're not juggling another tool. Starter and Business plans include full qualification tracking; the free Sole Trader tier covers time on a single site.",
        ],
      },
    ],
  },
  {
    slug: "setup-first-site",
    title: "Setting up SiteClockr on your first site in an afternoon",
    description:
      "A practical walkthrough: create your account, add a site geofence, invite workers, and print a QR code — ready for clock-ins tomorrow morning.",
    date: "2026-07-07",
    readMinutes: 5,
    sections: [
      {
        paragraphs: [
          "You don't need installers, training days, or new hardware. If your crew can use WhatsApp, they can use SiteClockr. Here's a realistic first-afternoon setup.",
        ],
      },
      {
        heading: "1. Create your organisation",
        paragraphs: [
          "Sign up at siteclockr.ie — Sole Trader is free forever, or pick Starter/Business for a 21-day trial with no card required. Choose your company name and admin login.",
          "Set your branding if you like: logo and one of the built-in colour themes (including GAA county colours for Irish contractors).",
        ],
      },
      {
        heading: "2. Add your first site",
        paragraphs: [
          "Stand on site and capture the geofence from your phone's GPS, drop a pin on the map, or enter an Eircode or UK postcode. Set the radius — 50–100 metres is typical for a building plot.",
          "Generate a QR code from the admin panel, add a title and footer, and print it for the site office or gate.",
        ],
      },
      {
        heading: "3. Invite your workers",
        paragraphs: [
          "Add staff from the users screen — include SafePass or CSCS details if you're on a paid plan. From Sites, use Share to send the clock-in URL via WhatsApp, email, SMS, or copy — or ask them to scan the QR on their first day.",
          "They clock in from the mobile web app. No download from an app store.",
        ],
      },
      {
        heading: "4. See who's on site and export hours",
        paragraphs: [
          "The dashboard shows a live \"currently clocked in\" count, filterable by site or name. Weekly timesheets roll up Monday to Monday and export to CSV for your payroll system.",
          "When you're ready, API keys and webhooks on the Business plan let other tools pull the same data automatically.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
