"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Code2, Download, Menu, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import {  buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../provider/modeToggle";
import { Container } from "../provider/container";


const navLinks = [
    {
        title: "Home",
        href: "#home",
    },
    {
        title: "Education",
        href: "#",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Projects",
        href: "#projects",
    },
    {
        title: "Services",
        href: "#services",
    },
    {
        title: "Contact",
        href: "#contact",
    },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
            <Container>
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <div className="  flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Code2 className="h-5 w-5" />
                    </div>

                    <span className="hidden text-lg font-bold font-mono sm:block">
                        Shamiul
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 lg:flex">
                    <ModeToggle />

                    <Link
                        href="/cv.pdf"
                        download
                        className={buttonVariants({
                            variant: "default",
                        })}
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                    </Link>
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-2 lg:hidden ">

                    <ModeToggle />

                    <Sheet>
                        <SheetTrigger >
                            <div
                        
                            >
                                <Menu className="h-5 w-5" />
                            </div>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-80 p-4">
                            <div className="mt-10 flex flex-col gap-6">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium transition-colors hover:text-primary"
                                    >
                                        {item.title}
                                    </Link>
                                ))}

                                <Link
                                    href="/cv.pdf"
                                    download
                                    className={cn(
                                        buttonVariants({
                                            variant: "default",
                                        }),
                                        "mt-4 w-full"
                                    )}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download CV
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            </Container>
        </header>
    );
}