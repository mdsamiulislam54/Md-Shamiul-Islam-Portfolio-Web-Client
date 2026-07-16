"use client"

import { ISkill } from "@/app/(dashboardLayout)/admin/skill/_actions"

import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useMemo, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaBootstrap,
  FaNpm,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiJavascript,
  SiExpress,
  SiFirebase,
  SiRedux,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiShadcnui,
  SiMui,
  SiReactquery,
  SiAxios,
  SiCloudinary,
  SiPostman,
  SiGit,
  SiGo,
  SiMongoose,

  SiBetterauth,
  SiIcon,
} from "react-icons/si";

export const iconMap = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: SiJavascript,
  typescript: SiTypescript,
  go: SiGo,
  echo: SiGo,

  react: FaReact,
  next: SiNextdotjs,
  redux: SiRedux,
  reactquery: SiReactquery,
  tailwindcss: SiTailwindcss,
  bootstrap: FaBootstrap,
  shadcn: SiShadcnui,
  mui: SiMui,
  axios: SiAxios,
  better: SiBetterauth,
  icon: SiIcon,

  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  mongoose: SiMongodb,
  postgrasql: SiPostgresql,
  mysql: SiMysql,
  prisma: SiPrisma,
  redis: SiRedis,
  firebase: SiFirebase,
  jwt: SiJsonwebtokens,

  git: SiGit,
  github: FaGithub,
  docker: FaDocker,
  vercel: SiVercel,
  netlify: SiNetlify,
  postman: SiPostman,
  cloudinary: SiCloudinary,
  npm: FaNpm,
  figma: FaFigma,
} as const;
interface ISkillProps {
  skill: ISkill[]
}



const Skills = ({ skill }: ISkillProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(skill.map((item) => item.category))];
  const filteredSkill = useMemo(() => {
    if (activeCategory === "All") return skill;
    return skill.filter((item) => (
      item.category === activeCategory
    ))
  }, [skill, activeCategory])


  return (
    <div>

    
      <div>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">

        {filteredSkill.slice(0, 18).map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <Card key={item.id} className="cursor-pointer !rounded-lg shadow-md hover:bg-secondary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <CardContent className="flex flex-col items-center gap-3 p-4 hover:scale-105 transition-all duration-300">
                {Icon && <Icon className="h-12 w-12 text-primary" />}
                <h3 className="text-sm font-bold font-mono">{item.name}</h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  )
}

export default Skills