import { satoshi } from "@/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Oddstone",
  description: "Marketing that feels like a partnership — not a pitch",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${satoshi.className} antialiased`}>{children}</body>
    </html>
  );
}
