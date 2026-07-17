"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import Typewriter from 'typewriter-effect';
import LogoSlider from "./logoSlider";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaXTwitter,
} from "react-icons/fa6";
import { Download } from "lucide-react";
export interface IProfileProps {
    title: string
    subtitle: string
    fullName: string
    description: string
    profileImages: string
    github: string
    linkedin: string
    twitter: string
    facebook: string
    resumeUrl: string
}
const HeroPage = ({ data }: { data: IProfileProps }) => {
    const socialIcons = [
        {
            name: "GitHub",
            href: data.github,
            icon: FaGithub,
        },
        {
            name: "LinkedIn",
            href: data.linkedin,
            icon: FaLinkedin,
        },
        {
            name: "X (Twitter)",
            href: data.twitter,
            icon: FaXTwitter,
        },
        {
            name: "Facebook",
            href: data.facebook,
            icon: FaFacebook,
        },
    ];
    return (

        <div className="">

            <div className="grid items-center gap-12 lg:grid-cols-2 py-10 relative">
                {/* Left Content */}
                <div className="space-y-6 text-center lg:text-left order-2 md:order-1">

                    <h3 className="md:text-[3vw] text-2xl font-medium font-mono ">
                        {data.title.split(".")[0]}
                    </h3>

                    <h3 className="max-md:text-[1vw] text-2xl font-mono font-medium text-primary">
                        <Typewriter
                        
                            options={{
                                strings: [data.title.split(".")[1], "Frontend Web Developer", "Backend Developer","Full Stack Developer"],
                                autoStart: true,
                                loop: true,
                                
                            }}
                        />
                    </h3>

                    <h2 className="text-sm max-sm:text-center text-muted-foreground sm:text-md">
                        {data.subtitle}
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4 lg:justify-start">
                        <Button size="lg" className="rounded-xl px-8 cursor-pointer">
                            <Download className="mr-2 h-4 w-4" />
                            <Link href={data.resumeUrl} target="_blank">Resume</Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-xl px-8"
                        >
                            <Link href={"/project"}>
                                View Projects
                            </Link>
                        </Button>
                    </div>
                    <div className=" absolute lg:top-[50%] top-[25%] translate-y-[-50%] right-0 overflow-hidden z-20 ">
                        <div className="flex  flex-col items-center gap-12 z-1 my-4">
                            {socialIcons.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"

                                        className="flex md:h-12 h-8 w-8 md:w-12 items-center justify-center rounded-full border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer animate-pulse"
                                    >
                                        <Icon className="text-xl" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center order-1 md:order-2 ">
                    {/* Background Blur */}


                    <div className="relative md:w-100 w-70 h-70  md:h-100 ">
                        <Image
                            src={data.profileImages}
                            alt={data.fullName}
                            sizes="(max-width: 640px) 100px,
                                     (max-width: 768px) 256px,
                                    (max-width: 1024px) 288px,
                                                     384px"
                            fill
                            className="w-full h-full rounded-full object-cover"
                        />

                        <div className="absolute -inset-3 rounded-full border-4 border-transparent border-t-primary border-b-primary animate-[spin_10s_linear_infinite]" />
                    </div>
                </div>
            </div>

            <div>
                <LogoSlider />
            </div>

        </div>

    )
}

export default HeroPage