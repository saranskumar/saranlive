"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const OPEN_TO = [
    "Internships",
    "System-focused Roles",
    "Freelance Projects",
    "Open Source Collaboration",
];

export function HireMe() {
    return (
        <section className="section-divider relative py-24 px-6 overflow-hidden" id="hire">
            {/* Subtle background glow */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "radial-gradient(ellipse 80% 60% at 50% 100%, hsl(var(--primary)) 0%, transparent 70%)",
                }}
            />

            <div className="mx-auto max-w-[1200px] relative">
                <div className="max-w-2xl space-y-8">
                    {/* Label */}
                    <p className="mono-label">hire me</p>

                    {/* Headline */}
                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                            Ready to build{" "}
                            <span className="text-primary">something better?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                            I build systems that solve real problems, not just projects. Open
                            to internships, system-focused roles, and meaningful
                            collaborations.
                        </p>
                    </div>

                    {/* Open to tags */}
                    <div className="space-y-2">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            Open to
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {OPEN_TO.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1.5 rounded-full text-xs font-mono border border-primary/30 bg-primary/5 text-primary"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap items-start gap-3 pt-2">
                        <a
                            href="mailto:saranskumarwh@gmail.com"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-primary/50 bg-primary/10 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            saranskumarwh@gmail.com
                        </a>
                        <a
                            href="https://linkedin.com/in/saran-s-kumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/saranskumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>

                    {/* Response time note */}
                    <p className="text-xs text-muted-foreground/50 font-mono flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" />
                        Usually responds within 24 hours
                    </p>
                </div>
            </div>
        </section>
    );
}
