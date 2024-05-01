import {
  adias,
  aflouat,
  angular,
  aws,
  backend,
  brahim,
  cocus,
  creator,
  css,
  docker,
  elastic,
  git,
  html,
  itroad,
  java,
  jenkins,
  k8s,
  mobile,
  mouls,
  mytower,
  postgres,
  reactjs,
  sopra,
  spring,
  typescript,
  web,
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

const info = {
  name: "Brahim",
  about:
    "I'm an accomplished Full-Stack Engineer and Cybersecurity Specialist with more than five years of experience in crafting enterprise level applications. I possess deep expertise in OOP, Java, Spring, and I'm skilled in Angular, TypeScript, and Golang. I had led numerous projects, focusing on platform development, solution migration, and testing. I'm also a certified Scrum Foundation Professional, Kubernetes Administrator, and Java 11 Oracle Professional, highlighting my commitment to agile practices and technology mastery. I stand ready to bring my diverse skill set and innovative approach to forward-thinking teams.",
};

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps & Cloud",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "ElasticSearch",
    icon: elastic,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Kubernetes",
    icon: k8s,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "git",
    icon: git,
  },
];
export interface ExperienceType {
  title?: string;
  company_name?: string;
  icon?: string;
  iconBg?: string;
  date?: string;
  points?: string[];
}
const experiences: ExperienceType[] = [
  {
    title: "Full stack Developer",
    company_name: "Adias",
    icon: adias,
    iconBg: "#383E56",
    date: "Aug 2019 - Mars 2021",
    points: [
      "Transitioned to a microservice architecture to improve domain separation and operation automation across a multilingual team.",
      "Leveraged Kubernetes and Kafka for scalable service orchestration and reliable event sourcing.",
      "Developed compliance, classification, and management modules for international trade operations.",
      "Enhanced system reliability with NgRx state management and comprehensive unit testing.",
    ],
  },
  {
    title: "Team Lead",
    company_name: "MyTower",
    icon: mytower,
    iconBg: "#fff",
    date: "Mars 2021 - Feb 2022",
    points: [
      "Designed and developed a Transport Management System for shippers.",
      "Conducted code and design reviews.",
      "Developed custom Spring starters.",
    ],
  },
  {
    title: "Cloud Developer",
    company_name: "Cocus Portugal",
    icon: cocus,
    iconBg: "#383E56",
    date: "Feb 2022 - Oct 2023",
    points: [
      "Responsible for designing, creating, and maintaining cloud components for telecom solutions deployment using AWS CDK and Terraform.",
      "Involved in Golang binary implementation.",
      "Contributed to telecom solutions' deployment and maintenance.",
    ],
  },
  {
    title: "Tech Lead",
    company_name: "IT Road",
    icon: itroad,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Assisted in project restructuring for improved organization and efficiency.",
      "Implemented CI/CD and established a Software Factory process for streamlined development.",
      "Conducted technical assessments for new employee evaluations.",
    ],
  },
  {
    title: "Senior Engineer",
    company_name: "Sopra Steria",
    icon: sopra,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "Maintained and migrated legacy applications to modern platforms.",
      "Developed new features for an insurance system.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Brahim, an outstanding Technical Lead, effectively supports and unlocks potential in both Front End and Back End developers. His ambition and technical prowess are notable. I strongly endorse him for his consistent supportiveness.",
    name: "Brahim",
    designation: "SDE",
    company: "IT Road",
    image: brahim,
  },
  {
    testimonial:
      "Brahim stands out for his kindness and professionalism. His proactive approach consistently leads to exceptional outcomes, making him highly recommendable.",
    name: "Aflouat",
    designation: "PM",
    company: "MyTower",
    image: aflouat,
  },
  {
    testimonial:
      "During our time at ADIAS, Brahim excelled in analysis, algorithms, data modeling, and design patterns. His leadership and teamwork skills are commendable. I wholeheartedly recommend him.",
    name: "Moulay",
    designation: "SDE",
    company: "Adias",
    image: mouls,
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { experiences, info, services, technologies, testimonials };
