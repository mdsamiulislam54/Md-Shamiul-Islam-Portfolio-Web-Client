import { Container } from '@/components/provider/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Building2, Calendar, ExternalLink, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const EducationPage = () => {
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
            certificate: "https://drive.google.com/file/d/15dhC_1g3ctfwSbkt6I7W8hNqPbSaOl8p/view?usp=sharing",
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
        <div className='min-h-screen'>
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-primary/5 px-8 py-2 mb-4">

                {/* Glow */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

                <div className="relative z-10 text-center">

                    <Badge className="mb-5">
                        Education
                    </Badge>

                    <h1 className="text-xl md:text-3xl font-bold tracking-tight font-mono">
                        Building Knowledge,
                        One Milestone at a Time
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
                        My academic journey, professional training, and certifications have
                        provided a solid foundation in computer science, software development,
                        and modern web technologies, empowering me to build practical and
                        scalable digital solutions.
                    </p>

                </div>

            </section>

            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cards.map((card) => (
                        <div
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
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default EducationPage