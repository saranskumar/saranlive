import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - System Not Found",
    description: "The requested route does not exist in the current architecture.",
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements to match the site's tech vibe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                <div className="eng-card p-8 flex flex-col items-center text-center space-y-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                        <Terminal className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <h1 className="text-5xl font-bold font-mono tracking-tight text-foreground">
                            404
                        </h1>
                        <p className="text-lg font-semibold text-foreground">
                            System Not Found
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The requested route does not exist in the current architecture or has been deprecated.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-border/60 my-2" />

                    {/* Action */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Base
                    </Link>
                </div>
                
                {/* Decorative terminal output */}
                <div className="mt-8 space-y-1.5 opacity-40 font-mono text-xs text-muted-foreground flex flex-col items-center">
                    <p>{`> Error: 404_NOT_FOUND`}</p>
                    <p>{`> Connection: Terminated`}</p>
                    <p>{`> Resolution: Redirecting to Index...`}</p>
                </div>
            </div>
        </main>
    );
}
