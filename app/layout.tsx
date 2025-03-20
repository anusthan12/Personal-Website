import Head from 'next/head';
import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://anusthan-singh.vercel.app/"),
    title: "Anusthan Singh | Full-Stack Developer & Enterprise Solutions Specialist",
    description:
    "Portfolio of Anusthan Singh - Full-stack developer specializing in enterprise solutions with expertise in React, Next.js, and modern web technologies.",
    generator: "Next.js",
    applicationName: "Anusthan Singh Portfolio",
    keywords: [
        "anusthan singh",
        "Anusthan Singh",
        "Anusthan",
        "anusthan12",
        "anusthan_12",
        "developer",
        "freelance developer",
        "frontend",
        "Reactjs",
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
        "full-stack developer",
        "enterprise solutions developer",
        "web developer India",
        "hire Anusthan Singh",
        "Anusthan Singh developer",
        "Anusthan Singh portfolio",
    ],
    alternates: {
        canonical: "https://anusthan-singh.vercel.app/",
    },
    authors: [{ name: "Anusthan Singh" }],
    colorScheme: "dark",
    openGraph: {
        title: "Anusthan Singh | Full-Stack Developer & Enterprise Solutions Specialist",
        description:
        "Portfolio of Anusthan Singh - Full-stack developer specializing in enterprise solutions with expertise in React, Next.js, and modern web technologies.",
        url: "https://anusthan-singh.vercel.app/",
        siteName: "Anusthan Singh Portfolio",
        images: [
            {
                url: "/metadata.jpg", // Fixed path
                width: 1200,
                height: 630,
                alt: "Anusthan Singh - Full-Stack Developer",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Anusthan Singh | Full-Stack Developer",
        description:
        "Portfolio of Anusthan Singh - Full-stack developer specializing in enterprise solutions with expertise in React, Next.js, and modern web technologies.",
        creator: "@SeekVFX",
        creatorId: "0000000000",
        images: ["/metadata.jpg"], // Fixed path
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true, // Changed to true
            noimageindex: false, // Changed to false to allow image indexing
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
    verification: {
        google: "google88d8535edf3dfaa8", // Add your Google verification code if you have one
    },
};

type RootLayoutProps = {
  children: ReactNode;
};

// This goes in your RootLayout.js file, inside the <head> section
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="google-site-verification" content="google88d8535edf3dfaa8" />
                
                {/* JSON-LD structured data for Person */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Anusthan Singh",
                            "url": "https://anusthan-singh.vercel.app/",
                            "image": "https://anusthan-singh.vercel.app/metadata.jpg",
                            "sameAs": [
                                // Add your social media URLs here
                                "https://github.com/anusthan12",
                                "https://www.linkedin.com/in/anusthan12/", // Replace with your actual GitHub
                                "https://www.instagram.com/anusthan_12/" // Replace with your actual LinkedIn
                            ],
                            "jobTitle": "Full-Stack Developer & Enterprise Solutions Specialist",
                            "worksFor": {
                                "@type": "Quality Bit Solutions",
                                "name": "Developer" // Update this if you work for a company
                            },
                            "description": "Full-stack developer specializing in enterprise solutions with expertise in React, Next.js, and modern web technologies.",
                            "knowsAbout": [
                                "React",
                                "Next.js",
                                "JavaScript",
                                "TypeScript",
                                "Full-Stack Development",
                                "Enterprise Solutions",
                                "Web Development"
                            ]
                        })
                    }}
                />
            </Head>
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}