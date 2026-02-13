"use client";

import { PROFILE } from "@/lib/data";
import { ArrowDown, Mail, Github, Linkedin, Calendar } from "lucide-react";
import Link from "next/link";
import GlassSurface from "@/components/ui/glass-surface";

export default function HireMePage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white relative overflow-hidden flex items-center justify-center p-6">
            {/* Background Elements */}
            <div
                className="absolute inset-0 z-0 bg-[url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop)] bg-cover bg-center opacity-20"
                style={{
                    maskImage: "linear-gradient(180deg, black, transparent)",
                    WebkitMaskImage: "linear-gradient(180deg, black, transparent)",
                }}
            />

            <div className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Value Prop */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for New Roles
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                        Let's Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-soft-violet">Something Real</span>
                    </h1>

                    <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                        I am looking for opportunities where engineering meets product design.
                        Whether it's full-stack development, AI systems, or prototyping.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-zinc-300">
                            <Calendar className="w-5 h-5 text-electric-blue" />
                            <span>Available immediately for Internships / Projects</span>
                        </div>
                        <div className="flex items-center gap-3 text-zinc-300">
                            <Mail className="w-5 h-5 text-electric-blue" />
                            <span>Open to remote & onsite (India)</span>
                        </div>
                    </div>
                </div>

                {/* Right: Action Card */}
                <div className="w-full">
                    <GlassSurface
                        borderRadius={30}
                        borderWidth={0.05}
                        opacity={0.8}
                        className="w-full"
                    >
                        <div className="p-10 space-y-8 text-center relative z-10 w-full">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Interested in collaborating?</h3>
                                <p className="text-sm text-zinc-400">Directly connect or download my resume.</p>
                            </div>

                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-black font-bold hover:scale-[1.02] transition-transform"
                            >
                                Download Resume <ArrowDown className="w-4 h-4" />
                            </Link>

                            <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
                                <Link href={`mailto:${PROFILE.email}`} className="flex flex-col items-center gap-2 group">
                                    <div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs text-zinc-500 group-hover:text-white transition-colors">Email</span>
                                </Link>
                                <Link href={PROFILE.links.linkedin} target="_blank" className="flex flex-col items-center gap-2 group">
                                    <div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs text-zinc-500 group-hover:text-white transition-colors">LinkedIn</span>
                                </Link>
                                <Link href={PROFILE.links.github} target="_blank" className="flex flex-col items-center gap-2 group">
                                    <div className="p-4 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs text-zinc-500 group-hover:text-white transition-colors">GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </GlassSurface>
                </div>

            </div>
        </main>
    );
}
