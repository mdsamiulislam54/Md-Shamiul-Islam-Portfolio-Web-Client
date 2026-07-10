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

        <div>
            <div className="grid items-center gap-12 lg:grid-cols-2 py-10">
                {/* Left Content */}
                <div className="space-y-6 text-center lg:text-left">

                    <h3 className="text-lg font-medium font-mono ">
                        {data.title.split(".")[0]}
                    </h3>

                    <h3 className="text-2xl font-medium ">
                        <Typewriter
                            options={{
                                strings: [data.title.split(".")[1], "Frontend Web Developer","Backend Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>

                    <h2 className="text-sm font-mono font-semibold text-muted-foreground sm:text-sm">
                        {data.subtitle}
                    </h2>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4 lg:justify-start">
                        <Button size="lg" className="rounded-xl px-8 cursor-pointer">
                            <Download className="mr-2 h-4 w-4" />
                            <Link href={data.resumeUrl} target="_blank">Download CV</Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-xl px-8"
                        >
                            View Projects
                        </Button>
                    </div>
                    <div className="flex items-center gap-4">
                        {socialIcons.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                    <Icon className="text-xl" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center  ">
                    {/* Background Blur */}


                    <div className="relative w-100 h-100">
                        <Image
                            src={data.profileImages}
                            alt={data.fullName}
                            width={400}
                            height={400}
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