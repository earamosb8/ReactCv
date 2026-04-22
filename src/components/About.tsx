import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[11px] uppercase tracking-[3px] text-zinc-700 font-bold">
        About Me
      </h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[14px] leading-relaxed text-zinc-400"
      >
        I am a technology professional with a comprehensive background that
        combines Systems Engineering, Information Systems Analysis and
        Development, and Electronics Technology. This multidisciplinary academic
        foundation allows me to understand technology from its physical
        architecture to its most complex software logic. My true passion lies in
        software development. I enjoy the process of transforming requirements
        into efficient, scalable, and high-impact solutions. I specialize in a
        stack that I consider the engine of large-scale enterprise applications:
        Java for the backend, Angular for creating modern and dynamic
        interfaces, and PL/SQL for precise and optimized data management.
      </motion.p>
    </div>
  );
}
