import { Cpu, Globe, Users, Brain } from "lucide-react";

const DEPTH_AREAS = [
    {
        icon: Cpu,
        title: "Embedded & Hardware",
        skills: [
            "Arduino, ESP32, Raspberry Pi",
            "LoRa, I²C, UART, SPI",
            "Sensor fusion & motor control",
            "Real-time firmware (C/C++)",
        ],
    },
    {
        icon: Globe,
        title: "Full-Stack Engineering",
        skills: [
            "Next.js, React, TypeScript",
            "Spring Boot, Node.js, Python",
            "Firebase, MySQL, REST APIs",
            "Static-first, edge-deployed",
        ],
    },
    {
        icon: Users,
        title: "Leadership & Execution",
        skills: [
            "IEEE Travancore Hub Coordinator",
            "Event systems for 500+ attendees",
            "Cross-functional team leadership",
            "Hackathon organiser & winner",
        ],
    },
    {
        icon: Brain,
        title: "AI Exploration",
        skills: [
            "CS (AI & ML) — SCT Engineering",
            "Neural networks & model training",
            "Autonomous systems research",
            "Prompt engineering & LLM tooling",
        ],
    },
];

export function EngineeringDepth() {
    return (
        <section className="section-divider py-20 px-6 bg-secondary/20">
            <div className="mx-auto max-w-[1200px]">
                <p className="mono-label mb-3">engineering depth</p>
                <h2 className="text-3xl font-bold tracking-tight mb-12">
                    What I work across
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DEPTH_AREAS.map((area) => {
                        const Icon = area.icon;
                        return (
                            <div key={area.title} className="space-y-4">
                                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <h3 className="font-semibold text-sm text-foreground">
                                    {area.title}
                                </h3>
                                <ul className="space-y-2">
                                    {area.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-xs text-muted-foreground leading-relaxed"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
