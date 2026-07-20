import type { Metadata } from "next";
import { Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import { getProfileData } from "../(dashboardLayout)/admin/profile/_action";

const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Shamiul Islam",
  description: "This is my professional portfolio website",
};

export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const profile = await getProfileData()

  return (
   

      <div className={`${montserrat.variable} ${inter.variable} ${geistMono.variable} bg-background text-foreground`}>
     
          <Navbar resumeUrl={profile.resumeUrl}/>
          {children}
          <Footer/>
       
      </div>

  );
}
