"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
    { name: "Systems", href: "/systems" },
    { name: "MindLab", href: "/mindlab" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto px-4 sm:px-6 h-14 flex items-center justify-between max-w-[1200px]">
                {/* Logo — name only */}
                <Link
                    href="/"
                    className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
                >
                    Saran S Kumar
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-7">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                pathname === link.href || pathname.startsWith(link.href + "/")
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </nav>

                {/* Mobile: Theme toggle + hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        className="p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-14 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg px-4 sm:px-6 py-5 space-y-4 animate-in slide-in-from-top-3">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "block text-sm font-medium py-2 transition-colors",
                                pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
