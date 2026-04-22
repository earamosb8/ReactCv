export interface Project {
  name: string;
  description: string;
  url: string;
  tech: 'React' | 'Angular';
}

export interface Skill {
  name: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    name: "React TodoList",
    description:
      "A task management application built with React.js, allowing users to manage their to-dos in a simple and intuitive way.",
    url: "https://earamosb8.github.io/React-TodoList/",
    tech: "React",
  },
  {
    name: "Weather Dashboard",
    description: "Real-time weather data visualization using OpenWeather API.",
    url: "https://github.com/earamosb8/react-weather",
    tech: "React",
  },
  {
    name: "Payment Date Tracker",
    description:
      "An Angular web application for registering users and their payment dates. ",
    url: "https://earamosb8.github.io/Control_payment-Angular/",
    tech: "Angular",
  },
  {
    name: "Angular TodoList",
    description:
      "A task management application built with Angular 16, allowing users to manage their to-dos with a clean and reactive interface.",
    url: "https://earamosb8.github.io/Angular-TodoList/",
    tech: "Angular",
  },
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Tailwind CSS", category: "Design" },
  { name: "Java", category: "Backend" },
  { name: "SQL / PlSQL", category: "Backend" },
  { name: "Git", category: "Tools" }
];
