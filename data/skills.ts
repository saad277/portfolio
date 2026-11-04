import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  { title: "Languages", icon: "code", items: ["TypeScript", "JavaScript", "Python", "Kotlin"] },
  { title: "Front-end", icon: "layout", items: ["React", "Next.js", "Vue.js", "Electron.js", "Tailwind CSS", "Redux", "React Query", "Zustand"] },
  {
    title: "Mobile & desktop",
    icon: "smartphone",
    items: ["React Native (iOS & Android)", "Jetpack Compose", "Android Studio (Gradle)", "Xcode", "App Store & Google Play releases"],
  },
  { title: "Back-end & data", icon: "server", items: ["Django", "Django REST Framework", "Node.js", "NestJS", "PostgreSQL", "Supabase", "Celery & Redis", "AWS"] },
  { title: "AI", icon: "sparkles", items: ["Anthropic Claude API", "OpenAI", "Gemini", "Document parsing", "AI-generated insights"] },
  { title: "Web3", icon: "blocks", items: ["Ethers.js", "Smart contract integration", "Wallet integration"] },
  { title: "Integrations", icon: "plug", items: ["Salesforce", "PandaDoc", "Stripe", "Plaid", "Onfido", "Firebase", "Socket.IO", "Google Maps"] },
  { title: "DevOps & practices", icon: "rocket", items: ["Git", "CI/CD (Bitrise, Bitbucket Pipelines)", "Release management", "System architecture", "Performance", "Accessibility", "Code review & mentoring"] },
];

/** Shown in the scrolling marquee under the hero. */
export const marqueeTech = [
  "React Native",
  "TypeScript",
  "Next.js",
  "React",
  "Django",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "AWS",
  "Electron",
  "Vue.js",
  "Claude API",
  "Ethers.js",
  "Firebase",
  "Socket.IO",
  "Kotlin",
];
