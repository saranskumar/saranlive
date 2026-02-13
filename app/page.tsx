import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { ProjectsSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground animate-in fade-in duration-500">
      {/* 1. Hero: Name, Role, CTA */}
      <HeroSection />

      {/* 2. About: Bio, Journey, Positions (Combined) */}
      <AboutSection />

      {/* 3. Projects: Preview Grid */}
      <ProjectsSection />

      {/* 4. Contact / Footer Area */}
      {/* Footer is usually in layout, but Contact CTA can be here */}
      <ContactSection />
    </main>
  );
}
