import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use",
    description: "Terms of Use for Saran S Kumar's portfolio - outlining the usage and ownership of content and code presented on this site.",
    alternates: { canonical: "https://saranskumar.live/terms" },
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-24 md:pt-32 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-3xl">
                <header className="mb-12">
                    <p className="mono-label mb-3">legal</p>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Terms of Use</h1>
                    <p className="text-muted-foreground mt-4">Last Updated: April 2026</p>
                </header>

                <article className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            By accessing this website (saranskumar.live), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Ownership of Content</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All materials on this website, including but not limited to the design, layout, look, appearance, graphics, documentation, and original project code summaries, are the intellectual property of <strong>Saran S Kumar</strong> unless otherwise stated (e.g., third-party logos or open-source libraries).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Usage License</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-4">
                            <li>Modify or copy the materials for commercial purposes.</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                            <li>Use my original designs or "Systems" documentation to build competing commercial products without explicit permission.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Code & Project Disclaimer</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The projects and "Systems" showcased on this site are for demonstration purposes. While I strive for technical excellence, I provide these summaries and codes "as is" without warranty of any kind. Use of any information on this site is entirely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Privacy & Data</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Your use of this site is also governed by my 
                            <a href="/privacy" className="mx-1 text-primary hover:underline">Privacy Policy</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Modifications</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            I may revise these terms of use for my website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Any claim relating to saranskumar.live shall be governed by the laws of India, without regard to its conflict of law provisions.
                        </p>
                    </section>
                </article>
            </div>
        </main>
    );
}
