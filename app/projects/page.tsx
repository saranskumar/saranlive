import { FocusRail } from "@/components/ui/focus-rail";
import { PROJECT_ITEMS } from "@/components/home/projects-section";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-foreground/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto pt-32 pb-20 relative z-10">
                <div className="px-6 mb-20 space-y-6 max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Proof of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Work</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        A selection of technical projects that demonstrate range, depth, and system thinking.
                        From generative AI interfaces to distributed database engines.
                    </p>
                </div>

                <FocusRail items={PROJECT_ITEMS} />
            </div>
        </main>
    );
}
