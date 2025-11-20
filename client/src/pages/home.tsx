import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/ui/hero-section";
import { ArtworkGallery } from "@/components/ui/artwork-gallery";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Import assets
import museumInterior from "@assets/generated_images/modern_museum_interior_architecture.png";
import collageImg from "@assets/generated_images/mixed_media_collage_art.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      
      <main>
        <Hero 
          image={museumInterior}
          title="Voices in Color"
          subtitle="An immersive journey through the evolution of contemporary African American artistic expression, featuring over 50 visionary artists."
        />
        
        <section className="py-24 bg-card text-card-foreground">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-primary font-sans text-sm tracking-widest uppercase font-bold mb-4 block">About The Museum</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  A Sanctuary for <br/><span className="italic text-primary">Cultural Dialogue</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The African American Museum of Contemporary Art (AAMCA) stands as a beacon of artistic innovation and historical reverence. We are dedicated to preserving, presenting, and interpreting the art of African Americans and the African Diaspora.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Our space is more than a gallery; it is a living archive where past and future converge through the medium of visual storytelling.
                </p>
                <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background uppercase tracking-widest px-8 py-6">
                  Our Mission
                </Button>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 hidden lg:block"></div>
                <div className="aspect-[4/5] bg-muted overflow-hidden relative z-10">
                   <img src={collageImg} alt="Museum interior detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>

        <ArtworkGallery />

        <section className="py-24 bg-accent text-accent-foreground relative overflow-hidden">
           {/* Decorative text */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
              <span className="text-[20vw] font-serif font-bold whitespace-nowrap leading-none">CULTURE</span>
           </div>

           <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Membership</h2>
                <p className="text-xl text-accent-foreground/80 mb-10 leading-relaxed font-light">
                  Become a patron of the arts. Support the preservation of our heritage and enjoy exclusive access to exhibitions, private viewings, and special events.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-none px-10 py-6 text-base">
                    Become a Member
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none px-10 py-6 text-base">
                    Learn More
                  </Button>
                </div>
              </div>
           </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-6">
              <h2 className="text-4xl font-serif font-bold">Upcoming Events</h2>
              <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary mt-4 md:mt-0">View Calendar</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { day: "12", month: "OCT", title: "Artist Talk: Marcus Thorne", time: "6:00 PM - Auditorium" },
                { day: "24", month: "OCT", title: "Workshop: Mixed Media", time: "2:00 PM - Studio A" },
                { day: "05", month: "NOV", title: "Gala: Night of Heritage", time: "7:00 PM - Grand Hall" }
              ].map((event, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-card border border-border p-8 h-full hover:border-primary transition-colors duration-300 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-center">
                        <span className="block text-3xl font-serif font-bold text-foreground">{event.day}</span>
                        <span className="block text-xs font-bold uppercase text-muted-foreground tracking-widest">{event.month}</span>
                      </div>
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs uppercase font-bold tracking-wider rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Event
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mt-auto">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
