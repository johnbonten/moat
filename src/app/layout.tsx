import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Moat | AI-Powered Growth Advisory",
  description:
    "We are a full-stack growth agency led by former tech operators. We help startups, scaleups, and enterprises accelerate growth through precision, speed, and AI-driven execution.",
  keywords: [
    "growth advisory",
    "AI-powered growth",
    "startup growth",
    "international expansion",
    "go-to-market strategy",
    "business operations",
  ],
  authors: [{ name: "Moat" }],
  openGraph: {
    title: "Moat | AI-Powered Growth Advisory",
    description:
      "We are a full-stack growth agency led by former tech operators. We help startups, scaleups, and enterprises accelerate growth through precision, speed, and AI-driven execution.",
    url: "https://moat.agency",
    siteName: "Moat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moat | AI-Powered Growth Advisory",
    description:
      "We are a full-stack growth agency led by former tech operators. We help startups, scaleups, and enterprises accelerate growth through precision, speed, and AI-driven execution.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
