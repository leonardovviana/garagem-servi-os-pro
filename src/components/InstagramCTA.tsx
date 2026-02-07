import instagramMockup from "@/assets/instagram.jpeg";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Smartphone } from "lucide-react";

export function InstagramCTA() {
  return (
    <motion.section
      className="py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform scale-110 z-0" />
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Instagram className="w-3 h-3" />
                <span>Bastidores e Novidades</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ACOMPANHE O <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737]">
                  DIA A DIA
                </span>
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Fique por dentro dos nossos projetos de restauração mais recentes, dicas de manutenção e o processo de transformação que realizamos.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                 <motion.a
                  href="https://instagram.com/garagemservicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                  Seguir no Instagram
                </motion.a>
                

              </div>
            </motion.div>
          </div>

          {/* Right Visuals - Phone Mockup Effect */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end perspective-1000">
             <motion.div 
               className="relative z-10 w-64 md:w-72 aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden"
               initial={{ rotateY: 15, rotateZ: -5, y: 50, opacity: 0 }}
               whileInView={{ rotateY: -10, rotateZ: 5, y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-zinc-800 rounded-b-xl z-20 w-32 mx-auto" />
                
                {/* Simulated Insta Feed */}
                <div className="w-full h-full bg-background overflow-hidden flex flex-col">

                  
                  {/* Grid */}
                  <div className="w-full h-full">
                    <img src={instagramMockup} className="w-full h-full object-cover" alt="Instagram Feed" />
                  </div>
                  
                  {/* Fake buttons */}
                  <div className="mt-auto p-4 flex justify-between text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-700" />
                    <div className="w-5 h-5 rounded-full bg-zinc-700" />
                    <div className="w-5 h-5 rounded-full bg-zinc-700" />
                  </div>
                </div>
             </motion.div>



          </div>

        </div>
      </div>
    </motion.section>
  );
}
