export const site = {
  name: "Saad Sheikh",
  shortName: "Saad",
  title: "Senior Software Engineer",
  specialty: "Full-Stack & React Native",
  currentRole: "Lead Software Engineer at BerTech LLC",
  location: "Karachi, Pakistan · Working remotely",
  email: "saadsheikh27@gmail.com",
  resume: "/saad-sheikh-resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Senior software engineer with 6+ years of experience building scalable web, mobile and desktop applications with React Native, React, Next.js, TypeScript, Django and Node.js.",
  summary:
    "I build scalable web, mobile and desktop applications. My deepest expertise is React Native for cross-platform iOS and Android, alongside React, Next.js and TypeScript on the web and Django, Node.js and PostgreSQL on the back end. I lead front-end architecture, integrate platforms like Salesforce and PandaDoc, own releases from staging to production, and mentor the engineers around me.",
  socials: {
    github: "https://github.com/saad277",
    linkedin: "https://www.linkedin.com/in/saad-sheikh27",
  },
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: 6, suffix: "+", label: "Years building software" },
  { value: 15, suffix: "+", label: "Products shipped" },
  { value: 5, suffix: "+", label: "Years of React Native" },
  { value: 3, suffix: "", label: "Platforms: web, mobile, desktop" },
] as const;

export const education = [
  { degree: "B.S. Software Engineering", school: "Sir Syed University", period: "2017 – 2020" },
  { degree: "H.S.C. Pre-Engineering", school: "Govt. College for Men", period: "" },
  { degree: "S.S.C. Science", school: "Bahria Foundation School", period: "" },
] as const;

export const accomplishments = [
  "Author of “Hands-on TypeScript with React Native” on Medium",
  "HackerRank React (Basic) certification",
] as const;

export const languages = ["English", "Urdu"] as const;
