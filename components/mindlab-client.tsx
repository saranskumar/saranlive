"use client";

import Link from "next/link";
import { useState } from "react";
import { getAllMindLabPosts, getAllCategories, getAllTags } from "@/lib/mindlab";
import { BlogCard } from "@/components/blog-card";
import { Tag } from "@/components/tag";

// MindLab is a client component for filter interactivity
// Data is fetched server-side and passed as props via the page wrapper

interface MindLabClientProps {
    posts: ReturnType<typeof getAllMindLabPosts>;
    categories: string[];
    tags: string[];
}

export function MindLabClient({ posts, categories, tags }: MindLabClientProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const filtered = posts.filter((post) => {
        const categoryMatch =
            activeCategory === "All" || post.category === activeCategory;
        const tagMatch = !activeTag || post.tags.includes(activeTag);
        return categoryMatch && tagMatch;
    });

    return (
        <div className="space-y-10">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${activeCategory === cat
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Tag filter */}
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Tag
                            key={tag}
                            label={tag}
                            active={activeTag === tag}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        />
                    ))}
                </div>
            )}

            {/* Posts grid */}
            {filtered.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                    No posts match the selected filters.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filtered.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            )}
        </div>
    );
}
