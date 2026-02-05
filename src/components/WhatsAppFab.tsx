import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/services";

interface WhatsAppFabProps {
  hidden?: boolean;
}

export function WhatsAppFab({ hidden = false }: WhatsAppFabProps) {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  if (hidden) return null;

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Abrir WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg glow-gold"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.button>
  );
}
