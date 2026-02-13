"use client";


interface ProjectItem {
    id: number;
    title: string;
    description: string;
    meta: string;
    imageSrc: string;
    href: string;
}

export const PROJECT_ITEMS: ProjectItem[] = [
    {
        id: 1,
        title: "AIROB 2025",
        description: "Architecting the official platform for the All India Robotics summit.",
        meta: "Next.js • Tailwind • Supabase",
        imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 2,
        title: "IEEE Event Systems",
        description: "High-performance registration and management systems for large-scale events.",
        meta: "System Design • Optimization",
        imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 3,
        title: "Portfolio Architecture",
        description: "Designing the calm, glassmorphic portfolio you are seeing right now.",
        meta: "UI/UX • React • Motion",
        imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 4,
        title: "Neural Networks Lab",
        description: "Experimental lab for testing custom neural network architectures.",
        meta: "Python • PyTorch • AI",
        imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 5,
        title: "Smart Campus IoT",
        description: "Developing IoT solutions for efficient campus energy management.",
        meta: "IoT • C++ • Hardware",
        imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        href: "#",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-background text-foreground">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
                        <p className="text-muted-foreground text-lg">
                            A selection of systems, interfaces, and experiments.
                        </p>
                    </div>
                    <a href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
                        View all projects &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECT_ITEMS.slice(0, 3).map((item) => (
                        <div key={item.id} className="group relative flex flex-col space-y-3">
                            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted border border-border">
                                <img
                                    src={item.imageSrc}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-lg leading-none">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.meta}</p>
                            </div>
                            <p className="text-sm text-zinc-500 line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
