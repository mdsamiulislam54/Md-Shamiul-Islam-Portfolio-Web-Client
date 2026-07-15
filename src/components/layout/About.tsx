import { IAbout } from "@/app/(dashboardLayout)/admin/about/_actions";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {  FolderOpen, Code2 } from "lucide-react";

interface IAboutProps {
    about: IAbout;
    profileImage: string;
}

const About = ({ about, profileImage }: IAboutProps) => {
    return (

        <div className="grid gap-12 lg:grid-cols-3">
            {/* Image */}
            <div className="flex justify-center">
                <Image
                    src={profileImage}
                    alt="About Image"
                    width={420}
                    height={520}
                    className="rounded-[32px] object-cover shadow-xl"
                />
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
                <span className="text-sm font-medium uppercase tracking-widest text-primary">
                    About Me
                </span>

                <h2 className="mt-3 text-4xl font-bold">
                    Who I&apos;m
                </h2>

                <p className="mt-6 text-muted-foreground leading-8 line-clamp-6">
                    {about.description}
                </p>

                {/* Trust Cards */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border bg-card p-5">
                        <Code2 className="mb-3 h-8 w-8 text-primary" />
                        <h4 className="font-semibold">Clean Code</h4>
                        <p className="text-sm text-muted-foreground">
                            Readable, maintainable, and scalable solutions.
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <FolderOpen className="mb-3 h-8 w-8 text-primary" />
                        <h4 className="font-semibold">Projects</h4>
                        <p className="text-sm text-muted-foreground">
                            20+ Completed
                        </p>
                    </div>

                    <div className="rounded-xl border bg-card p-5">
                        <Code2 className="mb-3 h-8 w-8 text-primary" />
                        <h4 className="font-semibold">Technologies</h4>
                        <p className="text-sm text-muted-foreground">
                            Modern Web Stack
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="mt-8">
                    <Button size="lg">
                        <Link href="/about">
                            See More About Me
                        </Link>
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default About;