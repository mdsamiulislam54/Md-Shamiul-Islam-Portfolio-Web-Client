"use client";

import { deleteSkill, ISkill } from "@/app/(dashboardLayout)/admin/skill/_actions";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    MoreHorizontal,
    Pencil,
    Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface ISkillProps {
    skill: ISkill[];

}

export const SkillTable = ({ skill }: ISkillProps) => {
    const router = useRouter()
    const handleDelete = async (id: string) => {
        try {
            const res = await deleteSkill(id);
            console.log("res", res)
            if (res.success) {
                toast.success("Skill deleted successfully");

                router.refresh();
            }

        } catch (error) {
            toast.error("Failed to delete skill");
        }
    };

    const edit = (id: string) => {
        router.push(`/admin/skill/edit/${id}`)
    }

    return (
        <div className="overflow-hidden rounded-xl border bg-background">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[60px]">#</TableHead>
                        <TableHead>Skill</TableHead>
                        <TableHead>Icon Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Order</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {skill.length > 0 ? (
                        skill.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell>{index + 1}</TableCell>

                                <TableCell className="font-medium">
                                    {item.name}
                                </TableCell>
                                <TableCell className="font-medium">
                                    {item.icon}
                                </TableCell>

                                <TableCell>
                                    <Badge variant="secondary">
                                        {item.category}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    {item.level ? `${item.level}%` : "-"}
                                </TableCell>

                                <TableCell>
                                    {item.isPublished ? (
                                        <Badge>Published</Badge>
                                    ) : (
                                        <Badge variant="destructive">
                                            Draft
                                        </Badge>
                                    )}
                                </TableCell>

                                <TableCell>{item.order}</TableCell>

                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger >
                                            <div

                                                className="p-2"
                                            >
                                                <MoreHorizontal className="h-4 w-4" />
                                            </div>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => edit(item.id!)}>

                                                <Pencil className="mr-2 h-4 w-4" />
                                                Edit

                                            </DropdownMenuItem>

                                            <DropdownMenuItem
                                                className="text-destructive focus:text-destructive"
                                                onClick={() => handleDelete(item.id!)}

                                            >
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={7}
                                className="h-28 text-center text-muted-foreground"
                            >
                                No skills found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};