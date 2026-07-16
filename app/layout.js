import { satoshi } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: {
    default: "Oddstone Marketing | SEO, Brand & Performance Marketing Agency",
    template: "%s | Oddstone",
  },
  description:
    "Oddstone Marketing helps brands grow with SEO, brand & performance marketing, and social media. Global expertise across luxury, e-commerce, and high-intent lead generation.",
  metadataBase: new URL("https://oddstone.co.uk"),
  openGraph: {
    title: "Oddstone Marketing | SEO, Brand & Performance Marketing Agency",
    description:
      "Oddstone Marketing helps brands grow with SEO, brand & performance marketing, and social media. Global expertise across luxury, e-commerce, and high-intent lead generation.",
    url: "/",
    siteName: "Oddstone",
    images: [
      { url: "/og-pic.webp", width: 1200, height: 630, alt: "Oddstone" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oddstone Marketing | SEO, Brand & Performance Marketing Agency",
    description:
      "Oddstone Marketing helps brands grow with SEO, brand & performance marketing, and social media. Global expertise across luxury, e-commerce, and high-intent lead generation.",
    images: ["/og-pic.webp"],
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
              url: "https://oddstone.co.uk",
              logo: "https://oddstone.co.uk/og-pic.webp",
              sameAs: [
                "https://www.linkedin.com/company/oddstone-marketing-services",
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
