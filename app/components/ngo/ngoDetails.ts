export type NgoProps = {
  id: number;
  name: string;
  role: string;
  description: string;
  link: string;      // leave "" if none yet
  linkLabel?: string; // e.g. "LinkedIn Feature", defaults to "Learn more"
  image: string;      // path in /public, e.g. "/ngo/taproot.jpg"
  available: boolean; // false hides the link icon (like your ProjectCard)
};

export const ngoWork: NgoProps[] = [
  {
    id: 1,
    name: "Taproot Foundation",
    role: "Pro Bono Volunteer",
    description:
      "Supported nonprofits across San Diego, Chicago, and Copenhagen with digital strategy, fundraising systems, and website transformation. Helped teams adopt practical, low-cost digital solutions and implementation roadmaps. Featured by Taproot Foundation during National Volunteer Week.",
    link: "", // TODO: paste Taproot / LinkedIn feature link
    linkLabel: "National Volunteer Week Feature",
    image: "/ngo/taproot.jpg", // TODO: add image to /public/ngo/
    available: false, // flip to true once link is added
  },
  {
    id: 2,
    name: "Lotus Buds",
    role: "Developer (Volunteer)",
    description:
      "Built a GDPR-compliant website from the ground up for an international NGO supporting children in Cairo. Worked with teams across Copenhagen and Nairobi, coordinating delivery through weekly agile check-ins.",
    link: "", // TODO: paste Lotus Buds link
    image: "/ngo/lotusbuds.jpg", // TODO: add image
    available: false,
  },
  {
    id: 3,
    name: "Friends of National Teachers Academy",
    role: "Volunteer Consultant",
    description:
      "Helped optimise a fundraising strategy that supported a $25K annual jog-a-thon for Chicago public schools. Introduced a zero-fee donation platform and developed practical Google Ad Grants documentation to simplify digital fundraising.",
    link: "", // TODO: paste organisation link
    image: "/ngo/fnta.jpg", // TODO: add image
    available: false,
  },
  {
    id: 4,
    name: "Averitte House",
    role: "Volunteer Consultant",
    description:
      "Helped an emerging San Diego nonprofit establish a practical digital marketing and outreach approach. Developed a Google Ad Grants implementation framework that made digital outreach more manageable with limited technical resources.",
    link: "", // TODO: paste organisation link
    image: "/ngo/averittehouse.jpg", // TODO: add image
    available: false,
  },
];
