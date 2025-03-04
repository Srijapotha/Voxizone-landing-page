import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import NextTopLoader from "nextjs-toploader";

const outfit = Outfit({ subsets: ["latin"] });

const ApplicationUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${
      process.env.VERCEL_ENV === "production"
        ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        : process.env.VERCEL_URL
    }`
  : "http://localhost:3000";

enum APP {
  NAME = "Voxizo",
  TITLE = "Voxizo Media | High-Quality Agency Ad Accounts for Meta, Google & TikTok",
  DESCRIPTION = "Voxizo Media offers high-quality agency ad accounts for Meta, Google, and TikTok to help e-commerce brands, dropshippers, and affiliate marketers scale their advertising campaigns efficiently.",
}
export const metadata: Metadata = {
  metadataBase: new URL(ApplicationUrl),
  applicationName: APP.NAME,
  title: APP.TITLE,

  keywords: [
    "agency ad accounts",
    "high-quality META ad accounts",
    "high-quality Google ad accounts",
    "high-quality TikTok ad accounts",
    "e-commerce marketing",
    "dropshipping ads",
    "affiliate marketing ads",
    "digital marketing agency",
    "Europe-based ad accounts",
    "Meta ad accounts Europe",
    "Google ad accounts Europe",
    "TikTok ad accounts Europe",
  ],

  description: APP.DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP.TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP.NAME,
    title: APP.TITLE,
    description: APP.DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP.TITLE,
    description: APP.DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("dark bg-neutral-950 antialiased", outfit.className)}>
        <Navbar />
        {children}
        <Footer />
        <NextTopLoader
          showSpinner={false}
          color="#ffffff"
          zIndex={50}
          height={4}
        />
      </body>
    </html>
  );
}
