import profileData from "@/data/profile.json";
import { Github, Linkedin, Mail, Download, Globe, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const ICON_SVGS: Record<string, (props: React.SVGProps<SVGSVGElement>) => React.ReactNode> = {
    github: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.024-.729.024-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    ),
    linkedin: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    ),
    whatsapp: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    ),
    instagram: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.669-.072-4.948-.197-4.354-2.62-6.782-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    mail: (props) => <Mail {...props} />,
    globe: (props) => <Globe {...props} />,
};

export default function ProfilePage() {
    const profile = profileData;

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-10 sm:py-16 relative">



            <div className="w-full max-w-xs sm:max-w-sm space-y-8">

                {/* Identity */}
                <div className="flex flex-col items-center text-center space-y-4">
                    {/* Avatar image */}
                    <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                        <Image src="/saran.png" alt={profile.name} width={80} height={80} className="w-full h-full object-cover" />
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

                {/* Quick links - tap-friendly 52px min height */}
                <div className="grid grid-cols-2 gap-3">
                    {profile.quickLinks.map((link) => {
                        const Icon = ICON_SVGS[link.icon] ?? Globe;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
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
