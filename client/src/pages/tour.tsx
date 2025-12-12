import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

import galleryImg1 from "@assets/_DSF4764_1765404414486.jpg";
import galleryImg2 from "@assets/_DSF4755_1765404446002.jpg";
import galleryImg3 from "@assets/_DSF4780_1765404630830.jpg";
import galleryImg4 from "@assets/_DSF4805_1765404859886.jpg";

const tourDates = [
  { day: "20", month: "NOV", city: "Oakland, CA", venue: "The Tribune", status: "OPEN" },
  { day: "08", month: "DEC", city: "Atlanta, GA", venue: "Ponce City Market", status: "OPEN" },
  { day: "18", month: "DEC", city: "New York City", venue: "La Esquina", status: "OPEN" },
  { day: "03", month: "JAN", city: "Minneapolis, MN", venue: "Kyndred Hearth", status: "OPEN" }
];

const galleryImages = [
  { src: galleryImg1, alt: "Founders in conversation at dinner event" },
  { src: galleryImg2, alt: "Diverse group networking at dinner table" },
  { src: galleryImg3, alt: "Builder engaged in discussion at event" },
  { src: galleryImg4, alt: "Mentors connecting with founders at dinner" },
  { src: "https://www.dropbox.com/scl/fi/6ggjtg45hid14ra26hlzo/_DSF4789.jpg?rlkey=quc11knxpsn4g0u3a2ex7tgen&st=t0tov2q5&dl=1", alt: "Collaborative building session at dinner event" },
  { src: "https://www.dropbox.com/scl/fi/cg49eivg6so568u207p6x/_DSF4471.jpg?rlkey=wqjrbqjkalan3f92ce2bqz4ng&st=cwcb8kix&dl=1", alt: "Founders collaborating and networking at dinner" },
];

export default function Tour() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 font-mono text-sm font-bold border-2 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              2025-2026 TOUR
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
              THE BUILDER<br />DINNER TOUR
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
              An exclusive series of intimate dinners bringing together diverse founders, builders, and innovators across America's most dynamic cities.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-black rounded-none px-8 py-6 text-lg font-bold tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Link href="/request-invite">REQUEST AN INVITE <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="container mx-auto px-6 mb-24">
          <div className="flex items-center mb-8 gap-4">
            <div className="h-1 w-20 bg-black"></div>
            <span className="font-mono text-sm font-bold uppercase tracking-widest">Past Events</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Dates */}
        <section className="bg-card border-y-2 border-black py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-black pb-6">
              <h2 className="text-5xl font-display font-bold tracking-tighter">UPCOMING DATES</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tourDates.map((event, i) => (
                <div key={i} className="group cursor-pointer relative">
                  <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
                  <div className="relative bg-white border-2 border-black p-8 h-full flex flex-col transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-center bg-muted p-2 border border-black">
                        <span className="block text-3xl font-display font-bold text-foreground leading-none">{event.day}</span>
                        <span className="block text-xs font-bold uppercase text-muted-foreground tracking-widest">{event.month}</span>
                      </div>
                      <span className={`inline-block px-2 py-1 border border-black text-xs uppercase font-bold tracking-wider ${event.status === 'OPEN' ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'}`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors leading-tight">{event.city}</h3>
                    <p className="text-muted-foreground font-mono text-sm mt-auto border-t border-dashed border-black/20 pt-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" /> {event.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">JOIN THE MOVEMENT</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the next generation of diverse founders building the future. Request your invite today.
            </p>
            
            <Button asChild size="lg" className="bg-black text-white font-bold px-12 py-6 border-2 border-black hover:bg-white hover:text-black transition-colors text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Link href="/request-invite">REQUEST AN INVITE</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
