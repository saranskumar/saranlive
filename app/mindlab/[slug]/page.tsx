import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllMindLabPosts, getMindLabPostBySlug } from "@/lib/mindlab";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Tag } from "@/components/tag";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllMindLabPosts();
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getMindLabPostBySlug(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function MindLabPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getMindLabPostBySlug(slug);

    if (!post) notFound();

    const formatted = post.date
        ? new Date(post.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "";

    return (
        <main className="min-h-screen bg-background text-foreground pt-20 md:pt-28 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-2xl">
                {/* Back */}
                <Link
                    href="/mindlab"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4" />
                    MindLab
                </Link>

                {/* Header */}
                <header className="mb-12 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="mono-label">{post.category}</span>
                        {formatted && (
                            <>
                                <span className="text-muted-foreground/30">·</span>
                                <span className="mono-label">{formatted}</span>
                            </>
                        )}
                        <span className="text-muted-foreground/30">·</span>
                        <span className="mono-label">{post.readingTime}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {post.excerpt}
                    </p>
                </header>

                {/* MDX content */}
                <article className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-p:leading-relaxed prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border max-w-none">
                    <MDXRemote source={post.content} />
                </article>

                {/* Tags */}
                {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                        {post.tags.map((tag) => (
                            <Tag key={tag} label={tag} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
