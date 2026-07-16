"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createSkill } from "@/app/(dashboardLayout)/admin/skill/_actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type SkillCategory =
    | "FRONTEND"
    | "BACKEND"
    | "DATABASE"
    | "TOOLS";

interface FormData {
    name: string;
    icon: string;
    category: SkillCategory;
    level: number;
    order: number;
    isPublished: boolean;
}

const CreateSkillForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        icon: "",
        category: "FRONTEND",
        level: 80,
        order: 1,
        isPublished: true,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "number"
                    ? Number(value)
                    : type === "checkbox"
                        ? (e.target as HTMLInputElement).checked
                        : value,
        }));
    };

    const handleCategoryChange = (value: SkillCategory | null) => {
        if (!value) return;
        setFormData((prev) => ({
            ...prev,
            category: value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            await createSkill(formData);

            toast.success("Skill created successfully.");

            setFormData({
                name: "",
                icon: "",
                category: "FRONTEND",
                level: 80,
                order: 1,
                isPublished: true,
            });
        } catch (error) {
            console.error(error);
            toast.error("Failed to create skill.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl  p-6"
        >
            <div className="space-y-2">
                <Label>Skill Name</Label>
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="React"
                />
            </div>

            <div className="space-y-2">
                <Label>Icon</Label>
                <Input
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    placeholder="react"
                />
            </div>

            <div className="space-y-2">
                <Label>Category</Label>

                <Select
                    value={formData.category}
                    onValueChange={handleCategoryChange}
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="FRONTEND">
                            Frontend
                        </SelectItem>

                        <SelectItem value="BACKEND">
                            Backend
                        </SelectItem>

                        <SelectItem value="DATABASE">
                            Database
                        </SelectItem>

                        <SelectItem value="TOOLS">
                            Tools
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Level</Label>

                    <Input
                        type="number"
                        name="level"
                        value={formData.level}
                        onChange={handleChange}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Order</Label>

                    <Input
                        type="number"
                        name="order"
                        value={formData.order}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <Button
                className="w-full cursor-pointer"
                disabled={loading}
                type="submit"
            >
                {loading ? "Creating..." : "Create Skill"}
            </Button>
        </form>
    );
};

export default CreateSkillForm;