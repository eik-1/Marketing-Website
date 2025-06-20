import { Amiri, Inter } from "next/font/google";
import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
