import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-6 right-6 z-50 flex gap-4 lg:hidden"
    >
      {/* Mobile only nav since desktop layout is a fixed grid */}
      <a href="#projects" className="text-[10px] uppercase tracking-widest text-muted">Projects</a>
      <a href="#contact" className="text-[10px] uppercase tracking-widest text-muted">Contact</a>
    </motion.nav>
  );
}
