"use server"

import httpClient from "@/config/axios";
import { revalidatePath } from "next/cache";
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
export interface IProjectUpdatePayload {
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
    isFeatured: boolean ;
    isPublished: boolean ;
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
export const getProjectByID = async (id:string) => {
    try {
        const res = await httpClient.get(`/project/${id}`)
        return res.data.data as IProjectUpdatePayload
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const deleteProjectById = async (id:string) => {
    try {
        const res = await httpClient.delete(`/project/${id}`)
          revalidatePath("/admin/project");
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}