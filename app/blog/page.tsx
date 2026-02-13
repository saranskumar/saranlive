import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <header className="mb-20 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Thoughts</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Notes on engineering, design systems, and building for the long term.
                    </p>
                </header>

                <div className="grid gap-12">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                            <article className="space-y-4 border-b border-border/50 pb-12 hover:border-foreground/20 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-electric-blue transition-colors">
                                        {post.title}
                                    </h2>
                                    <span className="text-sm font-mono text-muted-foreground shrink-0">
                                        {post.date}
                                    </span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed max-w-2xl group-hover:text-foreground/80 transition-colors">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors pt-2">
                                    Read article <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
