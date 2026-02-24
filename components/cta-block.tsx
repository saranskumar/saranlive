import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABlock() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-4xl font-bold tracking-tight">
                        Let's Build Something Together
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind? I'm available for freelance work and consulting.
                        Let's discuss how I can help bring your ideas to life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button asChild size="lg">
                            <Link href="/hire-me">
                                Start a Project
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/#contact">
                                Get in Touch
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
