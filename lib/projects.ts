export interface ProjectItem {
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
