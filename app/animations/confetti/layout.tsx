import { OPEN_GRAPH_CONFETTI, SITE_URL, TWITTER_CONFETTI } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Confetti Effects - Tensor SVG Loaders",
    description: "Add celebratory confetti animations to your special moments",
    metadataBase: new URL(SITE_URL + "/animations/confetti"),
    icons: {
      icon: "/logo.svg",
    },
    openGraph: {
      ...OPEN_GRAPH_CONFETTI,
      images: [...OPEN_GRAPH_CONFETTI.images] // Convert readonly array to mutable
    },
    twitter: {
      ...TWITTER_CONFETTI,
      images: [...TWITTER_CONFETTI.images] // Convert readonly array to mutable
    },
  };
export default function ConfettiLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}