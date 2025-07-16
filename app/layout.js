import { satoshi } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Oddstone",
  description: "Marketing that feels like a partnership — not a pitch",
  // metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
  // openGraph: {
  //   title: "Oddstone",
  //   description: "Marketing that feels like a partnership — not a pitch",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Oddstone",
  //   description: "Marketing that feels like a partnership — not a pitch",
  // },
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
    <html lang="en">
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${satoshi.className} antialiased`}>{children}</body>
    </html>
  );
}
