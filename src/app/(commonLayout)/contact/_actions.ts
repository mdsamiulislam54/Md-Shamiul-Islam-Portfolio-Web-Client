"use server";

import httpClient from "@/config/axios";


export interface IMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
}
export interface IM {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: string;
    updatedAt: string;
}
export const createMessage = async (payload: IMessage) => {
    try {
        const res = await httpClient.post("/contact",payload);
        return res.data;
    } catch (error) {
        console.log(error);
        throw error
    }
};