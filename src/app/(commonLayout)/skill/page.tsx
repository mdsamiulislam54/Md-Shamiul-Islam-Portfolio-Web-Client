import { getSkill } from '@/app/(dashboardLayout)/admin/skill/_actions'
import Skills from '@/components/layout/Skills'
import { Badge } from '@/components/ui/badge'

const SkillPage = async () => {
    const skills = await getSkill()
    return (
        <div >
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-primary/5 px-8 py-2 mb-4">

                {/* Glow */}
                <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

                <div className="relative z-10 text-center">

                    <Badge className="mb-5">
                        Skills
                    </Badge>

                    <h1 className="font-mono text-3xl font-bold tracking-tight">
                        Technologies I Use to Build Modern Applications
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
                        A collection of the technologies, frameworks, databases, and tools I use
                        to design, develop, and deploy modern web applications. From responsive
                        frontend interfaces to scalable backend systems, these skills help me
                        deliver fast, reliable, and user-focused digital experiences.
                    </p>

                </div>

            </section>
            <div className='my-10'>
                <Skills skill={skills} />
            </div>
        </div>
    )
}

export default SkillPage