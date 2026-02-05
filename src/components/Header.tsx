import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="container flex h-[72px] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Garagem Serviços" className="h-[56px] w-auto" />
          <span className="sr-only">Garagem Serviços</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span className="hidden sm:inline">Afogados da Ingazeira-PE</span>
          <span className="sm:hidden">PE</span>
        </div>
      </div>
    </motion.header>
  );
}
