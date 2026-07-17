import { getProjectByID } from "@/app/(dashboardLayout)/admin/project/_actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ExternalLink, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

interface IProjectDetails {
    projectId: string;
}

const ProjectDetails = async ({ projectId }: IProjectDetails) => {
    const project = await getProjectByID(projectId);

    return (
        <div className="space-y-8 p-4">

            {/* Hero Image */}
            <div className="grid md:grid-cols-2 gap-2 justify-items-center place-items-center">
                <div className="relative  overflow-hidden rounded-2xl">
                    <Image
                        src={project.thumbnail}
                        alt={project.name}
                        width={500}
                        height={500}
                        className="object-center w-full"
                    />

                    <div className="grid grid-cols-3 gap-2 mt-10">

                        <Button >
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                className="flex max-sm:text-xs"
                            >
                                <ExternalLink className="mr-2 sm:h-4 h-2 sm:w-4 w-2" />
                                Live Demo
                            </Link>
                        </Button>

                        <Button
                      

                        >
                            <Link
                                href={project.clientRepo}
                                target="_blank"
                                 className="flex max-sm:text-xs"
                            >
                                <SiGithub className="mr-2 sm:h-4 h-2 sm:w-4 w-2" />
                                Client Repo
                            </Link>
                        </Button>

                        {project.serverRepo && (
                            <Button
                               

                            >
                                <Link
                                    href={project.serverRepo}
                                    target="_blank"
                                     className="flex max-sm:text-xs"
                                >
                                    <SiGithub className="mr-2 sm:h-4 h-2 sm:w-4 w-2" />
                                    Server Repo
                                </Link>
                            </Button>
                        )}

                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <h1 className="text-2xl font-bold font-mono">{project.name}</h1>
                    </div>

                    <p className="text-muted-foreground text-sm">
                        {project.shortDesc}
                    </p>


                    <div>
                        <h2 className="mb-4 text-lg font-semibold font-mono">
                            Tech Stack
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((item: string) => (
                                <Badge
                                    key={item}
                                    
                                >
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold font-mono">
                            Key Features
                        </h2>

                        <div className="space-y-3">
                            {project.feature.map((feature: string) => (
                                <div
                                    key={feature}
                                    className="flex gap-3"
                                >
                                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />

                                    <p>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>




            {/* Description */}
            <div>
                <h2 className="mb-4 text-xl font-semibold font-mono">
                    Project Overview
                </h2>

                <p className="leading-6 ">
                    {project.description}
                </p>
            </div>

    


           

        </div>
    );
};

export default ProjectDetails;