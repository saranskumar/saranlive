"use client";

import { Code, Cpu, Zap, Headphones } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const SERVICES = [
    {
        icon: Code,
        title: "Web Development",
        description: "Full-stack web applications with modern frameworks. From MVPs to production-ready systems.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    },
    {
        icon: Cpu,
        title: "IoT Systems",
        description: "Connected devices and smart systems. ESP32, Arduino, and cloud integration.",
        tags: ["ESP32", "Arduino", "LoRa", "Cloud IoT"],
    },
    {
        icon: Zap,
        title: "Automation",
        description: "Intelligent automation solutions that save time and reduce manual work.",
        tags: ["Python", "APIs", "Workflows", "Integration"],
    },
    {
        icon: Headphones,
        title: "Technical Consulting",
        description: "Architecture design, code reviews, and technical guidance for your projects.",
        tags: ["System Design", "Best Practices", "Mentoring"],
    },
];

export function ServicesSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">What I Do</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Freelance services tailored to your needs. From concept to deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {SERVICES.map((service, index) => (
                        <Card key={index} className="hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
