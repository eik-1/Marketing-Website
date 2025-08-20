export const services = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDescription:
      "Get found organically. Technical SEO, content strategy, and site health tailored for growth.",
    image: "/services/service-img2.png",
    icon: "SearchCheck",
    heroKicker: "SEO",
    heroSubtitle:
      "Sustainable, compounding growth through technical fixes, content and authority.",
    highlights: [
      "Technical audits and fixes",
      "Keyword and content strategy",
      "On-page and internal linking",
      "Site speed and Core Web Vitals",
    ],
  },
  {
    id: "ppc",
    title: "Pay-Per-Click (PPC) Advertising",
    shortDescription:
      "Instant visibility through smart, performance-driven ad campaigns across Google, Meta and more.",
    image: "/services/service-img4.jpg",
    icon: "Sparkle",
    heroKicker: "PPC",
    heroSubtitle:
      "Efficient acquisition with clear targets, creative testing and rigorous optimisation.",
    highlights: [
      "Full-funnel account structure",
      "Compelling ad creative and copy",
      "Bid strategies aligned to goals",
      "Conversion tracking and LTV",
    ],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    shortDescription:
      "Engaging content and ads that connect your brand with your people across the platforms that matter.",
    image: "/services/service-img1.png",
    icon: "BadgeCheck",
    heroKicker: "Social",
    heroSubtitle:
      "Build community and drive action with consistent, on-brand content and campaigns.",
    highlights: [
      "Content calendars and production",
      "Paid + organic synergy",
      "UGC and creator partnerships",
      "Reporting on reach and ROI",
    ],
  },
  {
    id: "web-design",
    title: "Website Design and Development",
    shortDescription:
      "A fast, accessible, and beautiful website that turns visitors into customers.",
    image: "/services/service-img3.jpg",
    icon: "MonitorSmartphone",
    heroKicker: "Web",
    heroSubtitle:
      "Clean, modern and conversion-focused experiences built on performance foundations.",
    highlights: [
      "Wireframes to polished UI",
      "Next.js, accessibility and SEO",
      "Analytics and events setup",
      "A/B testing for conversion",
    ],
  },
];

export const servicesById = Object.fromEntries(
  services.map((svc) => [svc.id, svc])
);

export function getServiceBySlug(slug) {
  return servicesById[slug];
}

export function getAllServiceIds() {
  return services.map((s) => s.id);
}
