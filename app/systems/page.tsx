import { Metadata } from "next";
import { getAllSystems } from "@/lib/systems";
import { SystemCard } from "@/components/system-card";

export const metadata: Metadata = {
    title: "Systems",
    description:
        "Real-world systems built across embedded hardware, full-stack engineering, robotics, and IoT. Each project is documented with architecture, stack, and outcomes.",
};

export default function SystemsPage() {
    const systems = getAllSystems();

    return (
        <main className="min-h-screen bg-background text-foreground pt-20 md:pt-28 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <header className="mb-16 space-y-3">
                    <p className="mono-label">engineering builds</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Systems
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Real problems, real constraints, real outcomes. Each system is documented
                        end-to-end — from problem statement to lessons learned.
                    </p>
                </header>

                {/* Grid */}
                {systems.length === 0 ? (
                    <p className="text-muted-foreground">No systems found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {systems.map((system) => (
                            <SystemCard
                                key={system.slug}
                                slug={system.slug}
                                title={system.title}
                                category={system.category}
                                description={system.description}
                                stack={system.stack}
                                outcome={system.outcome}
                                period={system.period}
                            />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
