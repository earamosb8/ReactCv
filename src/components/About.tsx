import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[11px] uppercase tracking-[3px] text-zinc-700 font-bold">About Me</h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[14px] leading-relaxed text-zinc-400"
      >
        Based in Colombia, I specialize in crafting high-performance web architectures with a focus on clean code and intuitive user experiences. Passionate about bridging design and engineering.
      </motion.p>
    </div>
  );
}
