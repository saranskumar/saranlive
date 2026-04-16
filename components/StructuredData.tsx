import { PROFILE } from "@/lib/data";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PROFILE.name,
    "url": "https://saranskumar.live",
    "description": PROFILE.bio,
    "jobTitle": PROFILE.role,
    "sameAs": Object.values(PROFILE.links),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
