import type { Metadata } from "next";
import { Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./(commonLayout)/globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Toaster } from "sonner";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning>

      <body className={`${montserrat.variable} ${inter.variable} ${geistMono.variable} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
          <Toaster position="top-right"/>
        </ThemeProvider>
      </body>

    </html>
  );
}
