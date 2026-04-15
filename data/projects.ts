import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "ecom-1",
    thumbnail: "/e.png",
    title: "Expense Tracker",
    tools: ["Expo", "Clerk", "Neondb"],
    description:
      "Expense tracker where users can track money",
    liveUrl:
      "https://www.linkedin.com/posts/vinit-kumar-b14421378_shipped-a-fullstack-expense-tracker-mobile-activity-7433212489833603072-YfIL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1SnwABSiX9x7UbT02ffKIxnapFyymd6Yo",
    githubUrl: "https://github.com/Vinitkumar96/expense-tracker-RN",
    gradientColor: "#8B593E", // purple
  },
  {
    id: "ecom-2",
    thumbnail: "/turboshort.png",
    title: "Turbo Short",
    tools: ["Nextjs", "Nextauth", "prisma"],
    description:
      "Paste your long Urls and get fast short links",
    liveUrl: "https://turboshort.vercel.app",
    githubUrl: "https://github.com/Vinitkumar96/turboshort",
    // gradientColor: "#3b82f6", // blue,
    gradientColor:"#64748b"
  },
  {
    id: "ecom-3",
    thumbnail: "/p.png",
    title: "coming soon",
    tools: ["html", "css", "js"],
    description:
      "some short description about the project",
    liveUrl: "#",
    githubUrl: "#",
    gradientColor: "#10b981", // emerald
  },
  {
    id: "ecom-4",
    thumbnail: "/p.png",
    title: "coming soon",
    tools: ["html", "css", "js"],
   description:
      "some short description about the project",
    liveUrl: "#",
    githubUrl: "#",
    gradientColor: "#f97316", // orange
  },
];


// #a855f7