import { POSITIONS } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PositionsPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">
                <header className="mb-20 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Positions</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Leadership roles, community contributions, and organizational impact.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {POSITIONS.map((pos, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-secondary/20 border border-white/5 hover:bg-secondary/40 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-electric-blue transition-colors">
                                        {pos.role}
                                    </h3>
                                    <div className="text-muted-foreground font-medium">{pos.org}</div>
                                </div>
                                <div className="text-xs font-mono text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                                    {pos.period}
                                </div>
                            </div>

                            <p className="text-muted-foreground/80 leading-relaxed mb-8 min-h-[50px]">
                                {pos.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {pos.impact.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-background/40 border border-white/5 text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
