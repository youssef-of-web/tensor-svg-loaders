
export const SITE_URL = "https://tensorsvg.com";
export const GITHUB_URL = "https://github.com/youssef-of-web/tensor-svg-loaders";
export const MY_GITHUB_URL = "https://github.com/youssef-of-web";

export const OPEN_GRAPH_HOME = {
    title: "Tensor SVG Loaders - Create Beautiful Loading Animations",
    description: "Create and customize stunning SVG loading animations for your web projects. 40+ beautiful loaders, fully customizable, easy integration.",
    url: `${SITE_URL}`,
    siteName: "Tensor SVG Loaders",
    locale: "en_US",
    type: "website",
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Tensor SVG Loaders Preview'
    }]
  } as const;

export const TWITTER_HOME = {
    card: "summary_large_image",
    title: "Create Beautiful SVG Loading Animations ✨",
    description: "40+ customizable loading animations for modern web apps. Easy integration, zero dependencies. Try it now!",
    site: "@tensorsvg",
    creator: "@tensorsvg",
    images: ['/og-image.png']
  } as const;

  export const OPEN_GRAPH_EDITOR = {
    title: "Editor - Tensor SVG Loaders",
    description: "Create and customize your own SVG loading animations in our interactive editor. Preview, customize, and export your loader.",
    url: `${SITE_URL}/editor`,
    siteName: "Tensor SVG Loaders",
    locale: "en_US", 
    type: "website",
    images: [{
      url: '/og-image-editor.png',
      width: 1200,
      height: 630,
      alt: 'Tensor SVG Loaders Editor Preview'
    }]
  } as const;

export const TWITTER_EDITOR = {
    card: "summary_large_image",
    title: "Create Your Own Loading Animation ✨",
    description: "Design custom SVG loaders in our interactive editor. Preview, customize, and export your animations.",
    site: "@tensorsvg",
    creator: "@tensorsvg",
    images: ['/og-image-editor.png']
  } as const;



export const NAVIGATION = {
  main: [
    { name: "Gallery", href: "/" },
    { name: "Editor", href: "/editor", badge: "New" }
  ]
} as const;