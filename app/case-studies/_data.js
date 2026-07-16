export const caseStudies = [
  {
    id: "zabella-official",
    title: "Zabella Official",
    subtitle: "Scaling Luxury Women's Western Wear Across India & UAE",
    industry: "Luxury Fashion (E-commerce)",
    markets: ["Pan-India", "UAE"],
    engagement: "Oct 2024 – Oct 2025",
    platforms: ["Meta Ads", "Google Search & Shopping"],
    overview:
      "Zabella Official is a luxury women's western wear brand focused on occasion-led fashion and aspirational styling. The brand operates across domestic and international markets with a strong emphasis on maintaining premium positioning.",
    challenge:
      "Zabella was facing rising acquisition costs and difficulty scaling profitably at a luxury price point. Performance dropped whenever budgets were increased, and the brand needed a way to grow without relying on heavy discounting.",
    strategy: [
      {
        title: "Audience Segmentation",
        detail:
          "We segmented audiences based on purchase intent, engagement depth, and product interest to avoid low-quality traffic and protect AOV.",
      },
      {
        title: "Retargeting Structure",
        detail:
          "A multi-layer retargeting funnel was built for product viewers, add-to-cart users, and past purchasers, with messaging focused on craftsmanship and occasion relevance.",
      },
      {
        title: "Catalog & DPA Optimisation",
        detail:
          "High-performing SKUs and occasion-based collections were prioritised through optimised product catalogues and dynamic ads.",
      },
      {
        title: "International Localisation",
        detail:
          "After testing the US and UAE, the UAE emerged as the strongest market. Budgets were fully reallocated and scaled aggressively, especially around Eid shopping behaviour.",
      },
      {
        title: "Influencer-Led Content",
        detail:
          "Influencer creatives aligned with the brand's aspirational aesthetic supported both prospecting and retargeting efforts.",
      },
    ],
    results: [
      { metric: "ROAS", before: "1.5x", after: "3.5x", type: "improvement" },
      { metric: "CPA", change: "~30%", direction: "down", type: "decrease" },
      { metric: "Revenue", change: "10x", type: "multiplier" },
      { metric: "UAE ROAS", value: "4x", detail: "consistent", type: "achievement" },
    ],
    keyTakeaway:
      "Luxury e-commerce can scale profitably without frequent discounts when performance strategy and brand positioning work together.",
    cta: {
      text: "Looking to scale a premium e-commerce brand?",
      button: "Book a strategy call",
    },
  },
  {
    id: "dua-beauty-london",
    title: "Dua Beauty London",
    subtitle: "Driving 500% Revenue Growth Through Funnel & Launch Optimisation",
    industry: "Beauty & Personal Care (E-commerce)",
    markets: ["UK", "Africa"],
    engagement: "Feb 2024 – Dec 2025",
    platforms: ["Shopify", "Meta Ads", "Google Ads", "Email/CRM", "Amazon"],
    overview:
      "Dua Beauty London is a multi-category beauty brand operating across cosmetics, skincare, and hair extensions, with a strong community presence in the UK and African markets.",
    challenge:
      "Despite strong demand, Dua Beauty London struggled with extremely low website conversion rates and weak customer retention. Traffic existed, but the funnel was leaking revenue at multiple stages.",
    strategy: [
      {
        title: "Funnel Optimisation",
        detail:
          "Product pages, landing flows, and checkout were optimised to reduce friction and align ad messaging with on-site intent.",
      },
      {
        title: "Performance-Led Product Launches",
        detail:
          "Each product launch was treated as a revenue moment, supported by structured Meta campaigns and real-time optimisation.",
      },
      {
        title: "Community-Driven Positioning",
        detail:
          "Campaigns leaned into authenticity, cultural relevance, and real-use scenarios rather than generic beauty messaging.",
      },
      {
        title: "Channel Focus",
        detail:
          "Meta emerged as the primary scale channel, supported by Google, Amazon, and CRM for retention and intent capture.",
      },
    ],
    results: [
      { metric: "Revenue Growth", value: "500%", type: "increase" },
      { metric: "Conversion Rate", before: "0.1%", after: "3%", type: "improvement" },
      { metric: "Top Channel", value: "Meta", detail: "highest-performing", type: "achievement" },
      { metric: "Product Launches", value: "2 Viral", detail: "Hair Gel & Extensions", type: "achievement" },
    ],
    keyTakeaway:
      "Fixing fundamentals and pairing them with performance-led launches can unlock exponential e-commerce growth.",
    cta: {
      text: "Want to improve conversion and scale profitably?",
      button: "Get a growth audit",
    },
  },
  {
    id: "pegasus-group-real-estate",
    title: "Pegasus Group",
    subtitle: "Improving Lead Quality for Luxury Real Estate in Dubai",
    industry: "Real Estate",
    markets: ["Dubai", "UAE", "International HNI investors"],
    engagement: "Jan 2025 – Present",
    platforms: ["Meta Ads", "Google Search", "Display", "YouTube", "WhatsApp"],
    overview:
      "Pegasus Group is a premium real estate developer offering luxury villas, off-plan, and ready-to-move projects across Dubai and the UAE.",
    challenge:
      "The issue wasn't lead volume — it was lead quality. Sales teams reported poor intent, low follow-through, and wasted effort on unqualified inquiries.",
    strategy: [
      {
        title: "Audience Segmentation",
        detail:
          "Campaigns were segmented by income level, geography, and buyer intent to focus on serious buyers only.",
      },
      {
        title: "Lead Quality Filtering",
        detail:
          "Qualifying questions were introduced within lead forms to filter low-intent inquiries before reaching sales.",
      },
      {
        title: "Project-Wise Campaigns",
        detail:
          "Each project had its own campaign structure with messaging aligned to location, lifestyle, and long-term value.",
      },
      {
        title: "Luxury-Focused Creative",
        detail:
          "Messaging prioritised trust, credibility, and lifestyle over urgency or mass-market tactics.",
      },
    ],
    results: [
      { metric: "CPL", change: "25–35%", direction: "down", type: "decrease" },
      { metric: "Lead Quality", change: "~40%", direction: "up", type: "increase" },
      { metric: "Monthly Leads", value: "80–120", detail: "qualified", type: "achievement" },
      { metric: "Top Channels", value: "Google + Meta", detail: "retargeting", type: "achievement" },
    ],
    keyTakeaway:
      "High-quality leads come from precision, not volume — especially in luxury real estate.",
    cta: {
      text: "Need better-qualified leads, not more leads?",
      button: "Book a consultation",
    },
  },
];

export const caseStudiesById = Object.fromEntries(
  caseStudies.map((cs) => [cs.id, cs])
);

export function getCaseStudyBySlug(slug) {
  return caseStudiesById[slug];
}

export function getAllCaseStudyIds() {
  return caseStudies.map((cs) => cs.id);
}

export function getRelatedCaseStudies(currentSlug) {
  return caseStudies.filter((cs) => cs.id !== currentSlug);
}
