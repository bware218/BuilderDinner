import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const builders = [
  {
    id: 1,
    title: "The Gradebook 2.0",
    builder: "Sarah M.",
    role: "High School Math Teacher",
    imageKey: "teacher_building_an_app_illustration",
    aspect: "aspect-[3/4]",
    tag: "Education"
  },
  {
    id: 2,
    title: "Inventory Simplified",
    builder: "James T.",
    role: "Bakery Owner",
    imageKey: "small_business_owner_using_custom_software",
    aspect: "aspect-square",
    tag: "Small Business"
  },
  {
    id: 3,
    title: "Volunteer Connect",
    builder: "Elena R.",
    role: "Non-profit Director",
    imageKey: "bold_geometric_abstract_art", // Re-using for abstract feel if needed, or can be replaced
    aspect: "aspect-[4/3]",
    tag: "Non-profit"
  },
  {
    id: 4,
    title: "Local Tour Guide",
    builder: "Marcus W.",
    role: "Retired History Buff",
    imageKey: "playful_tour_map_graphic",
    aspect: "aspect-[3/4]",
    tag: "Travel"
  }
];

import teacherImg from "@assets/generated_images/teacher_building_an_app_illustration.png";
import bizImg from "@assets/generated_images/small_business_owner_using_custom_software.png";
import mapImg from "@assets/generated_images/playful_tour_map_graphic.png";
// Fallback/Reuse
import abstractImg from "@assets/generated_images/bold_geometric_abstract_art.png";

const images = {
  teacher_building_an_app_illustration: teacherImg,
  small_business_owner_using_custom_software: bizImg,
  playful_tour_map_graphic: mapImg,
  bold_geometric_abstract_art: abstractImg
};

export function BuilderShowcase() {
  return (
    <section className="py-24 bg-background relative border-t-2 border-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-4 -rotate-1">
              Built by Replit Fellows
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tighter">
              REAL PEOPLE.<br/>REAL APPS.
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center px-6 py-3 border-2 border-black font-bold uppercase tracking-wide bg-white hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            View All Stories <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {builders.map((item, index) => (
            <motion.div
              key={item.id}
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
              <div className={`relative overflow-hidden w-full ${item.aspect} border-2 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300`}>
                <div className="absolute top-4 left-4 z-10 bg-white border border-black px-2 py-1 text-xs font-bold font-mono shadow-sm">
                    #{item.tag.toUpperCase()}
                </div>
                <img
                  src={images[item.imageKey as keyof typeof images]}
                  alt={item.title}
                  className="h-full w-full object-cover transition-all duration-500"
                />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-display font-bold text-foreground leading-none">{item.title}</h3>
                        <p className="text-xs font-mono text-muted-foreground mt-1">Built by {item.builder} // {item.role}</p>
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
            View All Stories <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
