import { AppSidebar, } from "@/components/sidebar1"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="">
      <SidebarProvider >
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Overview</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
              {children}
            </div>

          </div>
        </SidebarInset>
      </SidebarProvider>

    </section>
  )
}