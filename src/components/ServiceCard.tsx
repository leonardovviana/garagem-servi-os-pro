import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SelectablePill } from "./SelectablePill";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

interface ServiceCardProps {
  service: Service;
  index: number;
  onSelectionChange: (serviceId: string, selections: Set<string>) => void;
}

export function ServiceCard({ service, index, onSelectionChange }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [customText, setCustomText] = useState<string>("");

  const handleOptionToggle = (optionLabel: string, optionId: string) => {
    setSelectedOptions((prev) => {
      const newSet = new Set(prev);
      
      // If toggling "Outros"
      if (optionId === "outros") {
        if (newSet.has("Outros")) {
          // Remove "Outros" and clear custom text
          newSet.delete("Outros");
          setCustomText("");
        } else {
          // Add "Outros"
          newSet.add("Outros");
        }
      } else {
        // Regular option toggle
        if (newSet.has(optionLabel)) {
          newSet.delete(optionLabel);
        } else {
          newSet.add(optionLabel);
        }
      }
      
      onSelectionChange(service.id, newSet);
      return newSet;
    });
  };

  const handleCustomTextChange = (text: string) => {
    setCustomText(text);
    setSelectedOptions((prev) => {
      const newSet = new Set(prev);
      
      // Remove old "Outros: ..." entries
      const otherEntries = Array.from(newSet).filter(item => item.startsWith("Outros:"));
      otherEntries.forEach(entry => newSet.delete(entry));
      
      // Add new one if text is not empty
      if (text.trim()) {
        newSet.add(`Outros: ${text.trim()}`);
      } else if (newSet.has("Outros")) {
        // Keep the simple "Outros" if just that is selected
        // (already there from toggle)
      }
      
      onSelectionChange(service.id, newSet);
      return newSet;
    });
  };

  const Icon = service.icon;
  const hasSelections = selectedOptions.size > 0;
  const isOutrosSelected = selectedOptions.has("Outros") || Array.from(selectedOptions).some(item => item.startsWith("Outros:"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className={cn(
          "glass-card rounded-xl overflow-hidden transition-all duration-500",
          isExpanded && "glass-card-hover glow-gold"
        )}
        layout
      >
        {/* Card Header */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-5 py-6 flex items-center justify-between group"
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300",
                isExpanded 
                  ? "bg-primary/20 border border-primary/50 glow-gold" 
                  : "bg-secondary/50 border border-border/50 group-hover:border-primary/30"
              )}
              animate={{ 
                scale: isExpanded ? 1.05 : 1,
              }}
            >
              <Icon className={cn(
                "h-7 w-7 transition-colors duration-300",
                isExpanded ? "text-primary" : "text-muted-foreground group-hover:text-primary"
              )} />
            </motion.div>
            
            <div className="text-left">
              <h3 className={cn(
                "font-display text-base font-semibold tracking-wide transition-colors duration-300",
                isExpanded ? "text-gold-gradient" : "text-foreground"
              )}>
                {service.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {hasSelections 
                  ? `${selectedOptions.size} ${selectedOptions.size === 1 ? "item selecionado" : "itens selecionados"}`
                  : `${service.options.length} opções`
                }
              </p>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
              isExpanded ? "bg-primary/20" : "bg-secondary/50"
            )}
          >
            <ChevronDown className={cn(
              "h-5 w-5 transition-colors",
              isExpanded ? "text-primary" : "text-muted-foreground"
            )} />
          </motion.div>
        </motion.button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-6">
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />
                
                {/* Pills Grid */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.options.map((option, optIndex) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: optIndex * 0.05 }}
                    >
                      <SelectablePill
                        label={option.label}
                        selected={option.id === "outros" ? isOutrosSelected : selectedOptions.has(option.label)}
                        onToggle={() => handleOptionToggle(option.label, option.id)}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Custom Text Input for "Outros" */}
                <AnimatePresence>
                  {isOutrosSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <label className="text-xs text-muted-foreground block mb-2">
                          Descreva o serviço desejado:
                        </label>
                        <Input
                          type="text"
                          placeholder="Ex: Solda personalizada, peça especial, etc..."
                          value={customText}
                          onChange={(e) => handleCustomTextChange(e.target.value)}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
