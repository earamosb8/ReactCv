import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-[120px] h-[120px] bg-card-bg border border-border-dark flex items-center justify-center overflow-hidden"
      >
        <img
          src="fotoPerfil.jfif"
          alt="Eduardo Ramos"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            target.parentElement!.innerText = "[ Profile Photo ]";
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-[32px] font-bold tracking-tight leading-none">
          Eduardo Ramos
        </h1>
        <p className="text-[14px] text-muted mt-2 uppercase tracking-[2px]">
          Software Developer
        </p>
      </motion.div>
    </div>
  );
}
