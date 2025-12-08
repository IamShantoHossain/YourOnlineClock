// File: src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Your Clock Online",
    short_name: "Your Clock Online",
    description: "A simple online clock application.",
    start_url:
      process.env.NODE_ENV === "development"
        ? "https://localhost:3000"
        : "https://www.youronlineclock.com",
    scope:
      process.env.NODE_ENV === "development"
        ? "https://localhost:3000"
        : "https://www.youronlineclock.com",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/pwa/web-app-manifest-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/pwa/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/pwa/pwa/screenshot-1.png",
        sizes: "1366x645",
        type: "image/png",
      },
    ],
  };
}
