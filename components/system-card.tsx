import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SystemCardProps {
    slug: string;
    title: string;
    category: string;
    description: string;
    stack: string[];
    outcome: string;
    period: string;
}

export function SystemCard({
    slug,
    title,
    category,
    description,
    stack,
    outcome,
    period,
}: SystemCardProps) {
    return (
        <Link
            href={`/systems/${slug}`}
            className="eng-card group flex flex-col p-6 gap-5 h-full"
        >
            <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                    <span className="mono-label">{category}</span>
                    <h3 className="font-semibold text-lg text-foreground leading-snug group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
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
        </Link>
    );
}
