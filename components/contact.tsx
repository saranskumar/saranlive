"use client";

import { Mail } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center space-y-8">

                    {/* Header */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                        <p className="text-lg text-muted-foreground">
                            Have a project in mind or just want to chat? I'd love to hear from you.
                        </p>
                    </div>

                    {/* Email CTA */}
                    <div className="p-8 rounded-lg border border-border bg-card">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Me</h3>
                        <p className="text-muted-foreground mb-6">
                            Best way to reach me for project inquiries and collaborations
                        </p>
                        <Button asChild size="lg">
                            <a href={`mailto:${PROFILE.email}`}>
                                {PROFILE.email}
                            </a>
                        </Button>
                    </div>

                    {/* Response Time */}
                    <p className="text-sm text-muted-foreground">
                        I typically respond within 24 hours during weekdays
                    </p>
                </div>
            </div>
        </section>
    );
}
