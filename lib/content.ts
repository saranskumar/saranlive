import fs from "fs";
import path from "path";
import matter from "gray-matter";

const journeyDirectory = path.join(process.cwd(), "content/journey");
const positionsDirectory = path.join(process.cwd(), "content/positions");

export interface JourneyItem {
    title: string;
    organization: string;
    period: string;
    type: string;
    description: string;
}

export interface PositionItem {
    role: string;
    org: string;
    period: string;
    impact: string[];
    description: string;
}

export function getAllJourney(): JourneyItem[] {
    if (!fs.existsSync(journeyDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(journeyDirectory);
    const journey = fileNames.map((fileName) => {
        const fullPath = path.join(journeyDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            title: data.title,
            organization: data.organization,
            period: data.period,
            type: data.type,
            description: content.trim(),
        };
    });

    // Sort by period (descending) - simple string comparison for now, or rely on filename order
    // Creating a simple sorter based on year if possible, or just file order. 
    // The filenames are numbered (01, 02...) so file system order might be enough if read correctly, 
    // but explicit sort is safer. Since filenames are 01-..., sort by filename.
    return journey.sort((a, b) => {
        // We don't have filenames here, so let's rely on the read order which usually follows filename in readdirSync 
        // or just assume the user names them 01, 02 etc. to control order. 
        // Actually, readdirSync does not guarantee order.
        // Let's re-map to include filename for sorting.
        return 0;
    }).reverse(); // 01 is latest? No, 01 is B.Tech (2024). 06 is Higher Sec (2022).
    // Wait, 01-btech is "2024-Present". 06 is "2022-2024".
    // If I want reverse chronological, 01 should be first. 
    // effectively I want to sort by filename ASC.
}

// Revised getAllJourney to sort by filename
export function getAllJourneySorted(): JourneyItem[] {
    if (!fs.existsSync(journeyDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(journeyDirectory).sort();
    return fileNames.map((fileName) => {
        const fullPath = path.join(journeyDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        return {
            title: data.title,
            organization: data.organization,
            period: data.period,
            type: data.type,
            description: content.trim(),
        };
    });
}


export function getAllPositionsSorted(): PositionItem[] {
    if (!fs.existsSync(positionsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(positionsDirectory).sort();
    return fileNames.map((fileName) => {
        const fullPath = path.join(positionsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            role: data.role,
            org: data.org,
            period: data.period,
            impact: data.impact || [],
            description: content.trim(),
        };
    });
}
