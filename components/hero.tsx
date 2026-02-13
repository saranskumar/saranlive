"use client";

import Link from "next/link";
import { PROFILE } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

export function HeroSection() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent relative overflow-hidden">
            <div className="space-y-6 animate-in fade-in zoom-in duration-1000 z-10 relative">
                {/* Branding */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="text-foreground">Saran</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl font-light text-muted-foreground">
                    Product Engineer & <span className="text-foreground border-b-2 border-secondary pb-1">Creative Technologist</span>
                </h2>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-8">
                    <SocialLink href={PROFILE.links.instagram} icon={Instagram} />
                    <SocialLink href={PROFILE.links.github} icon={Github} />
                    <SocialLink href={PROFILE.links.discord} icon={ArrowRight} />
                    <SocialLink href={PROFILE.links.linkedin} icon={Linkedin} />
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white transition-colors hover:text-black"
        >
            <Icon className="w-5 h-5" />
        </a>
    )
}

