
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
} from "lucide-react";
import { getAllProject } from "@/app/(dashboardLayout)/admin/project/_actions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProjectDetails from "@/components/layout/ProjectDetails";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/provider/container";


const ProjectPage = async () => {
    const projects = await getAllProject()
    return (

        <div className="">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-primary/5 px-8 py-20 mb-4">

                {/* Glow */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

                <div className="relative z-10 text-center">

                    <Badge className="mb-5">
                        Projects
                    </Badge>

                    <h1 className="text-5xl md:text-5xl font-bold tracking-tight font-mono">
                        Turning Ideas Into
                        <br />
                        Real-World Applications
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
                        Explore a collection of my full-stack and frontend projects, built with
                        modern technologies and best development practices. Each project reflects
                        my focus on performance, scalability, responsive design, and creating
                        intuitive user experiences.
                    </p>

                </div>

            </section>


            <Container>
                <div className="grid  lg:grid-cols-3 gap-5">
                    {projects.map((item) => (
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
                                            <DialogTrigger>
                                                <Button variant={"outline"} size="sm" className="flex-1 cursor-pointer ">
                                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                                    Details
                                                </Button>
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


            </Container>
        </div>

    );
};

export default ProjectPage;