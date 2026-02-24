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
    content: string;
}

export function getAllSystems(): SystemItem[] {
    if (!fs.existsSync(systemsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(systemsDirectory).sort();
    return fileNames
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
                content: content.trim(),
            };
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
        content: content.trim(),
    };
}
