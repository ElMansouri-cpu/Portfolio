import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ghassen Mansouri",
  initials: "GM",
  url: "https://dillion.io",
  location: "Tunis,Tunisia",
  locationLink: "https://www.google.com/maps/place/tunisia",
  description:
    "Software Engineer and tech enthusiast .",
  summary:"A Software Engineer with 3+ years of experience specializing in full-stack web development, primarily using the MERN stack.Throughout my career, I’ve had the opportunity to work with dynamic startups, where small, agile teams allowed me to take on a variety of roles and make impactful decisions in the development of web applications. This experience has honed my ability to deliver high-quality, efficient, and scalable solutions, while also collaborating closely with cross-functional teams to drive product growth and innovation.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Flask",
 
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ghassen.mansouri@proton.me",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ElMansouri-cpu",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ghassen-mansouri",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Quantech solution partners",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/qsp.jpg",
      start: "Apr 2023",
      end: "now",
      description:
        "Implemented an analytical app with a front-end built using Next.js, Redux, and Storybook, while developing the back-end server with Flask and a PostgreSQL database. Dockerized the entire environment and set up Redis for efficient caching and messaging between background workers and the back-end, enabling real-time, high-performance backtesting. Automated the CI/CD pipeline with GitHub Actions to streamline integration, testing, and deployment.",
    },
    {
      company: "Wealzy",
      badges: [],
      href: "https://wealzy.immo/",
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/wealzy.png",
      start: "Sep 2021",
      end: "Mars 2023",
      description:
        "Participated in the development of a real estate investment app, utilizing React for the front-end and contributing to the creation of back-end APIs using Express and MongoDB for the database. Dockerized the entire app to streamline deployment, managed the release process, and implemented automated CI/CD pipelines using GitLab CI for efficient integration and delivery.",
    },
   
  ],
  education: [
    {
      school: "The Private Higher School of Engineering and Technology (ESPRIT)",
      href: "https://esprit.tn/",
      degree: "National Diploma in Software Engineering ",
      logoUrl: "/favicon.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Higher Institute of Computer Science (ISI) ",
      href: "http://www.isi.rnu.tn/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/isi.png",
      start: "2015",
      end: "2018",
    },
   
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },

  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },


  ],
} as const;
