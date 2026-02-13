import { AvatarHoverCard } from "@/components/ui/avatar-hover-card";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-electric-blue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-soft-violet/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                <AvatarHoverCard />

                <div className="mt-12 space-y-4">
                    <div className="p-4 rounded-2xl bg-secondary/30 border border-white/5 backdrop-blur-sm">
                        <h4 className="text-sm font-medium text-foreground mb-2">Latest Status</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Building the future of personal cloud computing.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
