import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://anusthan-singh.vercel.app/"),
    title: "Anusthan Singh",
    description:
    "Hobby Designer and Software Engineer, currently at Stralto Global. Focused on immersive experiences, studying in KIIT University, India.",
    generator: "Next.js",
    applicationName: "Anusthan Singh",
    keywords: [
        "Anusthan Singh",
        "Anusthan",
        "anusthan12",
        "anusthan_12",
        "anusthan singh",
        "developer",
        "freelance developer",
        "frontend",
        "Reactjs",
        "Machine Learning",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "India",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Anusthan Singh",
        description:
      "Hobby Designer and Software Engineer, currently at Stralto Global. Focused on immersive experiences, studying in KIIT, India.",
        url: "https://anusthan-singh.vercel.app/",
        siteName: "https://anusthan-singh.vercel.app/",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Anusthan Singh",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Anusthan Singh",
        description:
      "Hobby Designer and Software Engineer, currently at Stralto Global. Focused on immersive experiences, studying in KIIT, India.",
        creator: "SeekVFX",
        creatorId: "0000000000",
        images: ["./public/metadata.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
