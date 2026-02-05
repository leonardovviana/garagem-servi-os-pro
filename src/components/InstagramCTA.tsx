import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export function InstagramCTA() {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container px-4">
        <motion.a
          href="https://instagram.com/garagemservicos"
          target="_blank"
          rel="noopener noreferrer"
          className="block glass-card rounded-2xl p-8 text-center group hover:glow-gold transition-all duration-500"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center"
            whileHover={{ rotate: 5 }}
          >
            <Instagram className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-2 uppercase">
            Acompanhe nosso trabalho
          </h3>
          
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gold-gradient mb-3">
            SIGA NO INSTAGRAM
          </h2>
          
          <p className="text-muted-foreground text-sm mb-4">
            Veja nossos projetos, bastidores e novidades
          </p>

          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            @garagemservicos
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.a>
      </div>
    </motion.section>
  );
}
