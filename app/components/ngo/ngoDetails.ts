export type NgoLink = {
    href: string;
    label: string;
};

export type NgoProps = {
    id: number;
    name: string;
    role: string;
    description: string;
    links: NgoLink[];
    image: string;
    available: boolean;
};

export const ngoWork: NgoProps[] = [
    {
        id: 1,
        name: "Taproot Foundation",
        role: "Pro Bono Volunteer",
        description:
            "Supported nonprofits across San Diego, Chicago, and Copenhagen with digital strategy, fundraising systems, and website transformation. Helped teams adopt practical, low-cost digital solutions and implementation roadmaps. Featured by Taproot Foundation during National Volunteer Week.",
        links: [
            { href: "https://taprootfoundation.org/", label: "Taproot Foundation" },
            { href: "https://lnkd.in/p/eyJwfbNd", label: "National Volunteer Week Feature (LinkedIn)" },
        ],
        image: "/projects/taproot.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Lotus Buds",
        role: "Developer (Volunteer)",
        description:
            "Built a GDPR-compliant website from the ground up for an international NGO supporting children in Cairo. Worked with teams across Copenhagen and Nairobi, coordinating delivery through weekly agile check-ins.",
        links: [{ href: "https://lotusbuds.dk/", label: "Lotus Buds" }],
        image: "/projects/lotusbuds.jpg",
        available: true,
    },
    {
        id: 3,
        name: "Friends of NTA",
        role: "Volunteer Consultant",
        description:
            "Helped optimise a fundraising strategy that supported a $25K annual jog-a-thon for Chicago public schools. Introduced a zero-fee donation platform and developed practical Google Ad Grants documentation to simplify digital fundraising.",
        links: [{ href: "https://www.friendsofnta.org/", label: "Friends of NTA" }],
        image: "/projects/fnta.jpg",
        available: true,
    },
    {
        id: 4,
        name: "Averitte House",
        role: "Volunteer Consultant",
        description:
            "Helped an emerging San Diego nonprofit establish a practical digital marketing and outreach approach. Developed a Google Ad Grants implementation framework that made digital outreach more manageable with limited technical resources.",
        links: [{ href: "https://averittehouse.org/", label: "Averitte House" }],
        image: "/projects/averittehouse.jpg",
        available: true,
    },
];
