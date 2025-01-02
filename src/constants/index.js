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
  OpenLoop,
  Turbotax,
  AmazonHiring,
  directv,
  awsLogo,
  openloop,
  intuit,
  carleton,
  hkust,
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
    title: "Lead Software Engineer",
    company_name: "DirecTV",
    icon: directv,
    iconBg: "#333333",
    date: "2022",
    description: [],
  },
  {
    title: "Staff Software Engineer",
    company_name: "OpenLoop",
    icon: openloop,
    iconBg: "#333333",
    date: "2021",
    description: [],
  },
  {
    title: "Senior Software Engineer",
    company_name: "OpenLoop",
    icon: openloop,
    iconBg: "#333333",
    date: "2018",
    description: [],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Intuit",
    icon: intuit,
    iconBg: "#333333",
    date: "2016",
    description: [],
  },
  {
    title: "Software Development Engineer",
    company_name: "Amazon Web Services",
    icon: awsLogo,
    iconBg: "#333333",
    date: "2013",
    description: [],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Amazon Web Services",
    icon: awsLogo,
    iconBg: "#333333",
    date: "2012",
    description: [],
  },
  {
    title: "Master Degree",
    company_name: "Carleton University",
    icon: carleton,
    iconBg: "#333333",
    date: "2010",
    description: [],
  },
  {
    title: "Bachelor Degree",
    company_name: "Hong Kong University of Science and Technology",
    icon: hkust,
    iconBg: "#333333",
    date: "2006",
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
    name: "OpenLoop",
    description:
      "A health app that connects users with doctors for real-time communication through audio, text, and video, providing instant access to medical advice and care from anywhere.",
    image: OpenLoop,
  },
  {
    id: "project-3",
    name: "Intuit TurboTax",
    description:
      "A user-friendly tax preparation software that simplifies filing by providing guided assistance and maximizing tax refunds.",
    image: Turbotax,
  },
  {
    id: "project-4",
    name: "Amazon Jobs",
    description:
      "A hiring platform where individuals can explore and apply for various roles across Amazon's global teams, industries, and locations.",
    image: AmazonHiring,
  },
];

export { services, technologies, experiences, projects };
