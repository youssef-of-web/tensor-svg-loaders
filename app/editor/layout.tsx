import { OPEN_GRAPH_EDITOR, SITE_URL, TWITTER_EDITOR } from "@/constants/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Editor - Tensor SVG Loaders",
    description: "Create and customize your own SVG loading animations in our interactive editor. Preview, customize, and export your loader.",
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: "/logo.svg",
    },
    openGraph: {
      ...OPEN_GRAPH_EDITOR,
      images: [...OPEN_GRAPH_EDITOR.images] // Convert readonly array to mutable
    },
    twitter: {
      ...TWITTER_EDITOR,
      images: [...TWITTER_EDITOR.images] // Convert readonly array to mutable
    },
  };

export default function EditorLayout({ children }: { children: React.ReactNode }) {
    return <div>
        {children}
    </div>
}