import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllSystems, getSystemBySlug } from "@/lib/systems";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const systems = getAllSystems();
    return systems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const system = getSystemBySlug(slug);
    if (!system) return {};
    return {
        title: system.title,
        description: system.description,
    };
}

export default async function SystemDetailPage({ params }: Props) {
    const { slug } = await params;
    const system = getSystemBySlug(slug);

    if (!system) notFound();

    return (
        <main className="min-h-screen bg-background text-foreground pt-20 md:pt-28 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-3xl">
                {/* Back */}
                <Link
                    href="/systems"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4" />
                    All Systems
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="mono-label">{system.category}</span>
                        {system.period && (
                            <>
                                <span className="text-border">·</span>
                                <span className="mono-label">{system.period}</span>
                            </>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                        {system.title}
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {system.description}
                    </p>

                    {/* Stack pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {system.stack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-mono px-2.5 py-1 rounded bg-muted text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Outcome highlight */}
                    {system.outcome && (
                        <div className="px-4 py-3 rounded-lg bg-primary/5 border border-primary/15 mt-2">
                            <p className="text-sm font-medium text-primary">
                                ✦ {system.outcome}
                            </p>
                        </div>
                    )}
                </header>

                {/* MDX content */}
                <article className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-lg prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border max-w-none">
                    <MDXRemote source={system.content} />
                </article>

                {/* Tags */}
                {system.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                        {system.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-mono px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
