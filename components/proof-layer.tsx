const STATS = [
    { value: "1st", label: "Place — AIROB 2025", sub: "All Kerala Robotics Competition" },
    { value: "500+", label: "Attendees Managed", sub: "IEEE THM 2025 Event System" },
    { value: "4+", label: "Real Systems Built", sub: "Hardware · Cloud · Web" },
    { value: "2+", label: "Leadership Positions", sub: "IEEE Coordinator & Lead" },
];

export function ProofLayer() {
    return (
        <section className="section-divider py-16 px-6">
            <div className="mx-auto max-w-[1200px]">
                <p className="mono-label mb-8">proof of work</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {STATS.map((stat) => (
                        <div key={stat.value} className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-foreground/80">
                                {stat.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {stat.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
