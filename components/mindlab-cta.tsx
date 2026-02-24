import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const RECENT_POSTS = [
    {
        slug: "systems-thinking",
        title: "Systems Thinking for Engineers",
        category: "Systems Thinking",
        excerpt: "How thinking in systems — not components — changed the way I approach every build.",
        readingTime: "5 min read",
    },
    {
        slug: "embedded-vs-web",
        title: "Embedded vs Web: A Bridge Builder's Take",
        category: "Engineering Logs",
        excerpt:
            "What firmware engineers and web developers can learn from each other — and why the gap is smaller than you think.",
        readingTime: "7 min read",
    },
];

export function MindLabCTA() {
    return (
        <section className="section-divider py-20 px-6">
            <div className="mx-auto max-w-[1200px]">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <p className="mono-label mb-3">mindlab</p>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Read my thinking
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-md">
                            Engineering logs, systems thinking, AI exploration, and the
                            occasional philosophy.
                        </p>
                    </div>
                    <Link
                        href="/mindlab"
                        className="hidden md:inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                        All posts
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="space-y-4">
                    {RECENT_POSTS.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/mindlab/${post.slug}`}
                            className="eng-card group flex flex-col sm:flex-row sm:items-start gap-4 p-5"
                        >
                            <div className="w-9 h-9 shrink-0 rounded-md bg-primary/10 flex items-center justify-center">
                                <BookOpen className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-3">
                                    <span className="mono-label">{post.category}</span>
                                    <span className="mono-label">{post.readingTime}</span>
                                </div>
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1 hidden sm:block" />
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Link
                        href="/mindlab"
                        className="inline-flex items-center gap-2 text-sm text-primary font-medium"
                    >
                        All posts
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
