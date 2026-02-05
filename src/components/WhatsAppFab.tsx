import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/services";

export function WhatsAppFab() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 animate-pulse-gold"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}
