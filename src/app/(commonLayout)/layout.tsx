import type { Metadata } from "next";
import { Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import { getProfileData } from "../(dashboardLayout)/admin/profile/_action";
import SmoothScroll from "@/components/provider/lenis";

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

  title: {
    default: "Md Shamiul Islam | Frontend Developer",
    template: "%s | Md Shamiul Islam",
  },
  description:
    "Md Shamiul Islam is a Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and modern web technologies. Explore my portfolio, projects, skills, and contact information.",

  keywords: [
    "Md Shamiul Islam",
    "Shamiul Islam",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Web Developer",
    "Portfolio",
    "Bangladesh Developer",
  ],

  authors: [{ name: "Md Shamiul Islam" }],
  creator: "Md Shamiul Islam",
  publisher: "Md Shamiul Islam",

  openGraph: {
    title: "Md Shamiul Islam | Frontend Developer",
    description:
      "Explore the portfolio of Md Shamiul Islam, showcasing modern web applications built with React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://portfolio-client-two-kappa.vercel.app",
    siteName: "Md Shamiul Islam Portfolio",
    locale: "en_US",
    type: "website",

  },

  twitter: {
    card: "summary_large_image",
    title: "Md Shamiul Islam | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://portfolio-client-two-kappa.vercel.app"),
}


export default async function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const profile = await getProfileData()

  return (


    <div className={`${montserrat.variable} ${inter.variable} ${geistMono.variable} bg-background text-foreground`}>
      <SmoothScroll/>
        <Navbar resumeUrl={profile.resumeUrl} />
        {children}
        <Footer />
     
    </div>

  );
}
