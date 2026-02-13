import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Saran S Kumar | Profile",
    description: "Digital business card and quick links.",
};

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-electric-blue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-soft-violet/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-sm bg-background border border-border rounded-3xl p-8 shadow-2xl text-center space-y-6">

                {/* Profile Image */}
                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
                    <img
                        src="/saran.png"
                        alt="Saran S Kumar"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Info */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight">Saran S Kumar</h1>
                    <p className="text-sm text-muted-foreground font-medium">AI • Software • Systems</p>
                </div>

                {/* Links */}
                <div className="space-y-3 pt-2">
                    <a
                        href="https://github.com/saranlive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-sm font-medium transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/saranlive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-sm font-medium transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:saran.kumar@example.com"
                        className="block w-full py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors"
                    >
                        Email Me
                    </a>
                </div>

                <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                        Save to contacts or scan NFC
                    </p>
                </div>

            </div>
        </main>
    );
}
