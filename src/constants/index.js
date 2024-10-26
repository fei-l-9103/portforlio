import {
  frontend,
  backend,
  ux,
  prototyping,
  angular,
  aws,
  css,
  git,
  graphql,
  javascript,
  mongodb,
  next,
  nodejs,
  postgresql,
  python,
  reactjs,
  tailwind,
  typescript,
  DirecTV,
  healthtap,
  pandora_insurance,
  prodigy_education,
  thrive_market,
  directv,
  mil,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];
const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "Nextjs",
    icon: next,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Team Lead",
    company_name: "DirecTV",
    icon: directv,
    iconBg: "#333333",
    date: "May 2022 - Sep 2024",
    description: [],
  },
  {
    title: "Senior Full Stack Engineer",
    company_name: "ITCS",
    icon: microverse,
    iconBg: "#333333",
    date: "Nov 2015 - Apr 2022",
    description: [],
  },
  {
    title: "Software Engineer",
    company_name: "The MIL Corporation",
    icon: mil,
    iconBg: "#333333",
    date: "Nov 2013 - Oct 2015",
    description: [],
  },
];

const projects = [
  {
    id: "project-1",
    name: "DirecTV",
    description:
      "A streaming app that lets users watch live TV, on-demand shows, and DVR content on their devices anytime, anywhere.",
    image: DirecTV,
  },
  {
    id: "project-2",
    name: "HealthTap",
    description:
      "A health app that connects users with doctors for real-time communication through audio, text, and video, providing instant access to medical advice and care from anywhere.",
    image: healthtap,
  },
  {
    id: "project-3",
    name: "Pandora Insurance",
    description:
      "An insurance app that offers users quick access to insurance quotes, policy management, and claim support, making it easy to handle all insurance needs in one place.",
    image: pandora_insurance,
  },
  {
    id: "project-4",
    name: "Thrive Market",
    description: `A shopping app that provides members with access to healthy, organic, and sustainable groceries at discounted prices, delivered right to their door.`,
    image: thrive_market,
  },
  {
    id: "project-5",
    name: "Prodigy Education",
    description:
      "An interactive learning app that uses game-based methods to help students master math and other subjects, making education engaging and fun for kids.",
    image: prodigy_education,
  },
];

export { services, technologies, experiences, projects };
