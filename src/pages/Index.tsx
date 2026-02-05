import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { services } from "@/data/services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container pb-24">
        <Hero />

        <section className="px-4" aria-label="Serviços disponíveis">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
