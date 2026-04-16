import { MetadataRoute } from "next";
import { getAllSystems } from "@/lib/systems";

const BASE = "https://saranskumar.live";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const systems = getAllSystems();

    const systemEntries: MetadataRoute.Sitemap = systems.map((s) => ({
        url: `${BASE}/systems/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        // Core pages — ordered by importance
        { url: BASE,                       lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
        { url: `${BASE}/about`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/systems`,          lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
        { url: `${BASE}/experience`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/contact`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7 },
        { url: `${BASE}/hire-me`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE}/profile`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
        { url: `${BASE}/privacy`,          lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
        { url: `${BASE}/terms`,            lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
        // Dynamic system detail pages
        ...systemEntries,
    ];
    } catch (error) {
        console.error("Sitemap generation failed:", error);
        return [{ url: BASE, lastModified: new Date() }];
    }
}
