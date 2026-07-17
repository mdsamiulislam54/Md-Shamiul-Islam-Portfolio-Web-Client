"use client";

import Link from "next/link";
import {
    Code2,
    Download,
    Menu,
    Home,
    User,
    FolderKanban,
    GraduationCap,
    Brain,
    BriefcaseBusiness,
    Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../provider/modeToggle";
import { Container } from "../provider/container";

interface INavbarProps {
    resumeUrl: string
}

const navLinks = [
    {
        title: "Home",
        href: "/",
        icon: Home,
    },
    {
        title: "About",
        href: "/about",
        icon: User,
    },
    {
        title: "Projects",
        href: "/project",
        icon: FolderKanban,
    },
    {
        title: "Education",
        href: "/education",
        icon: GraduationCap,
    },
    {
        title: "Skills",
        href: "/skill",
        icon: Brain,
    },
    {
        title: "Services",
        href: "/services",
        icon: BriefcaseBusiness,
    },
    {
        title: "Contact",
        href: "/contact",
        icon: Mail,
    },
];

export default function Navbar({ resumeUrl }: INavbarProps) {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
            <Container>
                <div className="flex h-16 items-center justify-between ">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <div className=" flex h-10 w-10 items-center justify-center rounded-tr-[50px] rounded-br-[50px] bg-primary text-primary-foreground">
                            <Code2 className="h-5 w-5" />
                        </div>

                        <span className="hidden text-lg font-bold font-mono sm:block">
                            Shamiul
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-6 lg:flex">
                        {navLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="flex items-center gap-2 text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.title}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <ModeToggle />

                        <Link
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({
                                variant: "default",
                            })}
                        >
                            <Download className="mr-2 h-4 w-4" />
                            Resume
                        </Link>
                    </div>

                    {/* Mobile */}
                    <div className="flex items-center gap-2 lg:hidden ">

                        <ModeToggle />

                        <Sheet>
                            <SheetTrigger >
                                <div

                                >
                                    <Menu className="h-6 w-6" />
                                </div>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-80 p-4">
                                <div className="space-y-2 mt-6">
                                    {navLinks.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all hover:bg-primary/10 hover:text-primary"
                                            >
                                                <Icon className="h-5 w-5" />
                                                <span>{item.title}</span>
                                            </Link>
                                        );
                                    })}

                                    <Link
                                        href={resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            buttonVariants({ variant: "default" }),
                                            "mt-4 w-full"
                                        )}
                                    >
                                        <Download className="mr-2 h-4 w-4" />
                                        Resume
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