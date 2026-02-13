import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thoughts | Saran S Kumar",
    description: "Essays on software engineering, design, and building products.",
};

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-3xl">
                <header className="mb-24 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Thoughts</h1>
                    <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Notes on engineering, design systems, and building software that lasts.
                    </p>
                </header>

                <div className="space-y-16">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                            <article className="space-y-3">
                                <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground">
                                    <time dateTime={post.date}>{post.date}</time>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                                <h2 className="text-2xl font-semibold tracking-tight group-hover:underline decoration-muted-foreground/30 underline-offset-4 transition-all">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="pt-2 flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
