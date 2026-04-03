import { Metadata } from "next";
import { getAllJourneySorted, getAllPositionsSorted } from "@/lib/content";
import { HireMe } from "@/components/hire-me";
import { Trophy, Users, BookOpen, Cpu } from "lucide-react";

export const metadata: Metadata = {
    title: "Experience",
    description:
        "Leadership roles, engineering journey, and community contributions by Saran S Kumar - IEEE Coordinator, hackathon winner, and systems builder.",
};

const TYPE_ICONS: Record<string, React.ElementType> = {
    Education: BookOpen,
    Leadership: Users,
    Achievement: Trophy,
    Engineering: Cpu,
};

const TYPE_COLORS: Record<string, string> = {
    Education: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    Leadership: "bg-primary/10 text-primary border-primary/20",
    Achievement: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    Engineering: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
};

const ACHIEVEMENTS = [
    {
        title: "1st Place - AIROB 2025",
        sub: "All Kerala Robotics Competition",
        description:
            "Built a fully autonomous obstacle-course robot. Won the fastest completion time at the All Kerala Robotics Competition 2025.",
        tags: ["Robotics", "Embedded", "C++", "Arduino"],
    },
    {
        title: "Event System - 500+ Attendees",
        sub: "IEEE Travancore Hub Meet 2025",
        description:
            "Designed and deployed the registration, ticketing, and QR verification system for IEEE THM 2025 with 500+ participants.",
        tags: ["System Design", "React", "QR Flow"],
    },
    {
        title: "IoT Internship",
        sub: "Embedded & Cloud Systems",
        description:
            "Hands-on project work with Arduino, ESP32, Raspberry Pi, LoRa, and cloud IoT integrations during an intensive embedded systems internship.",
        tags: ["ESP32", "LoRa", "Cloud IoT", "Arduino"],
    },
];

export default function ExperiencePage() {
    const journey = getAllJourneySorted();
    const positions = getAllPositionsSorted();

    return (
        <main className="min-h-screen bg-background text-foreground pt-20 md:pt-28 pb-0 px-4 sm:px-6">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <header className="mb-16 space-y-3">
                    <p className="mono-label">experience</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        What I&apos;ve Done
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Leadership roles, engineering milestones, and community contributions
                        built over time.
                    </p>
                </header>

                {/* ── Leadership Positions ───────────────────── */}
                <section className="mb-20">
                    <p className="mono-label mb-3">leadership</p>
                    <h2 className="text-2xl font-bold tracking-tight mb-8">
                        Positions &amp; Roles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {positions.map((pos) => (
                            <div key={pos.role} className="eng-card p-6 space-y-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="font-semibold text-base text-foreground">
                                            {pos.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-0.5">
                                            {pos.org}
                                        </p>
                                    </div>
                                    <span className="mono-label shrink-0 mt-0.5">{pos.period}</span>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {pos.description}
                                </p>

                                {pos.impact.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {pos.impact.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Achievements ──────────────────────────── */}
                <section className="mb-20 section-divider pt-16">
                    <p className="mono-label mb-3">achievements</p>
                    <h2 className="text-2xl font-bold tracking-tight mb-8">
                        Key Milestones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ACHIEVEMENTS.map((a) => (
                            <div key={a.title} className="eng-card p-6 space-y-4">
                                <div className="w-9 h-9 rounded-md bg-amber-500/10 flex items-center justify-center">
                                    <Trophy className="w-4 h-4 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm text-foreground">
                                        {a.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {a.sub}
                                    </p>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {a.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {a.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Journey Timeline ──────────────────────── */}
                <section className="mb-20 section-divider pt-16">
                    <p className="mono-label mb-3">journey</p>
                    <h2 className="text-2xl font-bold tracking-tight mb-10">Timeline</h2>
                    <div className="relative border-l-2 border-border ml-2 space-y-10">
                        {journey.map((item, i) => {
                            const Icon =
                                TYPE_ICONS[item.type as keyof typeof TYPE_ICONS] ?? BookOpen;
                            const colorClass =
                                TYPE_COLORS[item.type as keyof typeof TYPE_COLORS] ??
                                "bg-muted text-muted-foreground border-border";
                            return (
                                <div key={i} className="relative pl-10">
                                    {/* dot */}
                                    <div className="absolute left-[-13px] top-1 w-6 h-6 rounded-full bg-background border-2 border-border flex items-center justify-center">
                                        <Icon className="w-3 h-3 text-muted-foreground" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                            <span
                                                className={`inline-flex self-start items-center text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border ${colorClass}`}
                                            >
                                                {item.type}
                                            </span>
                                            <span className="mono-label">{item.period}</span>
                                        </div>
                                        <h3 className="font-semibold text-base text-foreground">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {item.organization}
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* Hire Me at bottom */}
            <HireMe />
        </main>
    );
}
