import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "p-1",
    thumbnail: "/imessage.png",
    title: "iMessage",
    tools: ["Mern", "Socket.io", "Zustand"],
    description: "Real-time chat application",
    liveUrl: "https://imessage-r1s8.onrender.com/",
    githubUrl: "https://github.com/Vinitkumar96/iMessage",
    gradientColor: "#8B593E", // purple
  },
  {
    id: "p-2",
    thumbnail: "/buzz.png",
    title: "buzz qna",
    tools: ["Nextjs", "Nextauth", "prisma"],
    description: "ask anonymous questions to your friends",
    liveUrl: "https://buzzball.vercel.app",
    githubUrl: "https://github.com/Vinitkumar96/Buzzball",
    gradientColor: "#ffc0cb", // emerald
  },
  {
    id: "p-3",
    thumbnail: "/turboshort.png",
    title: "Turbo Short",
    tools: ["Nextjs", "Nextauth", "prisma"],
    description: "Paste your long Urls and get fast short links",
    liveUrl: "https://turboshort.vercel.app",
    githubUrl: "https://github.com/Vinitkumar96/turboshort",
    gradientColor: "#3b82f6", // blue,
  },
  {
    id: "p-4",
    thumbnail: "/e.png",
    title: "Expense Tracker",
    tools: ["Expo", "Clerk", "Neondb"],
    description: "Expense tracker where users can track money",
    liveUrl:
      "https://www.linkedin.com/posts/vinit-kumar-b14421378_shipped-a-fullstack-expense-tracker-mobile-activity-7433212489833603072-YfIL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF1SnwABSiX9x7UbT02ffKIxnapFyymd6Yo",
    githubUrl: "https://github.com/Vinitkumar96/expense-tracker-RN",
    gradientColor: "#8B593E", // purple
  }
];
