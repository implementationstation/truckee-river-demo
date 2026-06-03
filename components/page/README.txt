/components/page/
  PageShell.vue
  SectionBlock.vue
  InfoCardGrid.vue
  SplitFeature.vue
  CTASection.vue

/data/pages/
  truckeeHome.ts

/pages/
  index.vue

!!!-----------------------------------------------
  Rule of thumb: 
    sections breathe, cards behave, CTAs punch.. . 
    Don’t jam components together. 
    Give every major section 80–100px top margin, 
    keep text widths under 720px, and 
    let card grids stack naturally on mobile.
!!!--------------------------------------------


Here’s a visual direction for the Truckee River demo layout*
    (* Found in /docs)

 — roomy spacing, reusable sections, strong CTA hierarchy, and component-heavy without feeling cluttered.

Key things happening in this structure:

Huge breathing room between sections
Max-width text blocks so readability stays premium
Reusable card systems
Obvious booking CTA
Clean tourism/adventure vibe without looking “template-y”
Designed for Vuetify rows/cols to scale cleanly mobile → desktop

The important architectural takeaway:

Every section should feel like its own “scene,” not stacked content.

That means:

80–120px vertical rhythm
Large headings
Limited text width
Cards aligned consistently
Background changes used sparingly
Only ONE primary CTA per section

Your next step after this:

Build the shell
Create reusable section components
Feed everything from /data/pages/*.ts
Then iterate visuals later

That prevents the classic “Nuxt component spaghetti” problem where pages become impossible to maintain.