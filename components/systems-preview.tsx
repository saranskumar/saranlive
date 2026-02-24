import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_SYSTEMS = [
    {
        slug: "airob-2025",
        title: "AIROB 2025 Robotics",
        category: "Robotics · Hardware",
        description:
            "1st-place winning robot at All Kerala Robotics Competition. Autonomous navigation with custom sensor fusion, motor control, and real-time decision logic.",
        stack: ["Arduino", "C++", "Ultrasonic", "IR Sensors"],
    },
    {
        slug: "iot-monitor",
        title: "IoT Environmental Monitor",
        category: "IoT · Cloud",
        description:
            "Distributed environmental sensor network using ESP32 + LoRa for long-range, low-power data collection with cloud dashboard integration.",
        stack: ["ESP32", "LoRa", "C++", "Cloud IoT"],
    },
];

export function SystemsPreview() {
    return (
        <section className="section-divider py-20 px-6">
            <div className="mx-auto max-w-[1200px]">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <p className="mono-label mb-3">selected systems</p>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Real-world builds
                        </h2>
                    </div>
                    <Link
                        href="/systems"
                        className="hidden sm:inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        All systems
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {FEATURED_SYSTEMS.map((system) => (
                        <Link
                            key={system.slug}
                            href={`/systems/${system.slug}`}
                            className="eng-card group flex flex-col p-6 gap-4"
                        >
                            <div className="flex items-start justify-between">
                                <span className="mono-label">{system.category}</span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <h3 className="font-semibold text-base text-foreground leading-snug">
                                {system.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                {system.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                                {system.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 sm:hidden">
                    <Link
                        href="/systems"
                        className="inline-flex items-center gap-2 text-sm text-primary font-medium"
                    >
                        View all systems
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
