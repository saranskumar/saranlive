import { Cpu, Globe, Users, Brain } from "lucide-react";

const DEPTH_AREAS = [
    {
        icon: Cpu,
        title: "Embedded & Firmware",
        skills: [
            "Microcontrollers (ESP32, Arduino, Pi)",
            "Protocols (LoRa, I²C, UART, SPI)",
            "Sensor fusion & telemetry",
            "Real-time C/C++ execution",
        ],
    },
    {
        icon: Globe,
        title: "Full-Stack Architecture",
        skills: [
            "Modern UI (Next.js, React, TS)",
            "Backend (Node.js, Python, Spring)",
            "Data layer (MySQL, REST patterns)",
            "Edge-deployed & static-first",
        ],
    },
    {
        icon: Users,
        title: "Leadership & Execution",
        skills: [
            "AI SIG Coordinator (IEEE SCT SB)",
            "1st Place - AI & Robotics Hackathon",
            "Winner - DECODEX Cybersecurity CTF",
            "Architected systems for 500+ users",
        ],
    },
    {
        icon: Brain,
        title: "Applied AI & ML",
        skills: [
            "CS (AI & ML) Undergrad - SCTCE",
            "Neural networks & model training",
            "Autonomous systems research",
            "LLM tooling & prompt engineering",
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

