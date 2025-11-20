import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
}

export function Hero({ image, title, subtitle }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Museum Hero"
          className="h-full w-full object-cover opacity-90 scale-105 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1 px-3 mb-6 border border-white/30 rounded-full text-white text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
            Featured Exhibition
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 mix-blend-overlay">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 font-light leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-none rounded-none px-8 py-6 text-base tracking-wide">
              Reserve Tickets
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-base tracking-wide backdrop-blur-sm">
              View Exhibition <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
