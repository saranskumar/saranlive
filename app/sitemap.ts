import { MetadataRoute } from "next";
import { getAllMindLabPosts } from "@/lib/mindlab";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllMindLabPosts();

    const mindlabEntries: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `https://saran.live/mindlab/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        {
            url: "https://saran.live",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://saran.live/projects",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://saran.live/hire-me",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://saran.live/mindlab",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        ...mindlabEntries,
    ];
}
