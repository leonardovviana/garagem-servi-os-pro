import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SelectablePillProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

export function SelectablePill({ label, selected, onToggle }: SelectablePillProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300",
        "text-sm font-medium",
        selected ? "pill-selected text-foreground" : "pill-unselected text-muted-foreground hover:text-foreground"
      )}
    >
      <motion.div
        initial={false}
        animate={{
          scale: selected ? 1 : 0,
          opacity: selected ? 1 : 0,
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
        className="flex items-center justify-center w-4 h-4 rounded-full bg-primary"
      >
        <Check className="w-3 h-3 text-primary-foreground" />
      </motion.div>
      
      <span className={cn(
        "transition-all duration-300",
        !selected && "ml-0"
      )}>
        {label}
      </span>

      {/* Glow effect when selected */}
      {selected && (
        <motion.div
          layoutId={`glow-${label}`}
          className="absolute inset-0 rounded-lg border border-primary/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  );
}
