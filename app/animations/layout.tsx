import { OPEN_GRAPH_ANIMATIONS, SITE_URL, TWITTER_ANIMATIONS } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stunning Animations - Tensor SVG Loaders",
    description: "Explore our collection of beautiful, ready-to-use animations to enhance your web applications.",
    metadataBase: new URL(SITE_URL + "/animations"),
    icons: {
        icon: "/logo.svg",
    },
    openGraph: {
        ...OPEN_GRAPH_ANIMATIONS,
        images: [...OPEN_GRAPH_ANIMATIONS.images] // Convert readonly array to mutable
    },
    twitter: {
        ...TWITTER_ANIMATIONS,
        images: [...TWITTER_ANIMATIONS.images] // Convert readonly array to mutable
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}