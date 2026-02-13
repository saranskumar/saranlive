"use client";


import { PROJECT_ITEMS } from "@/lib/projects";

// export interface ProjectItem was moved to lib but we can import it if needed or just use typeof PROJECT_ITEMS[number]
// But components/projects.tsx doesn't export ProjectItem anymore if I remove it.
// Let's import it too if needed by other files?
// Actually components/projects.tsx only uses PROJECT_ITEMS.
// But previously it exported PROJECT_ITEMS.
// I should make sure I don't break other files importing PROJECT_ITEMS from here.
// But the whole point is to NOT import from here.
// I will change the export to re-export? No, better to just use the one from lib.

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
                        <p className="text-muted-foreground text-lg">
                            A selection of systems, interfaces, and experiments.
                        </p>
                    </div>
                    <a href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                        View all projects &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECT_ITEMS.slice(0, 3).map((item) => (
                        <div key={item.id} className="group relative flex flex-col space-y-3">
                            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted border border-border">
                                <img
                                    src={item.imageSrc}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-lg leading-none">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.meta}</p>
                            </div>
                            <p className="text-sm text-zinc-500 line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
