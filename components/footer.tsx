"use client";

import Link from "next/link";
import { PROFILE } from "@/lib/data";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 py-12 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <h4 className="text-sm font-bold text-foreground">Saran S Kumar</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <SocialLink href={PROFILE.links.github} icon={Github} />
                    <SocialLink href={PROFILE.links.linkedin} icon={Linkedin} />
                    <SocialLink href={PROFILE.links.twitter} icon={Twitter} />
                    <SocialLink href={PROFILE.links.instagram} icon={Instagram} />
                    <SocialLink href={`mailto:${PROFILE.email}`} icon={Mail} />
                </div>

                <div className="flex gap-6 text-xs text-muted-foreground">
                    <Link href="/blog" className="hover:text-foreground transition-colors">Thoughts</Link>
                    <Link href="/profile" className="hover:text-foreground transition-colors">Profile</Link>
                    <Link href="/resume.pdf" target="_blank" className="hover:text-foreground transition-colors">Resume</Link>
                </div>

            </div>
        </footer>
    );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
        >
            <Icon className="w-4 h-4" />
        </a>
    );
}
