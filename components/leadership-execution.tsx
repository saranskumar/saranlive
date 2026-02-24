const POSITIONS = [
    {
        role: "AI SIG Coordinator",
        org: "IEEE SCT SB",
        period: "2025–26",
        impact: [
            "Coordinating AI/ML study groups and technical sessions",
            "Mentoring students on applied machine learning projects",
            "Building a focused AI learning community on campus",
        ],
    },
    {
        role: "Campus Ambassador — Xtreme 19.0",
        org: "IEEE Volunteer, IEEE SCT SB",
        period: "2025",
        impact: [
            "Official ambassador for IEEE Xtreme 19.0 global programming contest",
            "Coordinating participation and logistics for campus teams",
        ],
    },
];

export function LeadershipExecution() {
    return (
        <section className="section-divider py-20 px-6 bg-secondary/20">
            <div className="mx-auto max-w-[1200px]">
                <p className="mono-label mb-3">leadership &amp; execution</p>
                <h2 className="text-3xl font-bold tracking-tight mb-12">
                    Beyond the keyboard
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {POSITIONS.map((pos) => (
                        <div key={pos.role} className="eng-card p-6 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-sm text-foreground">
                                        {pos.role}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {pos.org}
                                    </p>
                                </div>
                                <span className="mono-label shrink-0">{pos.period}</span>
                            </div>
                            <ul className="space-y-1.5">
                                {pos.impact.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-2 text-xs text-muted-foreground"
                                    >
                                        <span className="text-primary mt-0.5 shrink-0">—</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
