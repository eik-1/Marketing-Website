import { satoshi } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: {
    default: "Oddstone — Friendly, results-first marketing",
    template: "%s | Oddstone",
  },
  description:
    "Marketing that feels like a partnership — not a pitch. SEO, PPC, social and automation tailored to your goals and budget.",
  metadataBase: new URL("https://www.oddstone.example"),
  openGraph: {
    title: "Oddstone — Friendly, results-first marketing",
    description:
      "SEO, PPC, social and automation tailored to your goals and budget.",
    url: "/",
    siteName: "Oddstone",
    images: [
      { url: "/og-pic2.png", width: 1200, height: 630, alt: "Oddstone" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oddstone — Friendly, results-first marketing",
    description:
      "SEO, PPC, social and automation tailored to your goals and budget.",
    images: ["/og-pic2.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        {/* Preconnects to external media hosts */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${satoshi.variable} font-sans antialiased h-full flex flex-col`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Oddstone",
              url: "https://www.oddstone.example",
              logo: "https://www.oddstone.example/og-pic2.png",
              sameAs: [
                "https://www.linkedin.com/company/oddstone",
                "https://www.instagram.com/oddstone",
              ],
            }),
          }}
        />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
