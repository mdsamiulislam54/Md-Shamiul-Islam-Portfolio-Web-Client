"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ExternalLink,
    MoreHorizontal,
    Pencil,
    Trash2,
    Star,
} from "lucide-react";

import { IProjectPayload } from "@/app/(dashboardLayout)/admin/project/_actions";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { SiGithub } from "react-icons/si";
import { useRouter } from "next/navigation";

interface IProjectTableProps {
    data: IProjectPayload[];
}

const ProjectTable = ({ data }: IProjectTableProps) => {

    const router = useRouter()

    const update = (id: string) => {
        router.push(`/admin/update_project/${id}`);
    };




    return (
        <div className="overflow-hidden rounded-xl border bg-background">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-20">Image</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Technology</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Order</TableHead>
                        <TableHead>Links</TableHead>
                        <TableHead className="w-16 text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((project) => (
                        <TableRow key={project.id}>
                            <TableCell>
                                <Image
                                    src={project.thumbnail}
                                    alt={project.name}
                                    width={60}
                                    height={60}
                                    className="rounded-md object-cover"
                                />
                            </TableCell>

                            <TableCell>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold">{project.name}</p>

                                        {project.isFeatured && (
                                            <Badge variant="secondary">
                                                <Star className="mr-1 h-3 w-3 fill-current" />
                                                Featured
                                            </Badge>
                                        )}
                                    </div>

                                    <p className="line-clamp-2 max-w-xs text-sm text-muted-foreground">
                                        {project.shortDesc}
                                    </p>
                                </div>
                            </TableCell>

                            <TableCell>
                                <div className="flex max-w-xs flex-wrap gap-1">
                                    {project.tech.map((tech: string) => (
                                        <Badge key={tech} variant="outline">
                                            {tech.trim()}
                                        </Badge>
                                    ))}
                                </div>
                            </TableCell>

                            <TableCell>
                                <Badge
                                    variant={
                                        project.isPublished ? "default" : "destructive"
                                    }
                                >
                                    {project.isPublished ? "Published" : "Draft"}
                                </Badge>
                            </TableCell>

                            <TableCell>{project.order}</TableCell>

                            <TableCell>
                                <div className="flex gap-2">
                                    <Link
                                        href={project.clientRepo}
                                        target="_blank"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent transition-colors"
                                    >
                                        <SiGithub className="h-4 w-4" />
                                    </Link>

                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent transition-colors"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </div>
                            </TableCell>

                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-5 w-5" />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => update(project.id)}>
                                            <Pencil className="mr-2 h-4 w-4" />
                                            Update
                                        </DropdownMenuItem>

                                        <DropdownMenuItem className="text-red-500 focus:text-red-500">
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}

                    {data.length === 0 && (
                        <TableRow>
                            <TableCell
                                colSpan={7}
                                className="py-10 text-center text-muted-foreground"
                            >
                                No Project Found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProjectTable;