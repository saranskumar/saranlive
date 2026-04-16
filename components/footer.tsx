"use client";

import Link from "next/link";
import { PROFILE } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import React from "react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.669-.072-4.948-.197-4.354-2.62-6.782-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);


const FOOTER_LINKS = [
    { name: "Systems", href: "/systems" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Sitemap", href: "/sitemap.xml" },
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

                    <div className="flex items-center gap-4">
                        <SocialLink href={PROFILE.links.github} icon={Github} label="GitHub" />
                        <SocialLink href={PROFILE.links.linkedin} icon={Linkedin} label="LinkedIn" />
                        <SocialLink href={PROFILE.links.twitter} icon={Twitter} label="Twitter" />
                        <SocialLink href={PROFILE.links.instagram} icon={InstagramIcon} label="Instagram" />
                        <SocialLink href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" />
                    </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Saran S Kumar : saranskumar.live
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-muted-foreground/50 hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-[10px] uppercase tracking-widest text-muted-foreground/50 hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                    </div>
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
