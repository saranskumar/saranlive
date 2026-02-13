"use client";

import { PROFILE } from "@/lib/data";
import { ArrowDown, Mail, Github, Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hire Me | Saran S Kumar",
    description: "Available for freelance projects, consulting, and full-time roles.",
};

export default function HireMePage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
            <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Value Prop */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for New Roles
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Let&apos;s Build <br />
                        <span className="text-muted-foreground">Something Real</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                        I am looking for opportunities where engineering meets product design.
                        Whether it&apos;s full-stack development, AI systems, or prototyping.
                    </p>

                    <div className="flex flex-col gap-4 text-sm font-medium">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-foreground" />
                            <span>Available immediately for Internships / Projects</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail className="w-4 h-4 text-foreground" />
                            <span>Open to remote & onsite (India)</span>
                        </div>
                    </div>
                </div>

                {/* Right: Action Card */}
                <div className="w-full bg-card border border-border rounded-3xl p-8 shadow-sm">
                    <div className="space-y-8 text-center">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Interested in collaborating?</h3>
                            <p className="text-sm text-muted-foreground">Directly connect or download my resume.</p>
                        </div>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                        >
                            Download Resume <ArrowDown className="w-4 h-4" />
                        </Link>

                        <div className="flex justify-center gap-6 pt-6 border-t border-border">
                            <Link href={`mailto:${PROFILE.email}`} className="flex flex-col items-center gap-2 group text-muted-foreground hover:text-foreground transition-colors">
                                <div className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-xs">Email</span>
                            </Link>
                            <Link href={PROFILE.links.linkedin} target="_blank" className="flex flex-col items-center gap-2 group text-muted-foreground hover:text-foreground transition-colors">
                                <div className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </div>
                                <span className="text-xs">LinkedIn</span>
                            </Link>
                            <Link href={PROFILE.links.github} target="_blank" className="flex flex-col items-center gap-2 group text-muted-foreground hover:text-foreground transition-colors">
                                <div className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                                    <Github className="w-5 h-5" />
                                </div>
                                <span className="text-xs">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
