"use client";

import Link from "next/link";
import {
    GraduationCap,
    Calendar,
    Building2,
    ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
export default function EducationCards() {
    const cards = [
        {
            id: 1,
            title: "Education",
            subtitle: "Diploma in Computer Technology",
            organization: "Shariatpur Polytechnic Institute",
            period: "2020 — 2024",
            description:
                "Completed Diploma in Computer Technology with a strong foundation in software development, networking, and practical project implementation.",
            certificate:
                "https://drive.google.com/file/d/1gHSuX_rQdqBMjkfLtPOHD8vf8-aV1l4C/view?usp=sharing",
        },
        {
            id: 2,
            title: "Training",
            subtitle: "Next Level Web Development",
            organization: "Programming Hero • Banani, Dhaka",
            period: "Jan 2026 — June 2026",
            description:
                "Professional industrial training covering UI implementation, project workflow, testing, deployment, and modern web development practices.",
            certificate: "",
        },
        {
            id: 3,
            title: "Course",
            subtitle: "Complete Web Development",
            organization: "Programming Hero • Banani, Dhaka",
            period: "Jan 2025 — Jun 2025",
            description:
                "Learned HTML, CSS, Tailwind CSS, JavaScript, React.js and built multiple real-world responsive projects following industry practices.",
            certificate:
                "https://drive.google.com/file/d/1QMt2bEjYe19AGWMi8iDtc-lTnBedQ4Bz/view?usp=sharing",
        },
        {
            id: 4,
            title: "Training",
            subtitle: "Industrial Attachment",
            organization: "Creative IT Institute",
            period: "3 Months • 2024",
            description:
                "Professional industrial training covering UI implementation, project workflow, testing, deployment, and modern web development practices.",
            certificate: "",
        },

    ];

    return (
        <div >
            <div className="mx-auto max-w-3xl text-center mb-14">
                <h2 className="lg:text-4xl text-xl font-bold tracking-tight font-mono">
                    Education & Training
                </h2>

                <p className="mt-4 text-muted-foreground max-lg:text-sm">
                    My academic background, professional training, and development
                    journey.
                </p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className=" w-full"
            >
                <CarouselContent className="-ml-4 mb-4">
                    {cards.map((card) => (
                        <CarouselItem
                            key={card.id}
                            className="pl-4 basis-full md:basis-1/2 xl:basis-1/3 "
                        >
                            <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 shadow-xl cursor-pointer hover:border-primary/50 hover:shadow-xl rounded-3xl border bg-gradient-to-br from-background via-background to-primary/10">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <GraduationCap className="h-7 w-7" />
                                        </div>

                                        <Badge variant="secondary">{card.title}</Badge>
                                    </div>

                                    <CardTitle className="pt-5 text-xl font-mono">
                                        {card.subtitle}
                                    </CardTitle>

                                    <CardDescription className="space-y-2 pt-2">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="h-4 w-4" />
                                            {card.organization}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            {card.period}
                                        </div>
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <p className="leading-7 text-muted-foreground">
                                        {card.description}
                                    </p>
                                </CardContent>

                                <CardFooter>
                                    {card.certificate ? (
                                        <Button className="w-full">
                                            <Link
                                                href={card.certificate}
                                                target="_blank"
                                                className="flex items-center"
                                            >
                                                View Certificate
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    ) : (
                                        <Button disabled className="w-full">
                                            Certificate Coming Soon
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="-left-5" />
                <CarouselNext className="-right-5" />
            </Carousel>
        </div>
    );
}