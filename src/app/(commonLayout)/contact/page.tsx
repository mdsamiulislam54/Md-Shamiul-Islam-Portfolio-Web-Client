import { getProfileData } from '@/app/(dashboardLayout)/admin/profile/_action'
import ContactFrom from '@/components/From/ContactFrom'
import { Container } from '@/components/provider/container'
import { Badge } from '@/components/ui/badge'
import { LocateFixed, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa6";

const ContactPage = async () => {
    const profile = await getProfileData()
    return (
        <div className=''>
            <section className="relative overflow-hidden rounded-3xl  bg-gradient-to-br from-background via-background to-primary/5 px-8 py-2 mb-4">

                {/* Glow */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

                <div className="relative z-10 text-center">

                    <Badge className="mb-5">
                        Contact
                    </Badge>

                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-mono">
                        Let's Build Something
                        Amazing Together
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground leading-6">
                        Have a project in mind, a job opportunity,or just want to say hello? I'd love to hear from you. Feel free to reach out, and I'll get back to you as soon as possible
                    </p>

                </div>

            </section>
            <Container>
                <div className="grid gap-1 lg:grid-cols-2 items-stretch my-10">
                    {/* Contact Info */}
                    <div className="space-y-8  bg-card p-4 h-full">
                        <div>
                            <h2 className="text-3xl font-bold font-mono">Get In Touch</h2>
                            <p className="mt-3 text-muted-foreground">
                                I'm always open to discussing new projects, freelance opportunities,
                                or full-time roles. Feel free to reach out anytime.
                            </p>
                        </div>

                        <div className="space-y-5 font-mono">
                            <div className="flex items-center gap-4">
                                <div className="rounded-lg border p-3">
                                    <User className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Name</p>
                                    <p className="font-medium">Md. Samiul Islam</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="rounded-lg border p-3">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <Link
                                        href="mailto:your@email.com"
                                        className="font-medium hover:text-primary"
                                    >
                                        {profile.email}

                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="rounded-lg border p-3">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone & WhatsApp </p>
                                    <Link
                                        href="tel:+8801XXXXXXXXX"
                                        className="font-medium hover:text-primary"
                                    >
                                        {profile.phone}
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="rounded-lg border p-3">
                                    <LocateFixed className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Address</p>
                                    <Link
                                        href="tel:+8801XXXXXXXXX"
                                        className="font-medium hover:text-primary"
                                    >
                                        {profile.location}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold font-mono">Connect with Me</h3>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={profile.github}
                                    target="_blank"
                                    className="flex items-center gap-2 rounded-lg border px-4 py-3 transition hover:border-primary hover:text-primary"
                                >
                                    <FaGithub className="h-5 w-5" />
                                    GitHub
                                </Link>

                                <Link
                                    href={profile.linkedin}
                                    target="_blank"
                                    className="flex items-center gap-2 rounded-lg border px-4 py-3 transition hover:border-primary hover:text-primary"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                    LinkedIn
                                </Link>

                                <Link
                                    href={profile.facebook}
                                    target="_blank"
                                    className="flex items-center gap-2 rounded-lg border px-4 py-3 transition hover:border-primary hover:text-primary"
                                >
                                    <FaFacebook className="h-5 w-5" />
                                    Facebook
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='h-full'>
                        <ContactFrom />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactPage