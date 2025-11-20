import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Ancestral Echoes",
    artist: "Marcus Thorne",
    year: "2024",
    imageKey: "abstract_portrait_in_oil_painting_style",
    aspect: "aspect-[3/4]"
  },
  {
    id: 2,
    title: "Urban Rhythm",
    artist: "Sarah Jenkins",
    year: "2023",
    imageKey: "large_scale_colorful_abstract_painting",
    aspect: "aspect-square"
  },
  {
    id: 3,
    title: "Fragmented History",
    artist: "David Okonjo",
    year: "2024",
    imageKey: "mixed_media_collage_art",
    aspect: "aspect-[4/3]"
  },
  {
    id: 4,
    title: "Bronze Soul",
    artist: "Elena Ross",
    year: "2022",
    imageKey: "modern_bronze_and_wood_sculpture",
    aspect: "aspect-[3/4]"
  }
];

import portraitImg from "@assets/generated_images/abstract_portrait_in_oil_painting_style.png";
import abstractImg from "@assets/generated_images/large_scale_colorful_abstract_painting.png";
import collageImg from "@assets/generated_images/mixed_media_collage_art.png";
import sculptureImg from "@assets/generated_images/modern_bronze_and_wood_sculpture.png";

const images = {
  abstract_portrait_in_oil_painting_style: portraitImg,
  large_scale_colorful_abstract_painting: abstractImg,
  mixed_media_collage_art: collageImg,
  modern_bronze_and_wood_sculpture: sculptureImg
};

export function ArtworkGallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-sans text-sm tracking-widest uppercase font-bold mb-2 block">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Current Acquisitions</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors mt-6 md:mt-0">
            View Collection <ArrowUpRight className="ml-2 h-4 w-4" />
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
              className={`group relative cursor-pointer ${
                index === 0 ? "lg:col-span-5" : 
                index === 1 ? "lg:col-span-7" : 
                index === 2 ? "lg:col-span-8" : "lg:col-span-4"
              }`}
            >
              <div className={`relative overflow-hidden w-full ${art.aspect} bg-muted`}>
                <img
                  src={images[art.imageKey as keyof typeof images]}
                  alt={art.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif font-medium text-foreground group-hover:text-primary transition-colors">{art.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{art.artist}, {art.year}</p>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="h-5 w-5 text-foreground" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
             <a href="#" className="flex items-center justify-center text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary transition-colors">
            View Collection <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
