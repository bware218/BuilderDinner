import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 font-mono text-sm font-bold border-2 border-black mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2">
              <Clock className="inline-block w-4 h-4 mr-2" />
              COMING SOON
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-lg mx-auto">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-black rounded-none px-8 py-6 text-lg font-bold tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <Link href="/request-invite">REQUEST AN INVITE</Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-white text-foreground border-2 border-black hover:bg-muted rounded-none px-8 py-6 text-lg font-bold tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <Link href="/"><ArrowLeft className="mr-2 h-5 w-5" /> BACK TO HOME</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}