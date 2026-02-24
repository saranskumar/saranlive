"use client";

import Link from "next/link";
import { PROFILE } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";


const FOOTER_LINKS = [
    { name: "Systems", href: "/systems" },
    { name: "MindLab", href: "/mindlab" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Profile", href: "/profile" },
];

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12 px-6">
            <div className="mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">

                    {/* Brand */}
                    <div className="space-y-1">
                        <Link
                            href="/"
                            className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
                        >
                            Saran S Kumar
                        </Link>
                        <p className="text-xs text-muted-foreground">
                            Engineer. Builder. Systems Thinker.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Trivandrum, Kerala, IN
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        <SocialLink href={PROFILE.links.github} icon={Github} label="GitHub" />
                        <SocialLink href={PROFILE.links.linkedin} icon={Linkedin} label="LinkedIn" />
                        <SocialLink href={PROFILE.links.twitter} icon={Twitter} label="Twitter" />
                        <SocialLink href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" />
                    </div>
                </div>

                <div className="pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Saran S Kumar &mdash; saranskumar.live
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={label}
        >
            <Icon className="w-4 h-4" />
        </a>
    );
}
