import { motion } from 'motion/react';

export default function Contact() {
  const links = [
    { label: 'GITHUB', url: 'https://github.com/earamosb8', value: 'earamosb8' },
    { label: 'LINKEDIN', url: 'https://www.linkedin.com/in/earamosb8/', value: 'earamosb8' },
    { label: 'EMAIL', url: 'mailto:earamosb8@gmail.com', value: 'earamosb8@gmail.com' },
    { label: 'TEL', url: 'tel:+573113629316', value: '+57 3113629316' },
  ];

  return (
    <div id="contact" className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:h-[60px] border-t border-border-dark flex flex-col lg:flex-row items-start lg:items-center px-10 py-6 lg:py-0 justify-between bg-paper z-20 gap-4 w-full">
      {links.map((link, idx) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + (idx * 0.1) }}
          className="flex items-center gap-2 font-mono text-[11px] text-muted tracking-tighter"
        >
          <span className="opacity-50">{link.label}:</span>
          <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">
            {link.value}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
