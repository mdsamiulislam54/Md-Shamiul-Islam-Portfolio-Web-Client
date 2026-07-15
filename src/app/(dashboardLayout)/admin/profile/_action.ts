"use server"

import httpClient from "@/config/axios";

interface IProfileFormData {
    fullName: string;
    title: string;
    subtitle: string;
    description: string;

    profileImages: string;
    profileImageId: string;
    resumeUrl: string;

    email: string;
    phone: string;
    location: string;

    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
}

export const getProfileData = async () => {
    try {
        const res = await httpClient.get(`/hero`,)
        return res.data.data as IProfileFormData
    } catch (error) {
        console.log(error)
        throw new Error("Get Profile Data failed")
    }
}