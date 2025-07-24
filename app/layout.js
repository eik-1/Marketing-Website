import { satoshi } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Oddstone",
  description: "Marketing that feels like a partnership — not a pitch",
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
      </head>
      <body
        className={`${satoshi.variable} font-sans antialiased h-full flex flex-col`}
      >
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
