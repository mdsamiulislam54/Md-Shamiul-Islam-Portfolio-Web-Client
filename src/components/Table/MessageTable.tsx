"use client"
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
import { Eye, Trash2 } from "lucide-react";
import { deleteMessage, IMessage } from "@/app/(dashboardLayout)/admin/message/_actions";
import ViewMessageDialog from "../model/MessageDetails";
import { toast } from "sonner";


interface MessageTableProps {
    messages: IMessage[];
}

const deleteM = async (id: string) => {
    try {
        await deleteMessage(id)
        toast.success("Message Delete successfully!!")
    } catch (error) {
        console.log(error)
        toast.error("Message delete Failed")
        throw error
    }
}

const MessageTable = ({ messages }: MessageTableProps) => {
    return (
        <div className="overflow-hidden rounded-xl border bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="w-[120px] text-right">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {messages.length ? (
                        messages.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">
                                    {item.name}
                                </TableCell>

                                <TableCell>{item.email}</TableCell>

                                <TableCell className="max-w-[220px] truncate">
                                    {item.subject}
                                </TableCell>

                                <TableCell>
                                    <Badge
                                        variant={item.isRead ? "secondary" : "default"}
                                    >
                                        {item.isRead ? "Read" : "Unread"}
                                    </Badge>
                                </TableCell>

                                <TableCell>
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </TableCell>

                                <TableCell>
                                    <div className="flex justify-end items-center gap-2 cursor-pointer">

                                        <div>
                                            <ViewMessageDialog message={item} />
                                        </div>
                                        <Button variant={"destructive"} onClick={() => deleteM(item.id)} className={"cursor-pointer"}>
                                            <Trash2 />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={6}
                                className="h-32 text-center text-muted-foreground"
                            >
                                No messages found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default MessageTable;