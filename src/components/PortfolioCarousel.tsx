import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import portfolio images
import welding1 from "@/assets/portfolio/welding-1.jpg";
import wheel1 from "@/assets/portfolio/wheel-1.jpg";
import metalwork1 from "@/assets/portfolio/metalwork-1.jpg";
import gate1 from "@/assets/portfolio/gate-1.jpg";
import trailer1 from "@/assets/portfolio/trailer-1.jpg";

interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: "1", image: welding1, title: "Solda Especializada", category: "Serralheria" },
  { id: "2", image: wheel1, title: "Roda Esportiva Recuperada", category: "Recuperação de Roda" },
  { id: "3", image: metalwork1, title: "Estrutura Metálica", category: "Serralheria" },
  { id: "4", image: gate1, title: "Portão Automático", category: "Serralheria" },
  { id: "5", image: trailer1, title: "Reboque Personalizado", category: "Fabricação de Reboque" },
];

export function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <motion.section 
      className="py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-2 uppercase">
            Portfólio
          </h3>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gold-gradient">
            TRABALHOS REALIZADOS
          </h2>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 pl-4"
              >
                <motion.div
                  className={cn(
                    "relative overflow-hidden rounded-2xl glass-card transition-all duration-500",
                    selectedIndex === index && "glow-gold"
                  )}
                  animate={{
                    scale: selectedIndex === index ? 1 : 0.9,
                    opacity: selectedIndex === index ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block text-xs text-primary font-medium mb-1 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h4 className="font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="container px-4 mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className={cn(
                "w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all",
                canScrollPrev ? "text-foreground hover:glow-gold" : "text-muted-foreground/50"
              )}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className={cn(
                "w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all",
                canScrollNext ? "text-foreground hover:glow-gold" : "text-muted-foreground/50"
              )}
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  selectedIndex === index 
                    ? "w-6 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
