const POSITIONS = [
    {
        role: "Joint Secretary",
        org: "IEEE Travancore Subsection",
        period: "2024–Present",
        impact: [
            "Coordinated events with 500+ attendees",
            "Led technical workshops and speaker sessions",
            "Built internal tooling for event registration",
        ],
    },
    {
        role: "Chairperson",
        org: "IEEE CS SCT College Chapter",
        period: "2024–Present",
        impact: [
            "Led a 20+ member technical team",
            "Organised AIROB 2025 robotics competition",
            "Drove student technical project initiatives",
        ],
    },
    {
        role: "Lead Organiser",
        org: "AIROB 2025 — All Kerala Robotics",
        period: "Feb 2025",
        impact: [
            "First-place winning team",
            "Designed autonomous robot from scratch",
            "Competed under strict time + budget constraints",
        ],
    },
    {
        role: "Full-Stack Lead",
        org: "IEEE THM 2025 Event System",
        period: "Jan 2025",
        impact: [
            "Built end-to-end registration + QR check-in",
            "Zero data-loss incidents at event",
            "Sub-2s check-in time across all gates",
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
