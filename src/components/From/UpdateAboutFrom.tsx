"use client"

import React, { useState } from "react"
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { aboutUpdate, createAbout, IAbout } from "@/app/(dashboardLayout)/admin/about/_actions";

interface UpdateAboutProps {
    about: IAbout
}
const UpdateAboutFrom = ({ about }: UpdateAboutProps) => {

    const [formData, setFromData] = useState({
        description: about.description,

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
            const res = await aboutUpdate(about.id, formData)
           
            if (res.success) {
                toast.success(res.message)

            }

        } catch (error) {
            console.log(error)
            toast.error("About Update Failed")
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
                        loading ? "Updating About....." : "Update about"
                    }
                </Button>
            </form>
        </div>
    )
}

export default UpdateAboutFrom