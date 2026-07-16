
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
} from "lucide-react";
import { IProjectPayload } from "@/app/(dashboardLayout)/admin/project/_actions";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
} from "../ui/card";

import ProjectDetails from "./ProjectDetails";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
interface IProjectProps {
    project: IProjectPayload[];
}
const Project = ({ project }: IProjectProps) => {
    return (

        <div className="">
            <div className="mb-6 text-center">
                <h2 className="lg:text-4xl text-xl font-bold font-mono">
                    Featured Projects
                </h2>

                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                    Some of my recent full stack projects built using
                    modern technologies.
                </p>
            </div>


            <div className="grid  lg:grid-cols-3 gap-5">
                {project.slice(0, 3).map((item) => (
                    <div
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

                            <CardContent className="space-y-5 pb-2">
                                <div>
                                    <h3 className="text-xl font-semibold font-mono">
                                        {item.name}
                                    </h3>

                                    <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                                        {item.shortDesc}
                                    </p>
                                </div>

                                <div className="flex gap-3">

                                    <Button
                                        size="sm"
                                        className="flex-1 rounded-lg"
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


                                    <Dialog>
                                        <DialogTrigger >
                                            <span  className="flex items-center gap-3 cursor-pointer border p-1 ">
                                                <ArrowUpRight className="ml-2 h-4 w-4" />
                                                Details
                                            </span>
                                        </DialogTrigger>

                                        <DialogContent className="!max-w-6xl !w-[95vw] !max-h-[90vh] overflow-y-auto p-0">
                                            <ProjectDetails projectId={item.id} />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Button>
                    <Link href={"/project"}>
                        See More
                    </Link>
                </Button>
            </div>

        </div>

    );
};

export default Project;