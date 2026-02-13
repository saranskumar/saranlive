import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { MDXContent } from "@/components/mdx-content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to thoughts
                </Link>

                <header className="mb-16 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span>{post.readingTime}</span>
                    </div>
                </header>

                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <MDXContent source={post.content} />
                </div>
            </div>
        </main>
    );
}
