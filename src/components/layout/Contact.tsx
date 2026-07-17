
import Link from 'next/link'
import ContactFrom from '../From/ContactFrom'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'

import { LocateFixed, Mail, Phone, User } from 'lucide-react'
import { IProfileFormData } from '@/app/(dashboardLayout)/admin/profile/_action'
interface IContactProps {
  profile: IProfileFormData
}
const ContactPage = ({ profile }: IContactProps) => {

  return (
    <div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="lg:text-4xl text-2xl font-bold tracking-tight font-mono">
          Get In Touch
        </h2>

        
        <p className="mt-4 text-muted-foreground max-lg:text-sm">
          Whether you have a question, an exciting project, or a collaboration opportunity, I'm always open to connecting. Let's build something amazing together.
        </p>
        

      </div>

      <div>
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

              <div className=" grid grid-cols-3 gap-4">
                <Link
                  href={profile.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-lg border px-4 py-3 transition hover:border-primary hover:text-primary max-sm:text-xs"
                >
                  <FaGithub className="sm:h-4 h-2 sm:w-4 w-2" />
                  GitHub
                </Link>

                <Link
                  href={profile.linkedin}
                  target="_blank"
                  className="flex max-sm:text-xs items-center gap-2 rounded-lg border px-4 py-3 transition hover:border-primary hover:text-primary"
                >
                  <FaLinkedin className="sm:h-4 h-2 sm:w-4 w-2" />
                  LinkedIn
                </Link>

                <Link
                  href={profile.facebook}
                  target="_blank"
                  className="flex max-sm:text-xs items-center gap-2 rounded-lg border px-4 py-3 transition hover:border-primary hover:text-primary"
                >
                  <FaFacebook className="sm:h-5 h-4 sm:w-5 w-4" />
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
      </div>
    </div>
  )
}

export default ContactPage