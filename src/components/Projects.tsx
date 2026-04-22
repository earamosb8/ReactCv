import { motion } from 'motion/react';
import { PROJECTS, Project } from '../types';

export default function Projects() {
  const reactProjects = PROJECTS.filter(p => p.tech === 'React');
  const angularProjects = PROJECTS.filter(p => p.tech === 'Angular');

  return (
    <div className="flex flex-col gap-12">
      {/* React Segment */}
      <section>
        <h2 className="text-[14px] uppercase tracking-[4px] border-b border-border-dark pb-3 mb-6 flex justify-between items-baseline">
          React Projects <span className="text-[10px] text-zinc-700 font-mono">/ 01</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reactProjects.map((project, idx) => (
            <ProjectCard key={`react-${project.name}`} project={project} index={idx} />
          ))}
        </div>
      </section>

      {/* Angular Segment */}
      <section>
        <h2 className="text-[14px] uppercase tracking-[4px] border-b border-border-dark pb-3 mb-6 flex justify-between items-baseline">
          Angular Projects <span className="text-[10px] text-zinc-700 font-mono">/ 02</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {angularProjects.map((project, idx) => (
            <ProjectCard key={`angular-${project.name}`} project={project} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <a 
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="p-5 border border-border-dark bg-card-bg hover:border-zinc-700 transition-colors group cursor-pointer h-full flex flex-col justify-between"
      >
        <div>
          <span className="text-[15px] font-bold text-zinc-200 block mb-2 tracking-tight group-hover:text-white transition-colors">
            {project.name}
          </span>
          <p className="text-[12px] text-zinc-500 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>
        <div className="text-[10px] text-zinc-700 uppercase tracking-widest group-hover:text-white transition-colors font-mono mt-auto">
          {project.url.replace('https://', '')}
        </div>
      </motion.div>
    </a>
  );
}
