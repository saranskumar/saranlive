import { PROJECT_ITEMS } from "@/components/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Saran S Kumar",
    description: "A selection of technical projects aimed at solving real problems.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto pt-32 pb-20 px-6">
                <div className="mb-20 space-y-6 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Proof of Work
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A selection of technical projects that demonstrate range, depth, and system thinking.
                        From generative AI interfaces to distributed database engines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECT_ITEMS.map((item) => (
                        <div key={item.id} className="group relative flex flex-col space-y-3">
                            <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted border border-border">
                                <img
                                    src={item.imageSrc}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-1 pt-2">
                                <h3 className="font-semibold text-lg leading-none">{item.title}</h3>
                                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">{item.meta}</p>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
