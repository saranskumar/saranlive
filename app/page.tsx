import {
  HeroSection
} from "@/components/hero";
import { SystemsPreview } from "@/components/systems-preview";
import { EngineeringDepth } from "@/components/engineering-depth";
import { LeadershipExecution } from "@/components/leadership-execution";
import { ProofLayer } from "@/components/proof-layer";
import { MindLabCTA } from "@/components/mindlab-cta";
import { HireMe } from "@/components/hire-me";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Systems Preview */}
      <SystemsPreview />

      {/* 2b. Hire Me (below Systems) */}
      <HireMe />

      <EngineeringDepth />

      {/* 4. Leadership & Execution */}
      <LeadershipExecution />



    

      {/* 7. Contact CTA */}
      <ContactCTA />
    </main>
  );
}
