import { JOURNEY, POSITIONS, PROFILE } from "@/lib/data";

export function AboutSection() {
    return (
        <section className="py-20 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container max-w-4xl mx-auto px-6 space-y-24">

                {/* 1. Bio & Image */}
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">
                    <div className="space-y-6 order-2 md:order-1">
                        <h2 className="text-2xl font-bold tracking-tight">About</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {PROFILE.bio}
                        </p>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/saran.png"
                                alt="Saran S Kumar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* 2. Journey (Experience/Education) */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight">Journey</h2>
                    <div className="border-l border-border ml-2 space-y-12">
                        {JOURNEY.map((item, index) => (
                            <div key={index} className="relative pl-8">
                                {/* Dot */}
                                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-border" />

                                <div className="space-y-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                        <span className="text-sm font-mono text-muted-foreground">{item.year}</span>
                                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                                    </div>
                                    <p className="text-sm font-medium text-foreground/80">{item.organization}</p>
                                    <p className="text-sm text-muted-foreground max-w-xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Positions (Leadership) */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight">Leadership & Community</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {POSITIONS.map((pos, index) => (
                            <div key={index} className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-foreground">{pos.role}</h3>
                                        <p className="text-sm text-muted-foreground">{pos.org}</p>
                                    </div>
                                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                        {pos.period}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {pos.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {pos.impact.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="text-[10px] uppercase font-medium text-muted-foreground/80 bg-muted/50 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
