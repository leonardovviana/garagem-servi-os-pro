import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card border-b border-border/30 h-[72px]" : "bg-transparent border-none h-[88px]"}`}
    >
      <div className="container flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Garagem Serviços" 
            className={`transition-all duration-300 ${isScrolled ? "h-[50px]" : "h-[64px] drop-shadow-lg"}`} 
          />
          <span className="sr-only">Garagem Serviços</span>
        </div>
        <div className={`flex items-center gap-1.5 text-xs transition-colors duration-300 px-3 py-1.5 rounded-full ${isScrolled ? "text-muted-foreground" : "text-white bg-black/30 backdrop-blur-sm border border-white/10"}`}>
          <MapPin className="h-3.5 w-3.5 text-primary" />
          <span className="hidden sm:inline font-medium">Afogados da Ingazeira-PE</span>
          <span className="sm:hidden font-medium">PE</span>
        </div>
      </div>
    </motion.header>
  );
}
