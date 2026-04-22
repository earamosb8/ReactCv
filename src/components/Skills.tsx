import { motion } from 'motion/react';
import { SKILLS } from '../types';

export default function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[11px] uppercase tracking-[3px] text-zinc-700 font-bold">Technical Stack</h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="px-3 py-1.5 bg-card-bg border border-border-dark text-[11px] uppercase tracking-wider text-zinc-400 font-medium"
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
