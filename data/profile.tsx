import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiSupabase,
  SiShadcnui,
  SiExpo,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaJs, FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiBearFace } from "react-icons/gi";
import type { StackItem } from "@/lib/types";

export const stackItems: StackItem[] = [
  { name: "MongoDB", icon: <DiMongodb  /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "React", icon: <FaReact  /> },
  { name: "Node", icon: <FaNodeJs /> },
  { name: "Typescript", icon: <SiTypescript  /> },
  { name: "Nextjs", icon: <RiNextjsFill /> },
  { name: "PostgresSQL", icon: <BiLogoPostgresql  /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "Zustand", icon: <GiBearFace  /> },
  { name: "Supabase", icon: <SiSupabase  /> },
  { name: "Shadcn", icon: <SiShadcnui /> },
  { name: "Javascript", icon: <FaJs  /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Expo", icon: <SiExpo /> },
  { name: "git/github", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
];

