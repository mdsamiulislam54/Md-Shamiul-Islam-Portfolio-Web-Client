"use client"

import React, { useState } from "react"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { toast } from "sonner";
const CreateProfileFrom = () => {

    const [formData, setFromData] = useState({
        fullName: "",
        title: "",
        subtitle: "",
        description: "",

        file: null as File | null,
        resumeUrl: "",
        email: "",
        phone: "",
        location: "",

        github: "",
        linkedin: "",
        twitter: "",
        facebook: "",
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFromData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setFromData((prev) => ({
            ...prev,
            file: file,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            formData.fullName.trim() === "" ||
            formData.email.trim() === "" ||
            formData.title.trim() === "" ||
            formData.subtitle.trim() === "" ||
            formData.description.trim() === "" ||
            formData.phone.trim() === "" ||
            formData.location.trim() === ""
        ) {
            toast.error("All required fields are required.",);
            return;
        }

        try {
            const body = new FormData();

            body.append("fullName", formData.fullName);
            body.append("title", formData.title);
            body.append("subtitle", formData.subtitle);
            body.append("description", formData.description);

            body.append("email", formData.email);
            body.append("phone", formData.phone);
            body.append("location", formData.location);

            body.append("github", formData.github);
            body.append("linkedin", formData.linkedin);
            body.append("twitter", formData.twitter);
            body.append("facebook", formData.facebook);

            body.append("resumeUrl", formData.resumeUrl);

            if (formData.file) {
                body.append("file", formData.file);
            }
            console.log(body)
           
            setLoading(true)
            await fetch(`https://portfolio-server-beta-smoky.vercel.app/api/v1/hero`, {
                method: "POST",
                body: body
            })

            toast.success("Profile Create Successful")



        } catch (error) {
            console.log(error)
            toast.error("Profile Create Failed")
        } finally {
            setLoading(false)
        }
      
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                        />
                    </Field>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Full Stack Developer"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="subtitle">Subtitle</Label>
                        <Input
                            id="subtitle"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            placeholder="React • Next.js • Node.js"
                        />
                    </Field>
                </div>

                <Field>
                    <Label htmlFor="description">Description</Label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm outline-none"
                        placeholder="Write something about yourself..."
                    />
                </Field>

                {/* Contact */}
                <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+8801XXXXXXXXX"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Dhaka, Bangladesh"
                        />
                    </Field>
                </div>

                {/* Profile */}
                <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                        <Label htmlFor="profileImages">Profile Image URL</Label>
                        <Input
                            id="profileImages"
                            name="profileImages"
                            onChange={handleFileChange}
                            type="file"
                            placeholder="https://..."
                        />
                    </Field>


                </div>

                <Field>
                    <Label htmlFor="resumeUrl">Resume URL</Label>
                    <Input
                        id="resumeUrl"
                        name="resumeUrl"
                        value={formData.resumeUrl}
                        onChange={handleChange}
                        placeholder="https://..."
                    />
                </Field>

                {/* Social Links */}
                <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                            id="github"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            placeholder="https://github.com/username"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            placeholder="https://linkedin.com/in/username"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="twitter">Twitter / X</Label>
                        <Input
                            id="twitter"
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleChange}
                            placeholder="https://x.com/username"
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input
                            id="facebook"
                            name="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                            placeholder="https://facebook.com/username"
                        />
                    </Field>
                </div>

                <Button type="submit" className="w-full">
                    {
                        loading ? "Creating Profile....." : "Create Profile"
                    }
                </Button>
            </form>
        </div>
    )
}

export default CreateProfileFrom