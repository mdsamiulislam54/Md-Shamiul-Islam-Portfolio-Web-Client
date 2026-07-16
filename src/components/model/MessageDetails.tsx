"use client";


import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { IMessage } from "@/app/(dashboardLayout)/admin/message/_actions";

interface Props {
    message: IMessage;
}

export default function ViewMessageDialog({ message }: Props) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button size="icon" variant="outline">
                    <Eye className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Message Details</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-sm text-muted-foreground">Name</p>
                            <p className="font-medium">{message.name}</p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium">{message.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Subject</p>
                            <p className="font-medium">{message.subject}</p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">Status</p>

                            <Badge variant={message.isRead ? "secondary" : "default"}>
                                {message.isRead ? "Read" : "Unread"}
                            </Badge>
                        </div>

                        <div className="sm:col-span-2">
                            <p className="text-sm text-muted-foreground">Received</p>
                            <p className="font-medium">
                                {new Date(message.createdAt).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                            Message
                        </p>

                        <div className="rounded-lg border bg-muted/40 p-4 whitespace-pre-wrap leading-7">
                            {message.message}
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button>
                        <a href={`mailto:${message.email}?subject=Re: ${message.subject}`}>
                            Reply
                        </a>
                    </Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    );
}