// app/admin/login/_actions.ts
"use server";

import { cookies } from "next/headers";

export async function login(password: string) {
  if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    return {
      success: false,
      message: "Invalid password",
    };
  }

  const cookieStore = await cookies();

  cookieStore.set("admin-auth", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 hour
  });

  return {
    success: true,
  };
}