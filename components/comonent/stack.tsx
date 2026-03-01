import React from "react";
import { DiMongodb } from "react-icons/di";
import { SiExpress,SiTypescript,SiPrisma,SiSupabase,SiShadcnui,SiExpo,SiPostman} from "react-icons/si";
import { FaReact,FaNodeJs,FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiBearFace } from "react-icons/gi";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

const stackList = [
  {
    name:"MongoDB",
    ic:<DiMongodb color="#00EE64" />
  },
  {
    name:"Express",
    ic:<SiExpress />
   },
  {
    name:"React",
    ic:<FaReact color="#2B7FFF" />
  },
  {
    name:"Node",
    ic:<FaNodeJs color="#5BAC47"/>
  },
  {
    name:"Typescript",
    ic:<SiTypescript color="#3178C6"/>
  },
  {
    name:"Nextjs",
    ic:<RiNextjsFill/>
  },
  {
    name:"PostgresSQL",
    ic:<BiLogoPostgresql color="#336791"/>
  },
  {
    name:"Prisma",
    ic:<SiPrisma/>
  },
  {
    name:"Zustand",
    ic:<GiBearFace color="#453F39"/>
  },
  {
    name:"Supabase",
    ic:<SiSupabase color="#3DC98A"/>
  },
  {
    name:"Shadcn",
    ic:<SiShadcnui />
  },
  {
    name:"Javascript",
    ic:<FaJs color="#F7DF1E"/>
  },
  {
    name:"React Native",
    ic:<FaReact color="#58C4DC" />
  },
  {
    name:"Expo",
    ic:<SiExpo color="#EDEEF0" />
  },
  {
    name:"git/github",
    ic:<FaGithub/>
  },
  {
    name:"Postman",
    ic:<SiPostman color="#F76935"/>
  }

]

const Stack = () => {
  return (
    <div className="bg-neutral-900/20 border-x flex flex-wrap justify-center items-center rounded-2xl border-neutral-600/70 p-2  border-t border-t-neutral-600/40 mb-4 py-2  px-1">
     {
      stackList.map((s,i) => {
        return(
          <div key={i} className="bg-neutral-900/30 rounded-xl p-1 px-2 m-1 flex items-center gap-1  border cursor-pointer border-dashed hover:border-neutral-600 transition-all  ">
            {s.ic}
            <p className="text-[12px] font-mono">{s.name} </p>
          </div>
        )
      })
     }
    </div>
  );
};

export default Stack;
