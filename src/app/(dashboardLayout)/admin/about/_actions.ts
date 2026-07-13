"use server"

import httpClient from "@/config/axios"
export interface IAboutCreate {
    description: string
}
export interface IAbout {
    id:string
    description: string
}

export const createAbout = async (payload: IAboutCreate) => {
    try {
        const res = await httpClient.post("/about",payload);
        return res.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const aboutUpdate = async (id:string,payload: IAboutCreate) => {
    try {
        const res = await httpClient.patch(`/about/${id}`,payload);
        return res.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getAbout = async () => {
    try {
        const res = await httpClient.get(`/about`);
        return res.data.data as IAbout
    } catch (error) {
        console.log(error)
        throw error
    }
}