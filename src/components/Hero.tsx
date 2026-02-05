import { motion } from "framer-motion";
import heroImage from "@/assets/hero-welding.jpg";

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Faíscas de solda industrial" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg"
        >
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gold-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SOLUÇÕES EM METAL
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 font-light mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Recuperação Automotiva & Industrial
          </motion.p>
          
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Selecione os serviços abaixo para montar seu orçamento.
          </motion.p>
        </motion.div>

        {/* Decorative shimmer line */}
        <motion.div 
          className="mt-8 h-px w-32 bg-gradient-to-r from-primary via-primary/50 to-transparent shimmer"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </section>
  );
}
