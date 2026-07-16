import Service from '@/components/layout/Service'
import { Badge } from 'lucide-react'

const ServicePage = () => {
  return (
    <div>
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-primary/5 px-8 py-2 mb-4">

  {/* Glow */}
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
  <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

  {/* Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

  <div className="relative z-10 text-center">

    <Badge className="mb-5">
      Services
    </Badge>

    <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-mono">
      Professional Web Development Services
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
      From modern frontend interfaces to scalable backend systems, I build
      fast, responsive, and reliable web applications tailored to your
      business goals.
    </p>

  </div>

</section>
        <div>
            <Service/>
        </div>
    </div>
  )
}

export default ServicePage