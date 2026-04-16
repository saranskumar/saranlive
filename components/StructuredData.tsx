import { PROFILE } from "@/lib/data";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PROFILE.name,
    "url": "https://saranskumar.live",
    "description": PROFILE.bio,
    "jobTitle": PROFILE.role,
    "award": [
      "1st Place - AIROB 2025 AI & Robotics Hackathon",
      "Winner - DECODEX CTF Cybersecurity Competition",
      "3rd Place - 11.11 Hackathon (ASAP11)"
    ],
    "sameAs": Object.values(PROFILE.links),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
