"use client";

import { Code2, Cpu, Zap, Wrench } from "lucide-react";

const TECH_STACK = [
    { name: "Next.js", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "IoT Systems", icon: Cpu },
    { name: "Automation", icon: Zap },
    { name: "Hardware", icon: Wrench },
];

const CREDENTIALS = [
    "5+ Years Experience",
    "20+ Projects Delivered",
    "IEEE Coordinator",
];

export function TrustStrip() {
    return (
        <section className="py-16 border-y border-border bg-muted/30">
            <div className="container mx-auto px-6">

                {/* Credentials */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {CREDENTIALS.map((cred, index) => (
                        <div key={index} className="text-center">
                            <p className="text-sm font-medium text-foreground">{cred}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap justify-center gap-6">
                    {TECH_STACK.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 rounded-md bg-background border border-border hover:border-primary/50 transition-colors"
                        >
                            <tech.icon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
