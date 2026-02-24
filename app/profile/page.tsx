import profileData from "@/data/profile.json";
import { Github, Linkedin, Mail, Download, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const ICON_MAP: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
    whatsapp: MessageCircle,
    mail: Mail,
    download: Download,
    globe: Globe,
};

export default function ProfilePage() {
    const profile = profileData;

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-10 sm:py-16 relative">

        

            <div className="w-full max-w-xs sm:max-w-sm space-y-8">

                {/* Identity */}
                <div className="flex flex-col items-center text-center space-y-4">
                    {/* Avatar monogram */}
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary font-mono select-none">SK</span>
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-xl font-bold tracking-tight">{profile.name}</h1>
                        <p className="text-sm text-muted-foreground">{profile.role}</p>
                        <p className="text-xs text-muted-foreground/70">{profile.location}</p>
                    </div>
                    {/* Headline tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {profile.headline.split(" · ").map((item) => (
                            <span
                                key={item}
                                className="text-xs font-mono px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Quick links — tap-friendly 52px min height */}
                <div className="grid grid-cols-2 gap-3">
                    {profile.quickLinks.map((link) => {
                        const Icon = ICON_MAP[link.icon] ?? Globe;
                        const isDownload = link.icon === "download";
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={isDownload || undefined}
                                className="flex items-center gap-3 px-4 py-3.5 min-h-[52px] rounded-lg border border-border bg-card hover:border-primary/40 hover:bg-primary/5 active:scale-[0.97] transition-all group"
                            >
                                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                                <span className="text-sm font-medium text-foreground">{link.label}</span>
                            </a>
                        );
                    })}
                </div>

                {/* Footer nav */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
                    <Link href="/systems" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                        Systems
                    </Link>
                    <Link href="/mindlab" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                        MindLab
                    </Link>
                    <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1">
                        Home
                    </Link>
                </div>

                <p className="text-center text-xs text-muted-foreground/40 font-mono">
                    saranskumar.live
                </p>
            </div>
        </div>
    );
}