import Link from "next/link";

export function ContactCTA() {
    return (
        <section className="section-divider py-20 px-6 bg-secondary/20">
            <div className="mx-auto max-w-[1200px]">
                <div className="max-w-2xl space-y-6">
                    <p className="mono-label">contact</p>
                    <h2 className="text-3xl font-bold tracking-tight">
                        Let&apos;s build something.
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed">
                        Open to internships, collaborations, and interesting projects.
                        If you&apos;re working on something real — hardware, software, or
                        both — reach out.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="mailto:saranskumarwh@gmail.com"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-primary/40 bg-primary/10 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
                        >
                            saranskumarwh@gmail.com
                        </a>
                        <Link
                            href="/profile"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                        >
                            Digital card ↗
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
