import { Metadata } from "next";
import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Saran S Kumar — open to internships, collaborations, and interesting builds.",
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

                    {/* Contact form — opens default mail app */}
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
