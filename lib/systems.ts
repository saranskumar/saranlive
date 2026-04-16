import fs from "fs";
import path from "path";
import matter from "gray-matter";

const systemsDirectory = path.join(process.cwd(), "content/systems");

export interface SystemItem {
    slug: string;
    title: string;
    category: string;
    description: string;
    stack: string[];
    outcome: string;
    period: string;
    tags: string[];
    image?: string;
    github?: string;
    demo?: string;
    password?: string;
    content: string;
}

const SYSTEM_ORDER = [
    "asap11",
    "padi-p",
    "neyyar",
    "dhyuthi-regdesk",
    "ieee-sctsb",
    "thm-regdesk",
    "airob-2025",
    "aura",
    "dhyuthi",
    "montauk"
];

export function getAllSystems(): SystemItem[] {
    if (!fs.existsSync(systemsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(systemsDirectory);
    const systems = fileNames
        .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, "");
            const fullPath = path.join(systemsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                category: data.category ?? "Uncategorized",
                description: data.description ?? "",
                stack: data.stack ?? [],
                outcome: data.outcome ?? "",
                period: data.period ?? "",
                tags: data.tags ?? [],
                image: data.image ?? null,
                github: data.github ?? null,
                demo: data.demo ?? null,
                password: data.password ?? null,
                content: content.trim(),
            };
        });

    return systems.sort((a, b) => {
        const indexA = SYSTEM_ORDER.indexOf(a.slug);
        const indexB = SYSTEM_ORDER.indexOf(b.slug);
        
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.slug.localeCompare(b.slug);
    });
}

export function getSystemBySlug(slug: string): SystemItem | null {
    const mdxPath = path.join(systemsDirectory, `${slug}.mdx`);
    const mdPath = path.join(systemsDirectory, `${slug}.md`);
    const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

    if (!fullPath) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title ?? slug,
        category: data.category ?? "Uncategorized",
        description: data.description ?? "",
        stack: data.stack ?? [],
        outcome: data.outcome ?? "",
        period: data.period ?? "",
        tags: data.tags ?? [],
        image: data.image ?? null,
        github: data.github ?? null,
        demo: data.demo ?? null,
        password: data.password ?? null,
        content: content.trim(),
    };
}
