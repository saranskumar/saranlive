"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="py-32 md:py-48 container max-w-4xl mx-auto px-6">
            <div className="space-y-8 animate-fade-in delay-100">
                {/* Name & Role */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                        Saran S Kumar
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                        AI • Software • Systems
                    </p>
                </div>

                {/* Positioning Statement */}
                <p className="max-w-xl text-lg text-zinc-500 leading-relaxed">
                    Building useful technology and learning in public. <br />
                    Designing clean, intelligent systems that solve real problems.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/hire-me"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </section>
    );
}

