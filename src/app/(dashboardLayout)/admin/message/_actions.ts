"use server";

import httpClient from "@/config/axios";
import { revalidatePath } from "next/cache";

export interface IMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export const getMessages = async () => {
  try {
    const res = await httpClient.get("/contact");
    return res.data.data as IMessage[];
  } catch (error) {
    console.log(error);
    throw new Error("Get Messages failed");
  }
};

export const getSingleMessage = async (id: string) => {
  try {
    const res = await httpClient.get(`/contact/${id}`);
    return res.data.data as IMessage;
  } catch (error) {
    console.log(error);
    throw new Error("Get Message failed");
  }
};

export const deleteMessage = async (id: string) => {
  try {
    const res = await httpClient.delete(`/contact/${id}`);

    // Message list page refresh
    revalidatePath("/admin/message");

    return res.data.data;
  } catch (error) {
    console.log(error);
    throw new Error("Delete Message failed");
  }
};