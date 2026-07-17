"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "../ui/field";
import { toast } from "sonner";

const CreateProjectForm = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFromData] = useState({
        name: "",
        order: 0,
        tech: "",
        feature: "",
        shortDesc: "",
        description: "",
        clientRepo: "",
        serverRepo: "",
        liveUrl: "",
        thumbnail: null as File | null,
        isFeatured: false,
        isPublished: true,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name, value)
        setFromData((prev) => {
            return {
                ...prev,
                [name]: name === "order" ? Number(value) : value,
            }
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setFromData((prev) => ({
            ...prev,
            thumbnail: file,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();


        try {

            const body = new FormData();
            body.append("name", formData.name);
            body.append("order", String(formData.order));

            body.append(
                "tech",
                JSON.stringify(
                    formData.tech
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean)
                )
            );

            body.append(
                "feature",
                JSON.stringify(
                    formData.feature
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean)
                )
            );

            body.append("shortDesc", formData.shortDesc);
            body.append("description", formData.description);
            body.append("clientRepo", formData.clientRepo);
            body.append("serverRepo", formData.serverRepo);
            body.append("liveUrl", formData.liveUrl);
            body.append("isFeatured", JSON.stringify(formData.isFeatured));
            body.append("isPublished", JSON.stringify(formData.isPublished));

            if (formData.thumbnail) {
                body.append("thumbnail", formData.thumbnail);
            }


            console.log(body)


            setLoading(true)
            const res = await fetch(`https://portfolio-server-beta-smoky.vercel.app/api/v1/project`, {
                method: "POST",
                body: body
            })
            const data = await res.json()
            if (res.ok) {
                toast.success("Project Create Successful")
            }

            if (!res.ok) {
                toast.success(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error("Project Create Failed")
        } finally {
            setLoading(false)
        }

    };

    return (
        <Card className="max-w-6xl mx-auto">
            <CardHeader>
                <CardTitle>Create Project</CardTitle>
            </CardHeader>

            <CardContent>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        <Field>
                            <Label htmlFor="name">Project Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Portfolio Website"
                            />
                        </Field>

                        <Field>
                            <Label htmlFor="order">Order</Label>
                            <Input
                                id="order"
                                type="number"
                                name="order"
                                value={formData.order}
                                onChange={handleChange}
                            />
                        </Field>

                        <div className="space-y-2">
                            <Field>
                                <Label htmlFor="clientRepo">Client Repository</Label>
                                <Input
                                    id="clientRepo"
                                    name="clientRepo"
                                    value={formData.clientRepo}
                                    onChange={handleChange}
                                    placeholder="https://github.com/..."
                                />
                            </Field>
                        </div>

                        <div className="space-y-2">
                            <Field>
                                <Label htmlFor="serverRepo">Server Repository</Label>
                                <Input
                                    id="serverRepo"
                                    name="serverRepo"
                                    value={formData.serverRepo}
                                    onChange={handleChange}
                                    placeholder="https://github.com/..."
                                />
                            </Field>
                        </div>

                        <div className="space-y-2">
                            <Label>Live URL</Label>
                            <Input
                                name="liveUrl"
                                placeholder="https://..."
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Field>
                                <Label htmlFor="thumbnail">Thumbnail</Label>
                                <Input
                                    id="thumbnail"
                                    name="thumbnail"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </Field>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Field>
                            <Label htmlFor="shortDesc">Short Description</Label>
                            <Textarea
                                id="shortDesc"
                                name="shortDesc"
                                value={formData.shortDesc}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Short project description"
                            />
                        </Field>
                    </div>

                    <div className="space-y-2">
                        <Field>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={6}
                                placeholder="Project description"
                            />
                        </Field>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Field>
                                <Label htmlFor="tech">Technologies</Label>
                                <Textarea
                                    id="tech"
                                    name="tech"
                                    value={formData.tech}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Next.js, TypeScript, Prisma, Tailwind CSS"
                                />
                            </Field>
                        </div>

                        <div className="space-y-2">
                            <Field>
                                <Label htmlFor="feature">Features</Label>
                                <Textarea
                                    id="feature"
                                    name="feature"
                                    value={formData.feature}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Authentication, Dashboard, Payment"
                                />
                            </Field>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="isFeatured"
                                checked={formData.isFeatured}
                                onCheckedChange={(checked) =>
                                    setFromData((prev) => ({
                                        ...prev,
                                        isFeatured: checked === true,
                                    }))
                                }
                            />
                            <Label htmlFor="isFeatured">Featured Project</Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="isPublished"
                                checked={formData.isPublished}
                                onCheckedChange={(checked) =>
                                    setFromData((prev) => ({
                                        ...prev,
                                        isPublished: checked === true,
                                    }))
                                }
                            />
                            <Label htmlFor="isPublished">Published</Label>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full cursor-pointer"
                    >
                        {
                            loading ? "Creating Project..." : "Create Project"
                        }
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default CreateProjectForm;