export const PROFILE = {
    name: "Saran S Kumar",
    role: "Product Engineer & Builder",
    headline: "Computer Science (AI & ML) Student | IEEE Volunteer",
    location: "Trivandrum, Kerala, India",
    bio: "Hands-on builder across software, AI, and robotics. Focused on creating calm, intelligent systems that solve real problems.",
    email: "saranskumarwh@gmail.com",
    links: {
        github: "https://github.com/saranskumar",
        linkedin: "https://www.linkedin.com/in/saran-s-kumar/",
        twitter: "https://www.twitter.com/SaranSKumar13",
        instagram: "https://instagram.com/saraan.___",
        discord: "https://discord.com/users/saranskumar"
    },
    skills: [
        "Python", "C", "Java", "JavaScript",
        "React", "Next.js", "Tailwind",
        "Spring Boot", "MySQL", "Firebase",
        "Arduino", "ESP32", "Raspberry Pi",
        "AI/ML Systems"
    ]
};

// JOURNEY and POSITIONS are now fetched from MDX files in /content

export const PROJECTS = [
    {
        id: "01",
        title: "AIROB Robotics System",
        category: "Robotics / AI",
        description: "Winning project from AIROB 2025. A custom robotics solution designed for autonomous navigation and task execution under time constraints.",
        tech: ["Arduino", "C++", "Sensors", "Motor Control"],
        link: "/projects/airob-2025",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: "02",
        title: "Event Management System",
        category: "Full Stack",
        description: "Comprehensive ticketing and QR verification system built for IEEE Travancore Hub Meet 2025. Handled registration and real-time check-ins.",
        tech: ["React", "Firebase", "QR Code", "Tailwind"],
        link: "/projects/event-system",
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        id: "03",
        title: "IoT Environmental Monitor",
        category: "IoT / Cloud",
        description: "Real-time environmental monitoring system using ESP32 and LoRa communication. Integrates with cloud platforms for data visualization.",
        tech: ["ESP32", "LoRa", "Cloud IoT", "C++"],
        link: "/projects/iot-monitor",
        color: "from-emerald-500/20 to-lime-500/20",
    },
    {
        id: "04",
        title: "Personal Portfolio V1",
        category: "Web Design",
        description: "First iteration of personal digital identity. Exploring minimalism and component-driven architecture.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        link: "/projects/portfolio-v1",
        github: "https://github.com/saranlive",
        color: "from-purple-500/20 to-pink-500/20",
    },
];
