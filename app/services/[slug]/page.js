import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import { getAllServiceIds, getServiceBySlug } from "../_data";
import ServiceDetailContent from "./Content";

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ slug: id }));
}

export function generateMetadata({ params }) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return { title: "Service | Oddstone" };
  return {
    title: `${svc.title} | Oddstone`,
    description: svc.shortDescription,
    alternates: { canonical: `/services/${params.slug}` },
    openGraph: {
      title: `${svc.title} | Oddstone`,
      description: svc.shortDescription,
      url: `/services/${params.slug}`,
      type: "article",
    },
  };
}

export default function ServiceDetailPage({ params }) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl md:text-5xl font-black text-black">
            Service not found
          </h1>
          <p className="mt-4 text-gray-600">
            Please return to the services page.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <div className="relative z-10 min-h-screen bg-white">
        <Navbar />

        {/* BreadcrumbList JSON-LD */}
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
                  item: "/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: svc.title,
                  item: `/services/${params.slug}`,
                },
              ],
            }),
          }}
        />

        {/* Service JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: svc.title,
              description: svc.shortDescription,
              areaServed: "GB",
              provider: { "@type": "Organization", name: "Oddstone" },
            }),
          }}
        />

        <ServiceDetailContent service={svc} />
      </div>

      <Footer />
    </>
  );
}
