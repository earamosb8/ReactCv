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
    name: "E-Commerce Platform",
    description: "A full-featured shopping experience built with React and Redux.",
    url: "https://github.com/earamosb8/react-ecommerce",
    tech: 'React'
  },
  {
    name: "Weather Dashboard",
    description: "Real-time weather data visualization using OpenWeather API.",
    url: "https://github.com/earamosb8/react-weather",
    tech: 'React'
  },
  {
    name: "Admin Panel Pro",
    description: "Complex enterprise-level dashboard built with Angular and Material UI.",
    url: "https://github.com/earamosb8/angular-admin",
    tech: 'Angular'
  },
  {
    name: "Task Management System",
    description: "Real-time collaboration tool with drag-and-drop features.",
    url: "https://github.com/earamosb8/angular-tasks",
    tech: 'Angular'
  }
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Tailwind CSS", category: "Design" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL / NoSQL", category: "Backend" },
  { name: "Git", category: "Tools" }
];
