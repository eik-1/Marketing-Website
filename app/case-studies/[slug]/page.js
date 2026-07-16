import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { getAllCaseStudyIds, getCaseStudyBySlug } from "../_data";
import CaseStudyContent from "./Content";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllCaseStudyIds().map((id) => ({ slug: id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return {
      title: "Case Study | Oddstone Marketing",
    };
  }
  return {
    title: `${study.title} Case Study | Oddstone Marketing`,
    description: study.subtitle,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: `${study.title} Case Study | Oddstone Marketing`,
      description: study.subtitle,
      url: `/case-studies/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} Case Study | Oddstone Marketing`,
      description: study.subtitle,
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <>
        <div className="relative z-10 min-h-screen bg-white">
          <Navbar />
          <main className="min-h-[60vh] flex items-center justify-center px-6 py-24">
            <div className="max-w-2xl text-center">
              <h1 className="text-3xl md:text-5xl font-black text-black mb-4">
                Case study not found
              </h1>
              <p className="text-gray-600 mb-8">
                The case study you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                View All Case Studies
              </Link>
            </div>
          </main>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="relative z-10 min-h-screen bg-white">
        <Navbar />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://oddstone.co.uk",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Case Studies",
                  item: "https://oddstone.co.uk/case-studies",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: study.title,
                  item: `https://oddstone.co.uk/case-studies/${slug}`,
                },
              ],
            }),
          }}
        />

        <CaseStudyContent study={study} />
      </div>
      <Footer />
    </>
  );
}
