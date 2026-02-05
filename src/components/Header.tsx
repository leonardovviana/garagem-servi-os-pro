import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <h1 className="font-display text-xl font-bold tracking-wider text-gold-gradient">
          GARAGEM SERVIÇOS
        </h1>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span className="hidden sm:inline">Afogados da Ingazeira-PE</span>
          <span className="sm:hidden">PE</span>
        </div>
      </div>
    </motion.header>
  );
}
