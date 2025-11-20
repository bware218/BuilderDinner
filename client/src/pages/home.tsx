import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/ui/hero-section";
import { BuilderShowcase } from "@/components/ui/artwork-gallery";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";

// Import assets
import diverseDinnerImg from "@assets/generated_images/diverse_upscale_entrepreneur_dinner.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <section className="relative min-h-screen w-full overflow-hidden bg-card flex items-center pt-20">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-12">
            <div className="relative z-20 order-2 lg:order-1">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 font-mono text-sm font-bold border-2 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
                COMING TO A CITY NEAR YOU
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter text-foreground uppercase">
                BUILD IT YOURSELF
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mb-10 font-sans font-medium leading-tight">
                Join an exclusive evening of culinary excellence and visionary building. We are gathering the next generation of diverse founders in cities across the nation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-black rounded-none px-8 py-8 text-xl font-bold tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <Link href="/request-invite">REQUEST INVITE</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-foreground border-2 border-black hover:bg-muted rounded-none px-8 py-8 text-xl font-bold tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                  READ STORIES
                </Button>
              </div>
            </div>

            <div className="relative z-10 order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-primary rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-1/2 h-1/2 bg-secondary rounded-full opacity-20 blur-3xl"></div>
                
                <div className="relative w-full h-full border-4 border-black bg-white p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-2">
                  <img
                    src={diverseDinnerImg}
                    alt="Hero Visual"
                    className="h-full w-full object-cover border-2 border-black hover:scale-[1.02] transition-all duration-500"
                  />
                  
                  <div className="absolute -top-6 -right-6 bg-yellow-400 text-black font-hand font-bold text-xl px-6 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">
                    The Founder's Table
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-primary text-primary-foreground border-y-2 border-black relative overflow-hidden">
           <div className="absolute -right-20 -top-20 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>

          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center mb-6 gap-4">
                    <div className="h-1 w-20 bg-black"></div>
                    <span className="font-mono text-sm font-bold uppercase tracking-widest">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
                  AMPLIFYING VOICES.<br/>
                  <span className="bg-black text-white px-2 italic font-serif">BUILDING FUTURES.</span>
                </h2>
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 opacity-90 max-w-3xl">
                  We believe brilliance is distributed equally, but opportunity is not. The Replit Fellows Dinner Tour is dedicated to empowering underrepresented founders in urban centers—giving you the tools, network, and mentorship to turn your vision into reality.
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
                      <p className="font-sans font-bold mb-6">Champion the builders in your city. We're looking for community leaders in Atlanta, Oakland, NYC, and Minneapolis.</p>
                      <Button asChild className="w-full bg-black text-white hover:bg-black/80 font-bold border-2 border-transparent">
                        <Link href="/request-invite">APPLY TO HOST</Link>
                      </Button>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { day: "20", month: "NOV", city: "Oakland, CA", venue: "The Tribune", status: "OPEN" },
                { day: "08", month: "DEC", city: "Atlanta, GA", venue: "Ponce City Market", status: "OPEN" },
                { day: "18", month: "DEC", city: "New York City", venue: "Red Rooster Harlem", status: "OPEN" },
                { day: "03", month: "JAN", city: "Minneapolis, MN", venue: "TBA", status: "OPEN" }
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
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Join the waitlist for the next exclusive dinner in your area. We prioritize spaces for underrepresented founders.</p>
                
                <Button asChild size="lg" className="bg-black text-white font-bold px-12 py-6 border-2 border-black hover:bg-white hover:text-black transition-colors text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Link href="/request-invite">APPLY NOW</Link>
                </Button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
