import { Metadata } from "next";
import { getAllJourneySorted, getAllPositionsSorted } from "@/lib/content";
import { PROFILE } from "@/lib/data";
import { Code, Database, Cpu, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
    description:
        "Engineering philosophy, skills, journey, and leadership — Saran S Kumar, builder of real-world systems.",
};

const SKILLS = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Spring Boot", "MySQL"],
    hardware: ["Arduino", "ESP32", "Raspberry Pi", "LoRa", "C/C++"],
    tools: ["Git", "Linux", "Figma", "Postman", "VS Code"],
};

const FOCUS_AREAS = [
    {
        title: "Embedded Systems",
        description:
            "Firmware on Arduino/ESP32, sensor integration, LoRa networks, motor control, and real-time decision systems.",
    },
    {
        title: "Full-Stack Engineering",
        description:
            "Static-first, edge-deployed web apps with Next.js and TypeScript. Shipping production software, not demos.",
    },
    {
        title: "Robotics",
        description:
            "Autonomous navigation, sensor fusion, and competition robotics. Applied engineering under constraints.",
    },
    {
        title: "AI Exploration",
        description:
            "CS (AI & ML) coursework, neural networks, prompt engineering, and LLM tooling for real use-cases.",
    },
    {
        title: "Systems Thinking",
        description:
            "Designing across layers — from electron to endpoint. Understanding interactions, not just components.",
    },
    {
        title: "Leadership & Community",
        description:
            "IEEE Coordinator, hackathon organiser, and cross-functional team lead. Engineering at the intersection of tech and people.",
    },
];

const PHILOSOPHY = [
    {
        title: "Build from first principles",
        description:
            "Understand why before how. Don't abstract away what you don't understand.",
    },
    {
        title: "Systems over components",
        description:
            "The bug is usually at the interface, not inside the component. Think in interactions.",
    },
    {
        title: "Constraints are creative",
        description:
            "Limited RAM, tight deadlines, sparse WiFi — constraints produce better solutions than infinite resources.",
    },
    {
        title: "Ship, then improve",
        description:
            "Working software beats perfect designs. Deploy early, observe real behavior, iterate with evidence.",
    },
];

export default function AboutPage() {
    const journey = getAllJourneySorted();
    const positions = getAllPositionsSorted();

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="pt-20 md:pt-32 pb-16 px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px]">
                    <p className="mono-label mb-3">about</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Engineer. Builder.
                        <br />
                        Systems Thinker.
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        {PROFILE.bio}
                    </p>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="section-divider py-16 md:py-20 bg-muted/20 px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px]">
                    <p className="mono-label mb-3">focus areas</p>
                    <h2 className="text-3xl font-bold tracking-tight mb-12">
                        What I work on
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {FOCUS_AREAS.map((area) => (
                            <div
                                key={area.title}
                                className="eng-card p-5 space-y-2"
                            >
                                <h3 className="font-semibold text-sm text-foreground">
                                    {area.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {area.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="section-divider py-16 md:py-20 px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px]">
                    <p className="mono-label mb-3">timeline</p>
                    <h2 className="text-3xl font-bold tracking-tight mb-12">Journey</h2>
                    <div className="border-l-2 border-border ml-2 space-y-12">
                        {journey.map((item, index) => (
                            <div key={index} className="relative pl-8">
                                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                                <div className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="mono-label">{item.period}</span>
                                        <h3 className="font-semibold text-lg text-foreground">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm font-medium text-foreground/80">
                                        {item.organization}
                                    </p>
                                    <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section-divider py-16 md:py-20 bg-muted/20 px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px]">
                    <p className="mono-label mb-3">community</p>
                    <h2 className="text-3xl font-bold tracking-tight mb-12">
                        Leadership &amp; Positions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {positions.map((pos, index) => (
                            <div key={index} className="eng-card p-6 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-base text-foreground">
                                            {pos.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{pos.org}</p>
                                    </div>
                                    <span className="mono-label shrink-0 ml-3">{pos.period}</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {pos.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {pos.impact.slice(0, 3).map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section className="section-divider py-16 md:py-20 px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px]">
                    <p className="mono-label mb-3">skills</p>
                    <h2 className="text-3xl font-bold tracking-tight mb-12">
                        Stack &amp; Technologies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <SkillCategory icon={Code} title="Frontend" skills={SKILLS.frontend} />
                        <SkillCategory icon={Database} title="Backend" skills={SKILLS.backend} />
                        <SkillCategory icon={Cpu} title="Hardware & IoT" skills={SKILLS.hardware} />
                        <SkillCategory icon={Wrench} title="Tools" skills={SKILLS.tools} />
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-divider py-16 md:py-20 bg-muted/20 px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px]">
                    <p className="mono-label mb-3">philosophy</p>
                    <h2 className="text-3xl font-bold tracking-tight mb-12">
                        How I work
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {PHILOSOPHY.map((item) => (
                            <div key={item.title} className="space-y-2">
                                <h3 className="font-semibold text-base text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-divider py-12 md:py-16 px-4 sm:px-6">
                <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <p className="text-muted-foreground text-sm flex-1">
                        Want to see what I&apos;ve built?
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/systems"
                            className="text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                            View Systems →
                        </Link>
                        <Link
                            href="/mindlab"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Read MindLab →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function SkillCategory({
    icon: Icon,
    title,
    skills,
}: {
    icon: any;
    title: string;
    skills: string[];
}) {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-muted text-xs text-foreground font-mono"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
