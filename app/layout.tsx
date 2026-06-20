import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizCentra Global Limited | Smart Logistics & Global Trade",
  description: "BizCentra Global Limited delivers reliable freight, sourcing, procurement, and supply chain solutions that help businesses move goods efficiently across borders.",
  keywords: "logistics, freight forwarding, procurement, supply chain, import export, Nigeria, Africa, global trade",
  openGraph: {
    title: "BizCentra Global Limited",
    description: "Connecting Businesses Through Smart Logistics, Procurement, and Global Trade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
