import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Use",
    description:
        "Terms of Use for saranskumar.live - outlining the usage, ownership, and licensing of the content and code presented on this portfolio.",
    alternates: { canonical: "https://saranskumar.live/terms" },
    robots: { index: true, follow: false },
};

const SECTIONS = [
    {
        title: "Nature of the Site",
        content:
            "This website is my personal portfolio. It serves as a digital resume and a showcase of systems, projects, and research I have built or contributed to. It is not a commercial platform, and no services are sold directly through this site.",
    },
    {
        title: "Ownership & Copyright",
        content:
            "Unless explicitly stated otherwise (such as open-source libraries or specified third-party assets), all content, design, writing, and code architecture summaries presented on this site are my intellectual property. You may not claim them as your own.",
    },
    {
        title: "Code & Projects Usage",
        content:
            "The projects documented here (e.g., in the 'Systems' section) are for demonstration. If I have linked to a public GitHub repository, the code within that repository is governed by its respective license (typically MIT). However, the proprietary systems and case studies detailed on this site may not be copied or repurposed to build competing commercial products without explicit permission.",
    },
    {
        title: "No Warranties",
        content:
            "I strive to ensure the information and technical documentation on this site are accurate. However, everything is provided 'as is' without any warranties. I am not liable for any issues, damages, or data loss that may arise from using or attempting to replicate the systems and code discussed here.",
    },
    {
        title: "External Links",
        content:
            "This site contains links to external websites, GitHub repositories, and social platforms. I am not responsible for the content, privacy policies, or practices of those third-party sites.",
    },
    {
        title: "Changes to Terms",
        content:
            "As my work and portfolio evolve, I may update these terms. By continuing to use and browse this site, you agree to be bound by the current version of these Terms of Use.",
    },
    {
        title: "Contact",
        content: null,
        isContact: true,
    },
];

export default function TermsPage() {
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
                        Terms of Use
                    </h1>
                    <p className="text-sm text-muted-foreground font-mono">
                        Effective: April 17, 2026 · saranskumar.live
                    </p>
                </header>

                {/* Summary callout */}
                <div className="mb-12 px-5 py-4 rounded-lg bg-primary/5 border border-primary/15">
                    <p className="text-sm leading-relaxed text-foreground">
                        <span className="font-semibold">Short version:</span>{" "}
                        This is my personal portfolio. You are welcome to browse, learn from my projects, and explore the public repos I link to. Please don't copy my proprietary work or site design and claim it as your own.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {SECTIONS.map((section, i) =>
                        section.isContact ? (
                            <section key={i} className="pt-8 border-t border-border">
                                <h2 className="text-base font-semibold mb-3">Questions?</h2>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    If you have any questions about these terms or wish to discuss using some of the work shown here, reach out to me at{" "}
                                    <a
                                        href="mailto:saranskumarwh@gmail.com"
                                        className="text-primary hover:underline underline-offset-4"
                                    >
                                        saranskumarwh@gmail.com
                                    </a>
                                    .
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
                        href="/privacy"
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        View Privacy Policy →
                    </Link>
                </div>
            </div>
        </main>
    );
}
