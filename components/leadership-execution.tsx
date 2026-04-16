import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPositionsSorted } from "@/lib/content";

export function LeadershipExecution() {
    const positions = getAllPositionsSorted().slice(0, 3);

    return (
        <section className="section-divider py-20 px-6 bg-secondary/20">
            <div className="mx-auto max-w-[1200px]">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <p className="mono-label mb-3">leadership &amp; execution</p>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Beyond the keyboard
                        </h2>
                    </div>
                    <Link
                        href="/experience"
                        className="hidden sm:inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        View full journey
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {positions.map((pos) => (
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
                                        <span className="text-primary mt-0.5 shrink-0">-</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:hidden">
                    <Link
                        href="/experience"
                        className="inline-flex items-center gap-2 text-sm text-primary font-medium"
                    >
                        View full journey
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

