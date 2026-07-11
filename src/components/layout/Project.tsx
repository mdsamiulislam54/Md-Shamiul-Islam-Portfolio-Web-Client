"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
} from "lucide-react";

import { IProjectPayload } from "@/app/(dashboardLayout)/admin/project/_actions";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
} from "../ui/card";
import { SiGithub } from "react-icons/si";

interface IProjectProps {
    project: IProjectPayload[];
}

const Project = ({ project }: IProjectProps) => {
    return (

        <div className="">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold">
                    Featured Projects
                </h2>

                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                    Some of my recent full stack projects built using
                    modern technologies.
                </p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {project.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="md:basis-1/2 xl:basis-1/3 my-10"
                        >
                            <Card className="group overflow-hidden rounded-2xl  transition-all duration-300 hover:cursor-pointer shadow-2xl  p-0 ">
                                <div className="relative aspect-video overflow-hidden ">
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105   cursor-pointer "
                                    />
                                </div>

                                <CardContent className="space-y-5 p-6">
                                    <div>
                                        <h3 className="text-xl font-semibold font-mono">
                                            {item.name}
                                        </h3>

                                        <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                                            {item.shortDesc}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech.trim()}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <Button
                                            size="sm"
                                            variant="outline"

                                            className="flex-1"
                                        >
                                            <Link
                                                href={item.clientRepo}
                                                target="_blank"
                                                className="flex"
                                            >
                                                <SiGithub className="mr-2 h-4 w-4" />
                                                Client
                                            </Link>
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"

                                            className="flex-1"
                                        >
                                            <Link
                                                href={item.clientRepo}
                                                target="_blank"
                                                className="flex"
                                            >
                                                <SiGithub className="mr-2 h-4 w-4" />
                                                Server
                                            </Link>
                                        </Button>

                                        <Button
                                            size="sm"
                                            className="flex-1"
                                        >
                                            <Link
                                                href={item.liveUrl}
                                                target="_blank"
                                                className="flex"
                                            >
                                                Live
                                                <ArrowUpRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="-left-5" />
                <CarouselNext className="-right-5" />
            </Carousel>
        </div>

    );
};

export default Project;