import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button"; // Added import

const artworks = [
  {
    id: 1,
    title: "Ancestral Echoes",
    artist: "Marcus Thorne",
    year: "2024",
    imageKey: "bold_geometric_abstract_art",
    aspect: "aspect-[3/4]",
    tag: "Painting"
  },
  {
    id: 2,
    title: "Urban Rhythm",
    artist: "Sarah Jenkins",
    year: "2023",
    imageKey: "large_scale_colorful_abstract_painting",
    aspect: "aspect-square",
    tag: "Mixed Media"
  },
  {
    id: 3,
    title: "Manifesto",
    artist: "David Okonjo",
    year: "2024",
    imageKey: "typography_based_art_poster",
    aspect: "aspect-[4/3]",
    tag: "Print"
  },
  {
    id: 4,
    title: "Bronze Soul",
    artist: "Elena Ross",
    year: "2022",
    imageKey: "modern_bronze_and_wood_sculpture",
    aspect: "aspect-[3/4]",
    tag: "Sculpture"
  }
];

import geometricImg from "@assets/generated_images/bold_geometric_abstract_art.png";
import abstractImg from "@assets/generated_images/large_scale_colorful_abstract_painting.png";
import typoImg from "@assets/generated_images/typography_based_art_poster.png";
import sculptureImg from "@assets/generated_images/modern_bronze_and_wood_sculpture.png";

const images = {
  bold_geometric_abstract_art: geometricImg,
  large_scale_colorful_abstract_painting: abstractImg,
  typography_based_art_poster: typoImg,
  modern_bronze_and_wood_sculpture: sculptureImg
};

export function ArtworkGallery() {
  return (
    <section className="py-24 bg-background relative border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-4 -rotate-1">
              Curated Selection
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tighter">
              FRESH<br/>ACQUISITIONS
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center px-6 py-3 border-2 border-black font-bold uppercase tracking-wide bg-white hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            View Collection <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative ${
                index === 0 ? "lg:col-span-5" : 
                index === 1 ? "lg:col-span-7" : 
                index === 2 ? "lg:col-span-8" : "lg:col-span-4"
              }`}
            >
              <div className={`relative overflow-hidden w-full ${art.aspect} border-2 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300`}>
                <div className="absolute top-4 left-4 z-10 bg-white border border-black px-2 py-1 text-xs font-bold font-mono">
                    #{art.tag.toUpperCase()}
                </div>
                <img
                  src={images[art.imageKey as keyof typeof images]}
                  alt={art.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-display font-bold text-foreground leading-none">{art.title}</h3>
                        <p className="text-xs font-mono text-muted-foreground mt-1">{art.artist} // {art.year}</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-white">
                        <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
             <a href="#" className="flex items-center justify-center w-full px-6 py-4 border-2 border-black font-bold uppercase tracking-wide bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            View Collection <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
