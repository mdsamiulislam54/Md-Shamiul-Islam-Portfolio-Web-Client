"use client"

import React, { useState } from "react"
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { createAbout } from "@/app/(dashboardLayout)/admin/about/_actions";
const CreateAboutFrom = () => {

    const [formData, setFromData] = useState({
        description: "",

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



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {


            setLoading(true)
            const res = await createAbout(formData)
            console.log(res)
            if (res.success) {
                toast.success(res.message)

            }

        } catch (error) {
            console.log(error)
            toast.error("About Create Failed")
        } finally {
            setLoading(false)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="">
                    <Field>
                        <Label htmlFor="description">Writing Your About Description</Label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={20}
                            className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm outline-none"
                            placeholder="Write something about yourself..."
                        />
                    </Field>

                </div>
                <Button type="submit" className="w-full cursor-pointer">
                    {
                        loading ? "Creating About....." : "Create about"
                    }
                </Button>
            </form>
        </div>
    )
}

export default CreateAboutFrom