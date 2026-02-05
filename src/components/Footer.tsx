import { MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      className="glass-card border-t border-border/30 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container py-10 px-4">
        <h3 className="font-display text-xl font-bold text-gold-gradient mb-8 text-center tracking-wide">
          GARAGEM SERVIÇOS
        </h3>

        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <motion.div 
            className="flex items-start gap-4 glass-card rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Endereço</p>
              <p>Rua Manoel Virgínio Sobrinho, 2023 - Padre Pedro Pereira</p>
              <p>Afogados da Ingazeira - PE</p>
              <p>Próximo ao trevo na saída para Carnaíba</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-4 glass-card rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div className="text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Horário</p>
              <p>Segunda a Sexta: 7h às 17h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-start gap-4 glass-card rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Contato</p>
              <p>(87) 99927-4678</p>
              <p className="text-xs mt-1 text-muted-foreground/70">WhatsApp disponível</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Garagem Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
