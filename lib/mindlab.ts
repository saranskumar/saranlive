import fs from "fs";
import path from "path";
import matter from "gray-matter";

const mindlabDirectory = path.join(process.cwd(), "content/mindlab");

export interface MindLabPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    tags: string[];
    readingTime: string;
    content: string;
}

export function getAllMindLabPosts(): MindLabPost[] {
    if (!fs.existsSync(mindlabDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(mindlabDirectory).sort();
    const posts = fileNames
        .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, "");
            const fullPath = path.join(mindlabDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                date: data.date ?? "",
                excerpt: data.excerpt ?? "",
                category: data.category ?? "Uncategorized",
                tags: data.tags ?? [],
                readingTime: `${Math.ceil(content.split(/\s+/).length / 200)} min read`,
                content: content.trim(),
            };
        });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getMindLabPostBySlug(slug: string): MindLabPost | null {
    const mdxPath = path.join(mindlabDirectory, `${slug}.mdx`);
    const mdPath = path.join(mindlabDirectory, `${slug}.md`);
    const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

    if (!fullPath) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        category: data.category ?? "Uncategorized",
        tags: data.tags ?? [],
        readingTime: `${Math.ceil(content.split(/\s+/).length / 200)} min read`,
        content: content.trim(),
    };
}

export function getAllCategories(posts: MindLabPost[]): string[] {
    const cats = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(cats).sort()];
}

export function getAllTags(posts: MindLabPost[]): string[] {
    const tags = new Set(posts.flatMap((p) => p.tags));
    return Array.from(tags).sort();
}
