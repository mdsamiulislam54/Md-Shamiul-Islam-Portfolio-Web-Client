"use server"

import httpClient from "@/config/axios";

export interface ISkill {
    id?: string;
    name: string;
    icon: string;
    category: SkillCategory;
    level?: number;
    order?: number;
    isPublished?: boolean;
}


export type SkillCategory =
    | "FRONTEND"
    | "BACKEND"
    | "DATABASE"
    | "TOOLS";


export const createSkill = async (payload: ISkill) => {
    try {
        const res = await httpClient.post("/skill", payload)
        return res.data

    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getSkill = async () => {
    try {
        const res = await httpClient.get("/skill")
        return res.data.data as ISkill[]

    } catch (error) {
        console.log(error)
        throw error
    }
}
export const updateSkill = async (payload: Partial<ISkill>, id: string) => {
    try {
        const res = await httpClient.patch(`/skill/${id}`, payload)
        return res.data

    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getSkillById = async (id: string) => {
    try {
        const res = await httpClient.get(`/skill/${id}`,)
        return res.data.data as ISkill

    } catch (error) {
        console.log(error)
        throw error
    }
}
export const deleteSkill = async (id: string) => {
    try {
        const res = await httpClient.delete(`/skill/${id}`,)
        return res.data

    } catch (error) {
        console.log(error)
        throw error
    }
}