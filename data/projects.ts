import type { Project, ProjectCategory } from "@/types";

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All work",
  web: "Web",
  mobile: "Mobile",
  ai: "AI",
  web3: "Web3",
};

export const projects: Project[] = [
  {
    slug: "prism",
    title: "PRISM",
    tagline: "IT & telecom expense intelligence for enterprises",
    summary:
      "A multi-tenant SaaS portal that shows organisations what they pay for, who provides it, how it's connected and where they can save — powered by Salesforce data and AI invoice parsing.",
    overview: [
      "PRISM gives organisations a clear view of their IT and telecom setup: what they pay for, who provides it, how it's connected and where they can save. It pulls data from a consultancy's Salesforce CRM, reads vendor invoices with AI, and turns all of it into client-facing dashboards, insights and documents.",
      "Background jobs handle the heavy lifting — AI insights, provider research and RFP generation run on Celery with caching, locking and saved history, so the interface stays fast while the platform does real analysis.",
    ],
    role: "Full-stack engineer — React front end and Django back end",
    platforms: ["Web"],
    categories: ["web", "ai"],
    accent: "#4c6ef5",
    image: { src: "/projects/prism.webp", width: 1800, height: 1430, alt: "PRISM IT expense dashboard, heat map and enterprise architecture map" },
    featured: true,
    features: [
      { title: "IT expense dashboard", description: "Monthly and annual spend, potential savings, expiring contracts and spend broken down by service type." },
      { title: "Enterprise architecture map", description: "A draggable, auto-laid-out network diagram of sites, carriers, circuits and cloud endpoints, with cost overlays, custom shapes, image/PDF export and autosave." },
      { title: "AI invoice parsing", description: "Upload a PDF or CSV and Claude extracts line items, classifies charges, reconciles totals, finds duplicates and flags billing issues." },
      { title: "AI-generated insights", description: "Executive summaries and recommendations built from the organisation's real service and contract data." },
      { title: "Heat map & readiness score", description: "Places the organisation on an industry bell curve with scores for feasibility, risk and budget." },
      { title: "Enterprise auth", description: "AWS Cognito with MFA, role-based access, team invitations with reminders and client-account switching." },
    ],
    stack: [
      { label: "Front end", items: ["React", "Vite", "AWS Amplify", "jsPDF", "html-to-image"] },
      { label: "Back end", items: ["Python 3.11", "Django 5", "DRF", "PostgreSQL", "Celery", "Redis"] },
      { label: "AI & integrations", items: ["Anthropic Claude API", "Salesforce", "Crunchbase API"] },
      { label: "Infrastructure", items: ["AWS Cognito", "S3", "SES", "Sentry"] },
    ],
    highlights: ["Provider lookup with source verification", "RFP Builder", "Cost benchmarking & dispute tracking", "Global search"],
  },
  {
    slug: "nature-cafe",
    title: "Nature Cafe & Bar",
    tagline: "Ordering platform: website, admin portal and Android app",
    summary:
      "A production ordering platform with a customer website, a web admin portal and a native Android admin app — all sharing one Supabase backend in real time.",
    overview: [
      "Nature Cafe is a production ordering platform I built for a local cafe and bar. It has three parts that share one Supabase backend: a customer website, a web admin portal and an Android admin app. A change made in any of them shows up in the others right away.",
      "Ordering is only allowed during opening hours (6 PM to 3 AM, Pakistan time), with a time check that correctly handles hours crossing midnight. Every new order is pushed to staff through Firebase and posted to a WhatsApp group.",
    ],
    role: "Sole engineer — web, Android and back end",
    platforms: ["Web", "Android"],
    categories: ["web", "mobile"],
    accent: "#7ac142",
    image: { src: "/projects/nature-cafe.webp", width: 1800, height: 1586, alt: "Nature Cafe website and Android admin app screens" },
    featured: true,
    features: [
      { title: "Customer website", description: "Menu with categories, variants and availability, deals carousel, cart and checkout validated with React Hook Form and Zod." },
      { title: "Guest ordering", description: "Guests track orders by order ID and email through a secure database function." },
      { title: "Web admin portal", description: "KPI dashboard with sales charts, order management, menu, deals, discounts and users, with drag-and-drop image upload." },
      { title: "Android admin app", description: "Kotlin and Jetpack Compose app with the same features, MVVM architecture, light/dark themes and signed release builds." },
      { title: "Instant notifications", description: "Data-only FCM messages so the app controls every alert, even when closed, plus WhatsApp alerts via Green API." },
      { title: "Secure by design", description: "Row-Level Security, triggers for order totals, RPC functions and ~25 versioned SQL migrations." },
    ],
    stack: [
      { label: "Web", items: ["Next.js 16", "React 19", "TypeScript", "Material UI", "React Hook Form", "Zod"] },
      { label: "Mobile", items: ["Kotlin", "Jetpack Compose", "Material 3", "supabase-kt", "Ktor", "Coil"] },
      { label: "Back end", items: ["Supabase", "PostgreSQL", "Firebase Cloud Messaging", "WhatsApp (Green API)"] },
    ],
  },
  {
    slug: "keyview-ai",
    title: "KeyView AI",
    tagline: "AI camera analytics for property monitoring",
    summary:
      "An iOS app that turns property security cameras into real-time insights: live people and vehicle counts, incident alerts and traffic dashboards.",
    overview: [
      "KeyView AI turns property security cameras into real-time insights using AI video analytics. Property managers watch live camera feeds with automatic people and vehicle counts, get alerts for incidents like falls and fights, and track activity through a timeline of events.",
      "Dashboards show traffic in and out and weather by day, week or month, with charts and data tables. I built the app's screens, including the live camera view, activity timeline, analytics dashboards and navigation.",
    ],
    role: "Mobile engineer — app screens and flows",
    platforms: ["iOS"],
    categories: ["mobile", "ai"],
    accent: "#4f46e5",
    image: { src: "/projects/keyview-ai.webp", width: 1600, height: 1200, alt: "KeyView AI home, activity, traffic and weather screens" },
    url: "https://keyview.ai/",
    featured: true,
    features: [
      { title: "Live camera view", description: "Live feeds with automatic people and vehicle counts." },
      { title: "Incident alerts", description: "AI detection of falls and fights surfaced as alerts." },
      { title: "Activity timeline", description: "A date-based timeline of everything that happened on the property." },
      { title: "Traffic & weather dashboards", description: "Day, week and month views with charts and data tables." },
    ],
    stack: [
      { label: "Mobile", items: ["React Native"] },
      { label: "Back end", items: ["Django", "PostgreSQL", "AWS"] },
      { label: "AI", items: ["OpenAI"] },
    ],
  },
  {
    slug: "snugglescript",
    title: "SnuggleScript",
    tagline: "AI bedtime stories made from your child's day",
    summary:
      "An iOS app that turns a child's real day into a personalised, illustrated bedtime story — with AI illustrations and read-aloud support.",
    overview: [
      "Parents type what happened today, or pick a prompt like School Day or Playdate, and SnuggleScript generates a story starring their child, with AI-created illustrations and read-aloud support.",
      "I built the app's screens and flows, including the home dashboard, story creation, an illustrated story viewer, a reading mode, favourites, ratings and a library of recent stories.",
    ],
    role: "Mobile engineer — screens and flows",
    platforms: ["iOS"],
    categories: ["mobile", "ai"],
    accent: "#a78bfa",
    image: { src: "/projects/snugglescript.webp", width: 1600, height: 1200, alt: "SnuggleScript home, story creation and illustrated story screens" },
    url: "https://snugglescript.ai/",
    featured: true,
    features: [
      { title: "Story creation", description: "Describe the day in free text or start from a prompt like School Day or Playdate." },
      { title: "Illustrated viewer", description: "Each story comes with AI-created illustrations starring the child." },
      { title: "Reading mode", description: "A calm, night-friendly reading mode with read-aloud support." },
      { title: "Library", description: "Favourites, ratings and a library of recent stories." },
    ],
    stack: [
      { label: "Mobile", items: ["React Native"] },
      { label: "Back end", items: ["Django", "PostgreSQL", "AWS"] },
      { label: "AI", items: ["Gemini"] },
    ],
  },
  {
    slug: "buoyhub",
    title: "BuoyHub",
    tagline: "All-in-one platform for IT, HR and CRM",
    summary:
      "A business platform combining IT support, HR/payroll/benefits and customer management — with a guided onboarding flow that recommends the right product and plan.",
    overview: [
      "BuoyHub is an all-in-one business platform combining IT support (BuoyIT), HR, payroll and benefits (BuoyPEO) and customer management (BuoyCRM).",
      "As front-end lead, I built the platform's user interface, including a guided onboarding flow that recommends the right product and plan, plan comparison with monthly and annual pricing, and reusable, responsive components shared across all Buoy products. I also handled API integration, state management and performance optimisation.",
    ],
    role: "Front-end lead",
    platforms: ["Web"],
    categories: ["web"],
    accent: "#e5395f",
    image: { src: "/projects/buoyhub.webp", width: 1600, height: 1200, alt: "BuoyHub onboarding and plan recommendation screens" },
    url: "https://www.buoyhub.com/",
    featured: true,
    features: [
      { title: "Guided onboarding", description: "A short questionnaire that recommends the right Buoy product and plan." },
      { title: "Plan comparison", description: "Side-by-side plans with monthly and annual pricing." },
      { title: "Shared component library", description: "Reusable, responsive components used across every Buoy product." },
    ],
    stack: [
      { label: "Front end", items: ["React", "AWS Amplify", "jsPDF", "html-to-image"] },
      { label: "Back end", items: ["Django 5", "DRF", "PostgreSQL", "Salesforce"] },
      { label: "Infrastructure", items: ["AWS Cognito", "S3", "SES", "Sentry"] },
    ],
  },
  {
    slug: "usdfi",
    title: "USDFI",
    tagline: "DeFi platform for swaps, liquidity, farming and staking",
    summary:
      "A DeFi platform bringing swaps, liquidity pools, farming, staking and portfolio tracking into one place, with smart contracts wired directly into the UI.",
    overview: [
      "USDFI is a DeFi platform that brings swaps, liquidity pools, farming, staking and portfolio tracking into one place.",
      "I integrated the platform's smart contracts into the web app using Ethers.js, connecting actions like swaps, adding liquidity and claiming rewards to on-chain transactions. I built the wallet integration for connecting wallets, signing transactions and keeping account and network state in sync, and handled pending, confirmed and failed states so users always got clear feedback.",
    ],
    role: "Software engineer (Web3)",
    platforms: ["Web"],
    categories: ["web", "web3"],
    accent: "#39e75f",
    image: { src: "/projects/usdfi.webp", width: 1600, height: 1200, alt: "USDFI swap, liquidity and portfolio screens" },
    url: "https://usdfi.com/",
    featured: true,
    features: [
      { title: "Smart contract integration", description: "Swaps, liquidity and reward claims wired to on-chain transactions." },
      { title: "Wallet integration", description: "Connect, sign and keep account and network state in sync with the UI." },
      { title: "Transaction feedback", description: "Clear pending, confirmed and failed states for every on-chain action." },
    ],
    stack: [{ label: "Web", items: ["Next.js", "Ethers.js", "Smart contracts", "Vercel"] }],
  },
  {
    slug: "swiftsales",
    title: "SwiftSales",
    tagline: "Live chat and CRM that turns visitors into customers",
    summary:
      "A customer engagement platform with an omnichannel inbox, real-time visitor tracking, a built-in CRM and in-chat payments — on web, iOS and Android.",
    overview: [
      "SwiftSales is a customer engagement platform for sales and support teams. Agents chat with website visitors and social media customers in real time, follow up on leads in a built-in CRM, and get paid, all from one dashboard.",
      "The web app uses Webpack Module Federation as a micro-frontend architecture, with the CRM shipped as a separate remote app. I built and maintained the React Native app, bringing live chat, AI-assisted replies, push notifications and lead tracking to iOS and Android.",
    ],
    role: "Senior engineer — React Native app",
    platforms: ["Web", "iOS", "Android"],
    categories: ["web", "mobile", "ai"],
    accent: "#f5b301",
    image: { src: "/projects/swiftsales.webp", width: 1800, height: 1125, alt: "SwiftSales chat inbox, CRM and mobile conversations" },
    features: [
      { title: "Omnichannel inbox", description: "Website chat, WhatsApp, Messenger and Instagram in a single queue." },
      { title: "Real-time visitor tracking", description: "Location, browser, traffic source and pages viewed — live." },
      { title: "Built-in CRM", description: "Contacts, deals and invoices with custom fields and activity logs." },
      { title: "In-chat payments", description: "Send invoices and collect via Stripe, PayPal or Authorize.net." },
      { title: "AI-assisted replies", description: "ChatGPT suggestions help agents answer faster." },
      { title: "Screen sharing", description: "Peer-to-peer co-browsing with visitors over WebRTC." },
    ],
    stack: [
      { label: "Web", items: ["React 17", "Redux", "Module Federation", "Socket.IO", "PeerJS", "Stripe"] },
      { label: "Mobile", items: ["React Native", "TypeScript", "React Query", "Reanimated", "FlashList", "FCM"] },
      { label: "DevOps", items: ["Docker", "Nginx", "Bitbucket Pipelines"] },
    ],
    highlights: ["English, Spanish and Arabic with RTL", "HubSpot & QuickBooks integrations", "Team chat with mentions"],
  },
  {
    slug: "homebrew-coffee",
    title: "Homebrew Coffee",
    tagline: "Online ordering website and mobile app for a coffee bar",
    summary:
      "An ordering website and companion mobile app for a Karachi coffee bar — searchable menu, cart, order tracking and WhatsApp ordering.",
    overview: [
      "Homebrew is a coffee bar in Karachi. I built its online ordering website and companion mobile app.",
      "The website includes a searchable menu with categories, discounted pricing, a cart, order tracking, WhatsApp ordering, an events page and a photo gallery, with live opening-hours status. The app lets customers browse by category, save favourites, manage their cart and check out, with delivery fees calculated automatically and alerts for order updates.",
    ],
    role: "Full-stack engineer — web and mobile",
    platforms: ["Web", "iOS", "Android"],
    categories: ["web", "mobile"],
    accent: "#c08a4a",
    image: { src: "/projects/homebrew-coffee.webp", width: 1600, height: 1200, alt: "Homebrew Coffee website and mobile app" },
    url: "https://homebrew.pk/",
    features: [
      { title: "Searchable menu", description: "Categories, discounted pricing and live opening-hours status." },
      { title: "Cart & tracking", description: "Cart, checkout, order tracking and WhatsApp ordering." },
      { title: "Mobile app", description: "Favourites, automatic delivery fees and order update alerts." },
    ],
    stack: [
      { label: "Web", items: ["Next.js"] },
      { label: "Mobile", items: ["React Native"] },
      { label: "Back end", items: ["Supabase"] },
    ],
  },
  {
    slug: "frnz",
    title: "FRNZ",
    tagline: "Find where your people are",
    summary:
      "A location-based social app with a live hotspot heatmap, interest-based matching, photo stories and real-time chat.",
    overview: [
      "FRNZ is a location-based social app for meeting new people and finding the busiest places nearby. It shows where people are gathering on a live heatmap, matches users with others who share their interests, and lets friends share the moment through stories and chat.",
      "The codebase keeps screens purely presentational, with all logic in reusable container hooks. Server data is cached with React Query and persisted with MMKV, so the app opens instantly and works offline.",
    ],
    role: "Mobile engineer",
    platforms: ["iOS", "Android"],
    categories: ["mobile"],
    accent: "#d946ef",
    image: { src: "/projects/frnz.webp", width: 1800, height: 1125, alt: "FRNZ onboarding quiz, hotspot map and venue screens" },
    features: [
      { title: "Live hotspot heatmap", description: "An interactive map of popular venues and events, with a Hotspots Near You feed." },
      { title: "FRNZ Travel", description: "Set a virtual location for two days to explore a city before you arrive." },
      { title: "Interest matching", description: "An onboarding quiz feeds friend suggestions and preference filters." },
      { title: "Stories & chat", description: "In-app camera stories with likes and comments, plus one-to-one chat." },
    ],
    stack: [
      { label: "Mobile", items: ["React Native", "TypeScript", "React Navigation", "React Query", "Zustand", "MMKV"] },
      { label: "Native", items: ["react-native-maps", "Google Places", "Vision Camera", "Gifted Chat", "Lottie", "i18next"] },
    ],
    highlights: ["35+ component shared UI kit", "Offline-ready persisted cache", "App-wide crash handling & version checks"],
  },
  {
    slug: "halal-connections",
    title: "Halal Connections",
    tagline: "Halal matchmaking, thoughtfully designed",
    summary:
      "A faith-centred matchmaking app with curated daily matches, ID-verified profiles and guardian-inclusive conversations.",
    overview: [
      "Halal Connections helps Muslims find a spouse in a way that respects Islamic values. Open-ended swiping is replaced by a small set of curated matches, verified profiles and conversations that can include the user's guardian (wali).",
      "I handled mobile development of the cross-platform app: building the UI from designs, state management, the real-time chat, the onboarding and verification flows, payment integration and push notifications.",
    ],
    role: "Mobile engineer",
    platforms: ["iOS", "Android"],
    categories: ["mobile"],
    accent: "#d4a35a",
    image: { src: "/projects/halal-connections.webp", width: 1800, height: 1125, alt: "Halal Connections onboarding, matches, profile and chat" },
    features: [
      { title: "Curated daily matches", description: "A few matches a day based on personal, professional and religious preferences." },
      { title: "72-hour match window", description: "A live countdown encourages users to respond with intent." },
      { title: "Guardian involvement", description: "Guardians get their own login and can join chats as participants." },
      { title: "ID verification", description: "In-app passport/ID capture with a trust badge on verified profiles." },
      { title: "Real-time chat", description: "Socket.IO messaging with requests, image sharing and moderation tools." },
      { title: "Subscriptions", description: "In-app purchases on iOS and Android plus card payments." },
    ],
    stack: [
      { label: "Mobile", items: ["React Native", "Redux", "React Navigation", "Formik", "Yup"] },
      { label: "Services", items: ["Socket.IO", "Firebase Messaging", "AWS S3", "React Native IAP", "Google & Apple Auth"] },
    ],
  },
  {
    slug: "instaqoin",
    title: "Instaqoin · Bitbox",
    tagline: "Buy and sell crypto for cash at partner stores",
    summary:
      "A platform for buying and selling Bitcoin for cash at partner retail locations, with live prices, KYC, a store locator and role-based web tools.",
    overview: [
      "Bitbox lets people buy and sell crypto in a few taps: pick a coin, choose an amount and complete the purchase or sale at a nearby partner store.",
      "The platform has a customer mobile app for iOS and Android, and a web app for customers, store staff and store admins with a different set of pages for each role.",
    ],
    role: "Front-end & mobile engineer",
    platforms: ["Web", "iOS", "Android"],
    categories: ["web", "mobile", "web3"],
    accent: "#e11d2e",
    image: { src: "/projects/instaqoin.webp", width: 1800, height: 1125, alt: "Bitbox buy screen, transaction history and dashboard" },
    features: [
      { title: "Instant buy & sell", description: "Preset or custom amounts, completed at the nearest partner location." },
      { title: "Live prices", description: "Current BTC rate and an interactive price-history chart." },
      { title: "KYC", description: "In-app ID verification with Onfido." },
      { title: "Store locator", description: "Nearby partner stores via device location and Google Places." },
      { title: "Store operator tools", description: "Plaid-linked bank accounts, staff management and per-store transactions." },
      { title: "Real-time updates", description: "FCM push notifications and live Socket.IO updates." },
    ],
    stack: [
      { label: "Mobile", items: ["React Native", "Redux", "Reanimated", "Rainbow Animated Charts", "Onfido SDK"] },
      { label: "Web", items: ["React", "Redux Saga", "ApexCharts", "Plaid Link", "Google Maps"] },
      { label: "Services", items: ["Firebase", "Socket.IO", "AWS S3"] },
    ],
  },
  {
    slug: "gyft",
    title: "Gyft",
    tagline: "Branded gift boxes, sent and tracked from one platform",
    summary:
      "A corporate gifting platform with an admin console, a business app for ordering gift boxes and a sales-rep app for sending gifts and tracking delivery.",
    overview: [
      "Gyft lets companies send branded gift boxes — custom T-shirts, caps, bottles and other merchandise — to clients and employees, then track each gift until it's delivered.",
      "It has three connected applications: a web admin panel for the platform team, a business app for companies ordering boxes, and a sales-rep app for sending gifts to clients.",
    ],
    role: "Front-end & mobile engineer",
    platforms: ["Web", "iOS", "Android"],
    categories: ["web", "mobile"],
    accent: "#f97316",
    image: { src: "/projects/gyft.webp", width: 1800, height: 1215, alt: "Gyft admin dashboard and mobile apps" },
    features: [
      { title: "Admin panel", description: "Accounts, catalogue, gift box contents, order status and monthly stats." },
      { title: "Business app", description: "Order boxes, manage cart, cards and teammates, with switchable brand themes." },
      { title: "Sales-rep app", description: "OTP onboarding, per-item sizes and colours, and delivery tracking." },
    ],
    stack: [
      { label: "Admin", items: ["React 18", "Redux", "Bootstrap 5", "SCSS", "ApexCharts", "Formik"] },
      { label: "Mobile", items: ["React Native", "TypeScript", "Redux Persist", "Lottie"] },
      { label: "DevOps", items: ["Bitbucket Pipelines", "Ubuntu"] },
    ],
  },
  {
    slug: "lofty",
    title: "Lofty",
    tagline: "E-learning with video courses, live sessions and certificates",
    summary:
      "An e-learning platform where teachers publish courses and students learn at their own pace, join live sessions and earn certificates.",
    overview: [
      "Lofty is an e-learning platform, similar to Udemy, where teachers publish courses and students learn at their own pace.",
      "Students browse trending and recommended courses, enroll, track progress and earn a certificate on completion. Live sessions come with a calendar of upcoming sessions and one-tap joining. Ratings, payments, purchase history, notifications, language selection and dark mode round it out.",
    ],
    role: "Mobile engineer",
    platforms: ["iOS", "Android"],
    categories: ["mobile"],
    accent: "#8b5cf6",
    image: { src: "/projects/lofty.webp", width: 1600, height: 1200, alt: "Lofty home, live sessions, courses and settings screens" },
    features: [
      { title: "Courses", description: "Trending and recommended courses, enrolment and progress tracking." },
      { title: "Live sessions", description: "A calendar of upcoming sessions and one-tap joining." },
      { title: "Certificates", description: "Earned automatically when a course is completed." },
    ],
    stack: [
      { label: "Mobile", items: ["React Native"] },
      { label: "Back end", items: ["NestJS", "PostgreSQL", "AWS"] },
    ],
  },
  {
    slug: "tutorpin",
    title: "TutorPin",
    tagline: "Quick written help from tutors, on web and mobile",
    summary:
      "A platform connecting students with tutors for written help on specific questions, with earnings dashboards, a knowledge bank and guardian accounts.",
    overview: [
      "TutorPin connects students with tutors for quick, written help on specific questions. Students post questions, tutors answer them and get paid, and guardians follow their children's progress.",
      "There's a responsive web app and a cross-platform mobile app, with onboarding tailored to each account type.",
    ],
    role: "Front-end & mobile engineer",
    platforms: ["Web", "iOS", "Android"],
    categories: ["web", "mobile"],
    accent: "#14b8a6",
    image: { src: "/projects/tutorpin.webp", width: 1800, height: 1125, alt: "TutorPin onboarding, question board, dashboard and earnings" },
    features: [
      { title: "Question board", description: "Questions by subject with urgency and media attachments, answered in threads." },
      { title: "Knowledge bank", description: "Reusable teaching resources organised by subject and topic." },
      { title: "Earnings & billing", description: "Earnings charts, bank accounts, withdrawals and downloadable reports." },
      { title: "Student wallet", description: "Time packages per subject with remaining-balance tracking." },
    ],
    stack: [
      { label: "Web", items: ["React", "Redux", "Bootstrap", "SCSS", "ApexCharts"] },
      { label: "Mobile", items: ["React Native", "Redux", "Formik", "Chart Kit"] },
      { label: "Back end", items: ["Node.js", "AWS"] },
    ],
  },
  {
    slug: "taskfox",
    title: "TaskFox",
    tagline: "On-demand home services, booked in a few clicks",
    summary:
      "A UAE home-services marketplace with a customer website, mobile app and admin panel sharing one backend — live pricing, Stripe payments and wallet top-ups.",
    overview: [
      "TaskFox is a home services marketplace in the UAE. Customers book cleaning professionals in a few clicks across a customer website, a mobile app for iOS and Android, and an admin panel for day-to-day operations.",
      "Booking is a step-by-step flow — frequency, service details, date and time, payment — with a price summary that updates live, promo codes at checkout, and the ability to reschedule, cancel and review afterwards.",
    ],
    role: "Front-end & mobile engineer",
    platforms: ["Web", "iOS", "Android"],
    categories: ["web", "mobile"],
    accent: "#f59e0b",
    image: { src: "/projects/taskfox.webp", width: 1800, height: 1125, alt: "TaskFox booking website and mobile app" },
    features: [
      { title: "Step-by-step booking", description: "Frequency → details → date & time → payment, with live pricing." },
      { title: "Payments & wallet", description: "Stripe cards, saved cards, wallet top-ups and promo codes." },
      { title: "Multilingual", description: "English and Arabic with RTL on web; Kurdish on mobile." },
      { title: "Admin panel", description: "Bookings, agents with availability calendars, services, payments and promotions." },
    ],
    stack: [
      { label: "Web", items: ["React 17", "Redux", "Stripe.js", "Google Maps", "i18next"] },
      { label: "Mobile", items: ["React Native", "Redux Saga", "React Native Maps", "Firebase", "Gifted Chat"] },
      { label: "Tooling", items: ["Bitbucket Pipelines", "ESLint", "Husky", "Jest"] },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
