import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { generateWhatsAppLink } from "@/data/services";

interface StickyCTAProps {
  totalSelections: number;
  selectedServices: Map<string, Set<string>>;
  serviceNames: Map<string, string>;
}

export function StickyCTA({ totalSelections, selectedServices, serviceNames }: StickyCTAProps) {
  const handleClick = () => {
    // Build message with all selected services
    const messageParts: string[] = [];
    
    selectedServices.forEach((options, serviceId) => {
      if (options.size > 0) {
        const serviceName = serviceNames.get(serviceId) || serviceId;
        messageParts.push(`*${serviceName}*:\n${Array.from(options).map(opt => `  - ${opt}`).join('\n')}`);
      }
    });

    const message = `Olá, GARAGEM SERVIÇOS! Gostaria de orçar os seguintes serviços:\n\n${messageParts.join('\n\n')}\n\nAguardo retorno.`;
    
    window.open(`https://wa.me/5587999274678?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {totalSelections > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-safe"
        >
          <div className="container max-w-lg mx-auto">
            <motion.button
              onClick={handleClick}
              whileTap={{ scale: 0.98 }}
              className="w-full h-14 rounded-xl bg-gold-gradient text-primary-foreground font-display text-sm tracking-wide font-semibold flex items-center justify-center gap-3 pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>SOLICITAR ORÇAMENTO</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-foreground/20 text-xs">
                {totalSelections}
              </span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
