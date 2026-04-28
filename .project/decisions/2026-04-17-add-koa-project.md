# Decision: Add and Prioritize KōA (S4 Study Tracker)

## Context
The user requested the addition of the "KōA (S4 Study Tracker)" project to the systems portfolio. This is a significant project with high-quality assets and detailed documentation.

## Decision
1.  **MDX Integration**: Create a comprehensive MDX page for KōA, incorporating provided design principles (Claymorphism), architecture decisions (Supabase/Edge Functions), and feature maps.
2.  **Asset Optimization**: Rename WhatsApp images to descriptive names (`dashboard.jpeg`, `syllabus.jpeg`, etc.) for cleaner internal referencing.
3.  **Showcase Priority**: Place `koa` at the top of the `SYSTEM_ORDER` list in `lib/systems.ts` to highlight it as the primary/latest build.

## Consequences
- KōA becomes the first project visible on the "Systems" page.
- The portfolio now accurately reflects the user's latest work in production-ready PWAs and serverless automation.
