import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { InstagramCTA } from "@/components/InstagramCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { StickyCTA } from "@/components/StickyCTA";
import { services } from "@/data/services";

const Index = () => {
  const [selectedServices, setSelectedServices] = useState<Map<string, Set<string>>>(new Map());

  const handleSelectionChange = (serviceId: string, selections: Set<string>) => {
    setSelectedServices(prev => {
      const newMap = new Map(prev);
      if (selections.size === 0) {
        newMap.delete(serviceId);
      } else {
        newMap.set(serviceId, selections);
      }
      return newMap;
    });
  };

  const totalSelections = useMemo(() => {
    let total = 0;
    selectedServices.forEach(set => {
      total += set.size;
    });
    return total;
  }, [selectedServices]);

  const serviceNames = useMemo(() => {
    const map = new Map<string, string>();
    services.forEach(s => map.set(s.id, s.name));
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-32">
        <Hero />

        <section className="container px-4 -mt-8 relative z-10" aria-label="Serviços disponíveis">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="font-display text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">
              Selecione os serviços
            </h3>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                onSelectionChange={handleSelectionChange}
              />
            ))}
          </div>
        </section>

        <PortfolioCarousel />

        <InstagramCTA />

        <Footer />
      </main>

      <WhatsAppFab hidden={totalSelections > 0} />
      <StickyCTA 
        totalSelections={totalSelections} 
        selectedServices={selectedServices}
        serviceNames={serviceNames}
      />
    </div>
  );
};

export default Index;
