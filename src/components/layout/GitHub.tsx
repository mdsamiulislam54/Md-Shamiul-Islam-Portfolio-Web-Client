"use client"
import { GitHubCalendar, } from "react-github-calendar";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
const GitHub = () => {
    return (
        <div className="w-full">
            <Card>
                <CardContent className="overflow-x-auto  mx-auto">
                    <GitHubCalendar
                        className="w-full"
                        
                        username="mdsamiulislam54"
                        colorScheme="dark"
                        fontSize={14}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default GitHub