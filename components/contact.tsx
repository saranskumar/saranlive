"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

export function ContactSection() {
    return (
        <section id="contact" className="py-32 bg-background text-foreground border-t border-border/50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Ready to Collaborate?
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href={`mailto:${PROFILE.email}`}
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                        >
                            Say Hello
                        </Link>
                        <Link
                            href="/hire-me"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            Hire Me
                        </Link>
                    </div>

                    <div className="pt-12 flex justify-center gap-6">
                        <SocialLink href={PROFILE.links.github} icon={Github} label="GitHub" />
                        <SocialLink href={PROFILE.links.linkedin} icon={Linkedin} label="LinkedIn" />
                        <SocialLink href={PROFILE.links.twitter} icon={Twitter} label="Twitter" />
                        <SocialLink href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" />
                    </div>

                    <footer className="pt-12 text-sm text-muted-foreground">
                        &copy; 2024 Saran S Kumar.
                    </footer>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group text-zinc-500 hover:text-white transition-colors"
        >
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {label}
            </span>
        </a>
    )
}
