import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  displayName: "Sri Vamsi Rajesh",
  username: "srirae",
  gender: "male",
  pronouns: "he/him",
  bio: "Building tools 🛠️ for myself",
  flipSentences: [
    "Building tools 🛠️ for myself",
    "Learning infra dev ⚙️",
    "Contributing to open source 🌐",
    "Undergraduate Researcher 🔬",
  ],
  address: "Newark, NJ",
  emailB64: "c3JpdmFtc2lyYWplc2hAZ21haWwuY29t", // base64 encoded for srivamsirajesh@gmail.com
  website: "https://iamsri.vercel.app",
  jobTitle: "Student",
  jobs: [
    {
      title: "CS Student",
      company: "NJIT",
      website: "https://www.njit.edu",
      experienceId: "njit",
    },
    {
      title: "Undergraduate Researcher",
      company: "iXR Lab & SPUR Lab",
      website: ["https://link1.com", "https://link2.com"],
      experienceId: "ixr-spur-lab",
    },
  ],
  about: `I’m Sri Vamsi Rajesh — a CS student at New Jersey Institute of Technology passionate about platform engineering and developer tools. Currently learning Go 🐹💙.

In my free time, I contribute to open-source software and build projects ranging from IPC frameworks to custom APIs.

Always exploring low-level systems, infrastructure development, and efficient toolmaking.`,
  avatar: "/img/pic.jpeg",
  ogImage: "https://iamsri.vercel.app/og-image.png",
  timeZone: "America/New_York",
  keywords: [],
  dateCreated: "2023-10-20",
};