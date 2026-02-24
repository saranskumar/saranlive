import { Metadata } from "next";
import { getAllMindLabPosts, getAllCategories, getAllTags } from "@/lib/mindlab";
import { MindLabClient } from "@/components/mindlab-client";

export const metadata: Metadata = {
    title: "MindLab",
    description:
        "Engineering logs, systems thinking, AI exploration, and the occasional philosophy. Technical writing by Saran S Kumar.",
};

export default function MindLabPage() {
    const posts = getAllMindLabPosts();
    const categories = getAllCategories(posts);
    const tags = getAllTags(posts);

    return (
        <main className="min-h-screen bg-background text-foreground pt-20 md:pt-28 pb-24 px-4 sm:px-6">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <header className="mb-16 space-y-3">
                    <p className="mono-label">technical writing</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        MindLab
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Engineering logs, systems thinking, AI exploration, and the occasional
                        philosophy. Written while building.
                    </p>
                </header>

                {/* Client filtering + grid */}
                <MindLabClient posts={posts} categories={categories} tags={tags} />
            </div>
        </main>
    );
}
