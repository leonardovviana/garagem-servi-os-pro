import wheel1 from "@/assets/portfolio/rodas1.png";
import welding1 from "@/assets/portfolio/solda.png";
import heroImage from "@/assets/portfolio/welding-1.jpg";
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
                
                <a href="#portfolio" className="text-sm font-semibold text-muted-foreground hover:text-white flex items-center gap-2 transition-colors">
                  Ver portfólio no site <ArrowRight className="w-4 h-4" />
                </a>
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
                  {/* Header */}
                  <div className="h-14 border-b border-border flex items-center px-4 justify-between bg-black/50 backdrop-blur-md sticky top-0 z-10">
                    <span className="font-bold text-xs">garagemservicos</span>
                    <Instagram className="w-4 h-4" />
                  </div>
                  
                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-0.5 p-0.5 overflow-hidden">
                     <img src={welding1} className="aspect-square object-cover" alt="Post" />
                     <img src={wheel1} className="aspect-square object-cover" alt="Post" />
                     <img src={heroImage} className="aspect-square object-cover col-span-2" alt="Post" />
                     <div className="aspect-square bg-zinc-800 flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">+ posts</span>
                     </div>
                     <div className="aspect-square bg-zinc-900" />
                  </div>
                  
                  {/* Fake buttons */}
                  <div className="mt-auto p-4 flex justify-between text-zinc-500">
                    <div className="w-5 h-5 rounded-full bg-zinc-700" />
                    <div className="w-5 h-5 rounded-full bg-zinc-700" />
                    <div className="w-5 h-5 rounded-full bg-zinc-700" />
                  </div>
                </div>
             </motion.div>

             {/* Floating Elements */}
             <motion.div 
               className="absolute -top-10 -right-10 md:right-10 w-24 h-24 bg-gradient-to-br from-primary to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 z-20 border border-white/10"
               initial={{ scale: 0, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.6, type: "spring" }}
             >
                <Smartphone className="w-10 h-10 text-white" />
             </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
