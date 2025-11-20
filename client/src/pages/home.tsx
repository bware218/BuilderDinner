import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/ui/hero-section";
import { BuilderShowcase } from "@/components/ui/artwork-gallery";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, ArrowRight, MapPin } from "lucide-react";

// Import assets
import upscaleDinnerImg from "@assets/generated_images/upscale_entrepreneur_dinner.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero 
          image={upscaleDinnerImg}
          title="BUILD IT YOURSELF"
          subtitle="Join an exclusive evening of culinary excellence and visionary building. Connect with fellow founders, enjoy a curated menu, and bring your ideas to life."
        />
        
        <section className="py-24 bg-primary text-primary-foreground border-y-2 border-black relative overflow-hidden">
           {/* Sketchy background element */}
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center mb-6 gap-4">
                    <div className="h-1 w-20 bg-black"></div>
                    <span className="font-mono text-sm font-bold uppercase tracking-widest">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
                  SOFTWARE IS THE NEW<br/>
                  <span className="bg-black text-white px-2 italic font-serif">LITERACY.</span>
                </h2>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 opacity-90 max-w-3xl">
                  You don't need a Computer Science degree to build solutions for your community. The Replit Fellows Dinner Tour is about demystifying code and empowering educators, parents, and business owners to become builders in an environment of excellence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-black text-white p-2 rounded-full font-bold font-mono">01</div>
                        <p className="max-w-xs text-sm font-bold">Mentorship from world-class builders over a fine dining experience.</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-black text-white p-2 rounded-full font-bold font-mono">02</div>
                        <p className="max-w-xs text-sm font-bold">Walk away with a working prototype and a powerful network.</p>
                    </div>
                </div>
              </div>
              
              <div className="lg:col-span-4">
                  <div className="bg-white text-black p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] rotate-2 transform hover:rotate-0 transition-transform duration-300">
                      <h3 className="font-hand text-3xl font-bold mb-4 text-primary">Host a Dinner</h3>
                      <p className="font-sans font-bold mb-6">Want to bring this curated experience to your city? We're looking for community leaders.</p>
                      <Button className="w-full bg-black text-white hover:bg-black/80 font-bold border-2 border-transparent">APPLY TO HOST</Button>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <BuilderShowcase />

        <section className="py-24 bg-card border-b-2 border-black">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-black pb-6">
              <h2 className="text-5xl font-display font-bold tracking-tighter">TOUR DATES</h2>
              <a href="#" className="text-lg font-bold uppercase tracking-wide hover:text-primary mt-4 md:mt-0 flex items-center group">
                View All Cities <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { day: "12", month: "OCT", city: "Austin, TX", venue: "The Driskill", status: "OPEN" },
                { day: "24", month: "OCT", city: "Detroit, MI", venue: "The Apparatus Room", status: "WAITLIST" },
                { day: "05", month: "NOV", city: "Atlanta, GA", venue: "Ponce City Market", status: "OPEN" }
              ].map((event, i) => (
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
        
        <section className="py-20 bg-background">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">REQUEST AN INVITATION</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Join the waitlist for the next exclusive dinner in your area. Curated guest lists ensuring high-impact networking.</p>
                
                <div className="max-w-md mx-auto flex gap-4">
                    <input type="email" placeholder="YOUR EMAIL" className="flex-1 bg-white border-2 border-black px-4 py-3 font-bold placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
                    <Button size="lg" className="bg-black text-white font-bold px-8 border-2 border-black hover:bg-white hover:text-black transition-colors">
                        APPLY
                    </Button>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
