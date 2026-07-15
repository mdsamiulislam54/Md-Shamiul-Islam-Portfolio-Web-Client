import { getAbout } from "@/app/(dashboardLayout)/admin/about/_actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Code2, Briefcase } from "lucide-react";
import { Container } from "@/components/provider/container";
import {
    RiNextjsFill,
    RiReactjsLine,
    RiTailwindCssFill,
} from "react-icons/ri";

import {
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiShadcnui,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiGo,
    SiJsonwebtokens,
} from "react-icons/si";

const tech = [
    {
        name: "HTML",
        icon: SiHtml5,
    },
    {
        name: "CSS",
        icon: SiCss,
    },
    {
        name: "Next.js",
        icon: RiNextjsFill,
    },
    {
        name: "React",
        icon: RiReactjsLine,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "GO",
        icon: SiGo,
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
    },
   
    {
        name: "Express",
        icon: SiExpress,
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
    },
    {
        name: "Prisma",
        icon: SiPrisma,
    },
    {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
    },
    {
        name: "Shadcn UI",
        icon: SiShadcnui,
    },
    {
        name: "JWT",
        icon: SiJsonwebtokens,
    },
];
const timeline = [
    { year: "2022", title: "Started HTML & CSS" },
    { year: "2023", title: "Self Learning Journey" },
    { year: "2024", title: "Diploma + Creative IT Training" },
    { year: "2025", title: "Programming Hero Complete Web Development" },
    { year: "2026", title: "Next Level Web Development" },
];




export default async function AboutPage() {
    const about = await getAbout();

    return (
        <section className="">
            <section className="relative overflow-hidden rounded-3xl  bg-gradient-to-br from-background via-background to-primary/5 px-8 py-2  mb-4">

                {/* Glow */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

                <div className="relative z-10 text-center">

                    <Badge className="mb-5">
                        About Me
                    </Badge>

                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-mono">
                        Building Modern Web Experiences.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl  text-muted-foreground text-sm leading-5">
                        Passionate Full Stack Developer focused on creating scalable,
                        responsive and user-friendly digital products.
                    </p>

                </div>

            </section>
            <Container>


                <div className="space-y-5">
                    {/* About */}
                    <Card className="lg:row-span-2">

                        <CardContent className=" leading-6 text-muted-foreground text-lg">
                            {about.description.split("/n").map((p, i) => (
                                <p key={i} className="mb-3">{p}</p>
                            ))}
                        </CardContent>
                    </Card>



                    {/* Bottom Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 font-mono">
                                    <Code2 className="h-5 w-5 text-primary " />
                                    Tech Stack
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="grid grid-cols-3 gap-5 justify-items-center ">
                              
                                    {tech.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={item.name}
                                                className="flex w-full items-center gap-3 rounded-xl border bg-card p-3 transition-all hover:border-primary hover:bg-primary/5 cursor-pointer"
                                            >
                                                <Icon className="h-5 w-5 text-primary" />
                                                <span className="text-sm font-medium">{item.name}</span>
                                            </div>
                                        );
                                    })}
                            
                            </CardContent>
                        </Card>
                        {/* Timeline */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 font-mono">
                                    <CalendarDays className="h-5 w-5 text-primary" />
                                    Journey Timeline
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="relative border-l pl-6">
                                    {timeline.map((item) => (
                                        <div key={item.year} className="relative pb-8 last:pb-0">
                                            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />

                                            <p className="font-semibold">{item.year}</p>

                                            <p className="text-sm text-muted-foreground">
                                                {item.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </Container>
        </section>
    );
}