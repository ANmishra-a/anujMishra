import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  all_is_well,
  Pesto,
  Dice_game,
  currrent,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "All is well",
    icon: all_is_well,
    iconBg: "#000000",
    date: "October 2022 - January 2023",
    points: [
      "Designed & developed a fitness application using Appsmith with PostgreSQL for helping users unlock their sports performance.",
      "Maintained a PostgreSQL database on Supabase and built admin apps using Appsmith.",
      "Explored and tested multiple databases technologies likely to be used in the production app.",
      "Built a responsive UI and carried out data fetching and data filtering using Vanilla JS as per the user requirements",
    ],
  },
  {
    title: "Developer Fellow",
    company_name: "Pesto",
    icon: Pesto,
    iconBg: "#000000",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Developed a feature-rich music platform called Rhythm that aims to provide users with a great browsing and listening experience.",
      "API Documentation with detailed information of all APIs used in the system",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Anuj is a passionate developer with a varied skill set across Front-end and Back-end technologies like HTML, CSS, JavaScript, and React JS. He does a great job at identifying issues and resolving them. He will be a great addition to any team working on building large-scale web applications. ",
    name: "Vatsalya Agarwal",
    designation: "Co-Founder",
    company: "GlamPlus",
    image:
      "https://media.licdn.com/dms/image/C5603AQGU4YOC_CErmw/profile-displayphoto-shrink_200_200/0/1622138853884?e=1686182400&v=beta&t=ZR3ShTckw4BP51BxEbrFVHuaoYKfHZJQbwrhEfH4OAg",
  },
];

const projects = [
  {
    name: "Rhythms",
    description:
      "Rhythms is a feature rich music platform. The main goal of this platform is to provide great music browsing and listening experience to the users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/pesto-students/rhythms-player--frontend-team1_vatsalya",
  },
  {
    name: "Swarmandala",
    description:
      "Swarmandala is a web application that offers a wide range of ragas, each with its own unique melodic structure, notes, and ornamentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: currrent,
    source_code_link: "https://github.com/ANmishra-a/swarmadala",
  },
  {
    name: "The Dice Game",
    description:
      "A simple but fun dice game, where the main objective is to score a 100 first. Try your luck and have fun. ",
    tags: [
      {
        name: "vanilla js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: Dice_game,
    source_code_link: "https://splendorous-pika-ff9ad6.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
