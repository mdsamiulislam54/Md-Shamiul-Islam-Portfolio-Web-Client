"use server"

import httpClient from "@/config/axios";

export interface IProjectPayload {
    id: string
    name: string;
    order: number | string;
    tech: string[];
    feature: string[];
    shortDesc: string;
    description: string;
    clientRepo: string;
    serverRepo: string;
    liveUrl: string;
    thumbnail: string;
    thumbnailId?: string;
    isFeatured: boolean | string;
    isPublished: boolean | string;
}

export const getAllProject = async () => {
    try {
        const res = await httpClient.get(`/project`)
        return res.data.data as IProjectPayload[]
    } catch (error) {
        console.log(error)
        throw error
    }
}