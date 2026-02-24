"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 py-24 relative overflow-hidden">
            {/* Subtle dot grid — no gradient */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="mx-auto max-w-[1200px] w-full relative">
                <p className="mono-label mb-8">saran s kumar</p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-8">
                    I build
                    <br />
                    <span className="text-primary">systems.</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-3">
                    Embedded hardware, full-stack engineering, robotics, and AI —
                    built from first principles.
                </p>
                <p className="text-sm text-muted-foreground/60 mb-12 font-mono">
                    CS (AI &amp; ML) at SCT Engineering · IEEE Coordinator · Trivandrum
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-3">
                    <Link
                        href="/systems"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-primary/50 bg-primary/10 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
                    >
                        View Systems
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                        href="/mindlab"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                    >
                        Read MindLab
                        <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
