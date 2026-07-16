import {
  Code2,
  MonitorSmartphone,
  Database,
  LayoutTemplate,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive, interactive, and modern user interfaces built with React, Next.js, and Tailwind CSS.",
    icon: MonitorSmartphone,
  },
  {
    title: "Backend Development",
    description:
      "Secure REST APIs, authentication, and scalable server-side applications using Node.js and Express.",
    icon: Database,
  },
  {
    title: "Full Stack Development",
    description:
      "Complete web applications from frontend to backend with clean architecture and best practices.",
    icon: Code2,
  },
  {
    title: "UI Implementation",
    description:
      "Transforming Figma designs into pixel-perfect, responsive, and accessible web interfaces.",
    icon: LayoutTemplate,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website speed, SEO, Core Web Vitals, and overall user experience.",
    icon: Rocket,
  },
  {
    title: "Maintenance & Support",
    description:
      "Bug fixing, feature enhancements, and long-term support for existing web applications.",
    icon: ShieldCheck,
  },
];

const Service = () => {
  return (
    

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card
              key={service.title}
              className="group transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <CardHeader>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>

                <CardTitle>{service.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

  );
};

export default Service;