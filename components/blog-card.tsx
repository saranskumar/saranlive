import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tag } from "@/components/tag";

interface BlogCardProps {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    tags: string[];
    readingTime: string;
}

export function BlogCard({
    slug,
    title,
    date,
    excerpt,
    category,
    tags,
    readingTime,
}: BlogCardProps) {
    const formatted = date
        ? new Date(date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
        : "";

    return (
        <Link
            href={`/mindlab/${slug}`}
            className="eng-card group flex flex-col p-6 gap-4 h-full"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                    <span className="mono-label">{category}</span>
                    <h3 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {excerpt}
            </p>

            <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} label={tag} />
                ))}
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                <span className="text-xs font-mono text-muted-foreground">{formatted}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-xs font-mono text-muted-foreground">{readingTime}</span>
            </div>
        </Link>
    );
}
