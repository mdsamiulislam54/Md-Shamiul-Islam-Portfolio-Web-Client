
import {
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiGo,
    SiTypescript
} from "react-icons/si";
const LogoSlider = () => {
    const technologies = [
        {
            name: "HTML5",
            icon: SiHtml5,
        },
        {
            name: "CSS3",
            icon: SiCss,
        },
        {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
        },
        {
            name: "Typescript",
            icon: SiTypescript,
        },
        {
            name: "Go",
            icon: SiGo,
        },
        {
            name: "React",
            icon: SiReact,
        },
        {
            name: "Next.js",
            icon: SiNextdotjs,
        },
        {
            name: "Node.js",
            icon: SiNodedotjs,
        },
        {
            name: "Express.js",
            icon: SiExpress,
        },
        {
            name: "MongoDB",
            icon: SiMongodb,
        },
        {
            name: "PostgreSQL",
            icon: SiPostgresql,
        },
        {
            name: "Prisma",
            icon: SiPrisma,
        },

    ];
    return (
        <div className='relative overflow-hidden pb-10'>
            <div className='flex w-max animate-marquee gap-6'>
                {
                    [...technologies, ...technologies].map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className='flex items-center gap-2 rounded-xl border bg-card px-5 py-3 whitespace-nowrap'

                            >
                                <Icon className="size-6 text-primary" />
                                <span>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LogoSlider