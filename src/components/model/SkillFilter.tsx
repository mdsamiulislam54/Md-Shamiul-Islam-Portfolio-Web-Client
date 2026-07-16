"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const SkillFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const current = searchParams.get("category") ?? "ALL";

    const handleChange = (value: string | null) => {
        if (!value) return
        const params = new URLSearchParams(searchParams);

        if (value === "ALL") {
            params.delete("category");
        } else {
            params.set("category", value);
        }

        router.push(`/admin/skill?${params.toString()}`);
    };

    return (
        <Select value={current} onValueChange={handleChange}>
            <SelectTrigger className="w-52">
                <SelectValue />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="ALL">All Skills</SelectItem>
                <SelectItem value="FRONTEND">Frontend</SelectItem>
                <SelectItem value="BACKEND">Backend</SelectItem>
                <SelectItem value="DATABASE">Database</SelectItem>
                <SelectItem value="TOOLS">Tools</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default SkillFilter;