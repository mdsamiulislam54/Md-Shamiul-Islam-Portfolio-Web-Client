"use server"

import httpClient from "@/config/axios";

 export interface IProfileFormData {
    id: string
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
export interface IDashboardOverview {
    totalProjects: number;
    featuredProjects: number;
    totalSkills: number;
    totalMessages: number;
    unreadMessages: number;
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

export const getDashboardOverview = async () => {
    try {
        const res = await httpClient.get("/dashboard");

        return res.data.data as IDashboardOverview;
    } catch (error) {
        console.log(error);
        throw new Error("Get Dashboard Overview failed");
    }
};