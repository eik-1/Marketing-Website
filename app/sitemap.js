import { getAllServiceIds } from "./services/_data";
import { getAllCaseStudyIds } from "./case-studies/_data";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://oddstone.co.uk";
  const staticRoutes = ["", "/about-us", "/services", "/case-studies", "/get-audit"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: p === "" ? 1 : 0.7,
    })
  );
  const serviceRoutes = getAllServiceIds().map((id) => ({
    url: `${base}/services/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  const caseStudyRoutes = getAllCaseStudyIds().map((id) => ({
    url: `${base}/case-studies/${id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
