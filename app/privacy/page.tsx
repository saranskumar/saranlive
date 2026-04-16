import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy Policy for saranskumar.live — how contact form data is handled, who has access to it, and what it is used for.",
    alternates: { canonical: "https://saranskumar.live/privacy" },
    robots: { index: true, follow: false },
};

const SECTIONS = [
    {
        title: "Overview",
        content:
            "This is a personal portfolio website. It is not a product, a service, or a business. The sole purpose of this site is to showcase my work, share my engineering journey, and allow people to reach out to me directly. Data collection here is minimal by design.",
    },
    {
        title: "What Data Is Collected",
        content:
            "The only personal information collected on this site is what you voluntarily provide through the Contact Form. This includes your name, your email address, and the message you write. That's it.",
    },
    {
        title: "How It Is Handled",
        content:
            "When you submit the contact form, your message is delivered directly to my personal email inbox via a mail relay. No intermediary platform stores your data. No records are written to a database. I am the only person who reads and responds to these messages.",
    },
    {
        title: "What It Is Used For",
        content:
            "Your information is used purely and exclusively to respond to your message — whether that's a question, a collaboration inquiry, an internship opportunity, or feedback. I do not use your contact details for any unsolicited communication.",
    },
    {
        title: "Data Retention",
        content:
            "Messages are retained in my personal email inbox for as long as needed for the conversation context. You may request deletion of your message at any time by emailing me directly.",
    },
    {
        title: "Third-Party Sharing",
        content:
            "Your personal information is never sold, rented, shared with, or disclosed to any third party under any circumstances. Your message is a private communication between you and me.",
    },
    {
        title: "Cookies & Tracking",
        content:
            "This site does not use invasive tracking cookies or fingerprinting. If any analytics are present, they are strictly anonymized performance metrics (e.g., page load times) with no personally identifiable information attached.",
    },
    {
        title: "Your Rights",
        content:
            "You have the right to know what data I hold about you, to request correction, or to request deletion. Since all data is limited to your email conversation with me, simply email me and I will act on your request promptly.",
    },
    {
        title: "Contact",
        content: null,
        isContact: true,
    },
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-24 md:pt-32 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-2xl">

                {/* Back */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
                >
                    ← Back to site
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-3">
                    <p className="mono-label">legal</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-muted-foreground font-mono">
                        Effective: April 17, 2026 · saranskumar.live
                    </p>
                </header>

                {/* Summary callout */}
                <div className="mb-12 px-5 py-4 rounded-lg bg-primary/5 border border-primary/15">
                    <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-semibold">Short version:</span>{" "}
                        If you contact me through this site, your message goes directly to my inbox.
                        I am the only person who sees it. I do not store it in any external system.
                        I do not share it. I only use it to reply to you.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {SECTIONS.map((section, i) =>
                        section.isContact ? (
                            <section key={i} className="pt-8 border-t border-border">
                                <h2 className="text-base font-semibold mb-3">Contact About This Policy</h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    If you have any questions about how your data is handled, reach out directly at{" "}
                                    <a
                                        href="mailto:saranskumarwh@gmail.com"
                                        className="text-primary hover:underline underline-offset-4"
                                    >
                                        saranskumarwh@gmail.com
                                    </a>
                                    . I will respond as quickly as I can.
                                </p>
                            </section>
                        ) : (
                            <section key={i}>
                                <h2 className="text-base font-semibold mb-2 text-foreground">
                                    {i + 1}. {section.title}
                                </h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {section.content}
                                </p>
                            </section>
                        )
                    )}
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <p className="text-xs text-muted-foreground font-mono">
                        © {new Date().getFullYear()} Saran S Kumar
                    </p>
                    <Link
                        href="/terms"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        View Terms of Use →
                    </Link>
                </div>
            </div>
        </main>
    );
}
