import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Star, Trophy, Users, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";

// Tenta carregar a imagem, fallback para cor sólida se não existir
import frenteBg from "@/assets/frente.jpeg";

const stats = [
  {
    id: 1,
    label: "Anos de Experiência",
    value: 15,
    suffix: "+",
    icon: Trophy,
    delay: 0.2,
  },
  {
    id: 2,
    label: "Projetos Entregues",
    value: 1250,
    suffix: "+",
    icon: Wrench,
    delay: 0.4,
  },
  {
    id: 3,
    label: "Clientes Satisfeitos",
    value: 100,
    suffix: "%",
    icon: Users,
    delay: 0.6,
  },
  {
    id: 4,
    label: "Avaliação Média",
    value: 5,
    suffix: ".0",
    icon: Star,
    delay: 0.8,
  },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden bg-black/50">
      {/* Parallax Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80 z-10" />
        <img 
          src={frenteBg} 
          alt="Oficina Garagem Serviços" 
          className="w-full h-full object-cover object-center opacity-30 grayscale blur-[2px]"
        />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, isInView }: { stat: any, isInView: boolean }) {
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
  
  useEffect(() => {
    if (isInView) {
      spring.set(stat.value);
    }
  }, [isInView, stat.value, spring]);

  return (
    <div className="flex flex-col items-center text-center group">
      <motion.div 
        initial={{ scale: 0, rotate: -45 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
        transition={{ duration: 0.6, delay: stat.delay, type: "spring" }}
        className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-card to-background border border-border shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] group-hover:border-primary/50 transition-all duration-500"
      >
        <stat.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white mb-2 tracking-tighter flex justify-center items-center">
          <motion.span>{display}</motion.span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-yellow-600 ml-1">{stat.suffix}</span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-semibold group-hover:text-white transition-colors duration-300">
          {stat.label}
        </p>
      </motion.div>
    </div>
  );
}
