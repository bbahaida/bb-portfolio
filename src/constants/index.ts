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
  tailwind,
  nodejs,
  git,
  docker,
  adias,
  mytower,
  cocus,
  itroad,
  sopra,
  carrent,
  jobit,
  tripguide,
  threejs,
  postgres,
  java,
  spring,
  angular,
  aws,
  k8s,
  helm,
  elastic,
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
    "I'm an accomplished Full-Stack Engineer and Cybersecurity Specialist with four years of experience in crafting Java applications. I possess deep expertise in OOP, Java, Spring, and I'm skilled in Angular, TypeScript, and Golang. I had led numerous projects, focusing on platform development, solution migration, and testing. I'm also a certified Scrum Foundation Professional, Kubernetes Administrator, and Oracle Professional, highlighting my commitment to agile practices and technology mastery. I stand ready to bring my diverse skill set and innovative approach to forward-thinking teams.",
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
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
    name: "Helm",
    icon: helm,
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { info, services, technologies, experiences, testimonials, projects };
