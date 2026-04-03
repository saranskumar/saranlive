import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface SystemCardProps {
    slug: string;
    title: string;
    category: string;
    description: string;
    stack: string[];
    outcome: string;
    period: string;
    image?: string | null;
}

export function SystemCard({
    slug,
    title,
    category,
    description,
    stack,
    outcome,
    period,
    image,
}: SystemCardProps) {
    return (
        <Link
            href={`/systems/${slug}`}
            className="eng-card group flex flex-col h-full overflow-hidden"
        >
            {/* Image preview */}
            <div className="relative w-full aspect-video bg-muted overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    // Placeholder when no image
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary/30">
                        <div className="space-y-1.5 text-center px-4">
                            <p className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">
                                {category}
                            </p>
                        </div>
                    </div>
                )}
                {/* Category badge overlay */}
                <span className="absolute top-3 left-3 mono-label bg-background/80 backdrop-blur-sm px-2 py-1 rounded">
                    {category}
                </span>
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-4 p-5 flex-1">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {description}
                </p>

                {outcome && (
                    <div className="px-3 py-2 rounded-md bg-primary/5 border border-primary/10">
                        <p className="text-xs text-primary font-medium">{outcome}</p>
                    </div>
                )}

                <div className="space-y-2 pt-2 border-t border-border/60">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                            {stack.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                            {stack.length > 4 && (
                                <span className="text-xs font-mono px-2 py-0.5 text-muted-foreground">
                                    +{stack.length - 4}
                                </span>
                            )}
                        </div>
                        {period && (
                            <span className="text-xs font-mono text-muted-foreground shrink-0">
                                {period}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
