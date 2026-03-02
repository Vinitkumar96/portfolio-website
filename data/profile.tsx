import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiSupabase,
  SiShadcnui,
  SiExpo,
  SiPostman,
  SiLeetcode,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaJs, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiBearFace } from "react-icons/gi";
import type { StackItem, SocialLink } from "@/lib/types";

export const stackItems: StackItem[] = [
  { name: "MongoDB", icon: <DiMongodb color="#00EE64" /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "React", icon: <FaReact color="#2B7FFF" /> },
  { name: "Node", icon: <FaNodeJs color="#5BAC47" /> },
  { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Nextjs", icon: <RiNextjsFill /> },
  { name: "PostgresSQL", icon: <BiLogoPostgresql color="#336791" /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Zustand", icon: <GiBearFace color="#453F39" /> },
  { name: "Supabase", icon: <SiSupabase color="#3DC98A" /> },
  { name: "Shadcn", icon: <SiShadcnui /> },
  { name: "Javascript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React Native", icon: <FaReact color="#58C4DC" /> },
  { name: "Expo", icon: <SiExpo color="#EDEEF0" /> },
  { name: "git/github", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman color="#F76935" /> },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/vinit-kumar-b14421378/",
    icon: <FaLinkedin color="#2B7FFF" />,
    previewImage: "/linkedin.png",
    previewAlt: "linkedin vinit",
  },
  {
    name: "Github",
    url: "https://github.com/Vinitkumar96",
    icon: <FaGithub color="#2B7FFF" />,
    previewImage: "/github.png",
    previewAlt: "github vinit",
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/u/vinitkumar90/",
    icon: <SiLeetcode color="#2B7FFF" />,
    previewImage: "/let.png",
    previewAlt: "leetcode vinit",
  },
];
