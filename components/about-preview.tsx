import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function AboutPreview() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {PROFILE.bio}
                </p>
                <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                    Learn more about my journey
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
