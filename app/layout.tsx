import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { OPEN_GRAPH_HOME, SITE_URL, TWITTER_HOME } from "@/constants/constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tensor SVG Loaders - Create Beautiful Loading Animations",
  description: "Create and customize stunning SVG loading animations for your web projects. Choose from 40+ beautiful, customizable loaders with easy integration.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    ...OPEN_GRAPH_HOME,
    images: [...OPEN_GRAPH_HOME.images] // Convert readonly array to mutable
  },
  twitter: {
    ...TWITTER_HOME,
    images: [...TWITTER_HOME.images] // Convert readonly array to mutable
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
