import { Metadata } from "next";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Saran S Kumar - open to internships, collaborations, and interesting builds.",
};

const CONTACT_LINKS = [
    {
        label: "Email",
        value: "saranskumarwh@gmail.com",
        href: "mailto:saranskumarwh@gmail.com",
        icon: Mail,
        cta: "Send a mail",
    },
    {
        label: "LinkedIn",
        value: "/in/saran-s-kumar",
        href: "https://www.linkedin.com/in/saran-s-kumar/",
        icon: Linkedin,
        cta: "Connect",
    },
    {
        label: "GitHub",
        value: "@saranskumar",
        href: "https://github.com/saranskumar",
        icon: Github,
        cta: "Follow",
    },
    {
        label: "Twitter / X",
        value: "@SaranSKumar13",
        href: "https://twitter.com/SaranSKumar13",
        icon: Twitter,
        cta: "Follow",
    },
    {
        label: "Instagram",
        value: "@saraan.___",
        href: "https://instagram.com/saraan.___",
        icon: (props: any) => (
            <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.669-.072-4.948-.197-4.354-2.62-6.782-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        cta: "Follow",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-20 md:pt-32 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-[1200px]">
                <div className="max-w-xl space-y-10">

                    {/* Header */}
                    <div className="space-y-3">
                        <p className="mono-label">contact</p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            Let&apos;s talk.
                        </h1>
                        <p className="text-muted-foreground leading-relaxed">
                            Open to internships at product companies, interesting
                            collaborations, and conversations about systems, hardware, or AI.
                        </p>
                    </div>

                    {/* Platform buttons */}
                    <div className="space-y-3">
                        {CONTACT_LINKS.map(({ label, value, href, icon: Icon, cta }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("mailto") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="eng-card group flex items-center gap-4 px-5 py-4 hover:border-primary/50 transition-colors"
                            >
                                {/* Icon badge */}
                                <div className="w-9 h-9 shrink-0 rounded-md bg-primary/10 flex items-center justify-center">
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>

                                {/* Label + value */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs mono-label mb-0.5">{label}</p>
                                    <p className="text-sm font-medium text-foreground truncate">
                                        {value}
                                    </p>
                                </div>

                                {/* CTA chip */}
                                <span className="hidden sm:inline-flex items-center px-3 py-1 rounded border border-border text-xs font-mono text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground transition-colors shrink-0">
                                    {cta} ↗
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Contact form - opens default mail app */}
                    <div className="space-y-4 pt-2 border-t border-border/60">
                        <div>
                            <p className="mono-label mb-1">send a message</p>
                         </div>
                        <ContactForm />
                    </div>

                    <p className="text-xs text-muted-foreground/60 font-mono">
                        Or {" "}
                        <Link
                            href="/profile"
                            className="text-primary underline-offset-4 hover:underline"
                        >
                            /profile card
                        </Link>{" "}
                        if you&apos;re on mobile.
                    </p>
                </div>
            </div>
        </main>
    );
}

