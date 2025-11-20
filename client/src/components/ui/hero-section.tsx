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
    <section className="relative min-h-screen w-full overflow-hidden bg-card flex items-center pt-20">
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-12">
        
        {/* Text Content */}
        <div className="relative z-20 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
             <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 font-mono text-sm font-bold border-2 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
                COMING TO A CITY NEAR YOU
             </div>
             
             <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter text-foreground uppercase">
               {title.split(' ').map((word, i) => (
                 <span key={i} className="block">{word}</span>
               ))}
             </h1>
             
             <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mb-10 font-sans font-medium leading-tight">
               {subtitle}
             </p>
             
             <div className="flex flex-wrap gap-4">
               <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-black rounded-none px-8 py-8 text-xl font-bold tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                 RSVP NOW
               </Button>
               <Button size="lg" variant="outline" className="bg-white text-foreground border-2 border-black hover:bg-muted rounded-none px-8 py-8 text-xl font-bold tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                 READ STORIES
               </Button>
             </div>
          </motion.div>
        </div>

        {/* Graphic/Image Area */}
        <div className="relative z-10 order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">
           <div className="relative w-full h-full">
              {/* Abstract Shapes Background */}
              <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-primary rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-1/2 h-1/2 bg-secondary rounded-full opacity-20 blur-3xl"></div>
              
              {/* Main Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full border-4 border-black bg-white p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              >
                <img
                  src={image}
                  alt="Hero Visual"
                  className="h-full w-full object-cover border-2 border-black hover:scale-[1.02] transition-all duration-500"
                />
                
                {/* Sticker Elements */}
                <div className="absolute -top-6 -right-6 bg-yellow-400 text-black font-hand font-bold text-xl px-6 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                  Pizza + Code!
                </div>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}
