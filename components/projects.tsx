"use client";

import Link from "next/link";
import { PROJECT_ITEMS } from "@/lib/projects";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
                        <p className="text-muted-foreground text-lg">
                            A selection of recent projects and experiments.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        View all projects
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECT_ITEMS.slice(0, 3).map((item) => (
                        <Card
                            key={item.id}
                            className="group overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                        >
                            <div className="aspect-video w-full overflow-hidden bg-muted">
                                <img
                                    src={item.imageSrc}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-lg leading-none">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.meta}
                                    </p>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
