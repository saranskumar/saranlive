"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

import { PROFILE } from "@/lib/data";

interface AvatarHoverCardProps {
    className?: string;
}

export function AvatarHoverCard({ className }: AvatarHoverCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("w-full max-w-sm mx-auto", className)}
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-soft-violet/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden text-center">
                    <div className="flex justify-center mb-6">
                        <AvatarPrimitive.Root className="relative flex h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-border">
                            <AvatarPrimitive.Image
                                className="aspect-square h-full w-full object-cover"
                                src="https://github.com/shadcn.png" // Placeholder until real image
                                alt={PROFILE.name}
                            />
                            <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground">
                                SK
                            </AvatarPrimitive.Fallback>
                        </AvatarPrimitive.Root>
                    </div>

                    <div className="space-y-2 mb-8">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">{PROFILE.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{PROFILE.role}</p>
                        <p className="text-sm text-muted-foreground mt-2 max-w-[200px] mx-auto">
                            {PROFILE.bio}
                        </p>
                    </div>

                    <div className="flex justify-center gap-4">
                        <Link href={PROFILE.links.github} target="_blank" className="p-3 bg-secondary/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href={PROFILE.links.linkedin} target="_blank" className="p-3 bg-secondary/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href={PROFILE.links.twitter} target="_blank" className="p-3 bg-secondary/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href={PROFILE.links.instagram} target="_blank" className="p-3 bg-secondary/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href={`mailto:${PROFILE.email}`} className="p-3 bg-secondary/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/50">
                        <Link href="/hire-me" className="block w-full py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
                            Download Resume
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
