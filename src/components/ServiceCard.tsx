import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Service, generateWhatsAppLink } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());

  const handleOptionToggle = (optionId: string, optionLabel: string) => {
    setSelectedOptions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(optionLabel)) {
        newSet.delete(optionLabel);
      } else {
        newSet.add(optionLabel);
      }
      return newSet;
    });
  };

  const handleWhatsAppClick = () => {
    const link = generateWhatsAppLink(service.name, Array.from(selectedOptions));
    window.open(link, "_blank");
  };

  const Icon = service.icon;
  const hasSelections = selectedOptions.size > 0;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value={service.id}
        className="border border-border rounded-lg bg-card overflow-hidden transition-all hover:border-primary/50"
      >
        <AccordionTrigger className="px-4 py-5 hover:no-underline group">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:shadow-gold transition-shadow">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-sm uppercase tracking-wide text-foreground">
                {service.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {service.options.length} opções disponíveis
              </p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-5">
          <div className="space-y-3 pt-2">
            {service.options.map((option) => (
              <label
                key={option.id}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all",
                  "border border-border hover:border-primary/40 hover:bg-secondary/50",
                  selectedOptions.has(option.label) && "border-primary bg-primary/5"
                )}
              >
                <Checkbox
                  id={option.id}
                  checked={selectedOptions.has(option.label)}
                  onCheckedChange={() => handleOptionToggle(option.id, option.label)}
                  className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <span className="text-sm text-foreground flex-1">{option.label}</span>
              </label>
            ))}
          </div>

          {hasSelections && (
            <Button
              onClick={handleWhatsAppClick}
              className="w-full mt-5 h-12 text-sm font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicitar Orçamento no WhatsApp
            </Button>
          )}

          {hasSelections && (
            <p className="text-center text-xs text-muted-foreground mt-2">
              {selectedOptions.size} {selectedOptions.size === 1 ? "item selecionado" : "itens selecionados"}
            </p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
