import { Link } from "wouter";
import { Menu, Search, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b-2",
        scrolled
          ? "bg-background border-border py-4"
          : "bg-background border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="border-2 border-transparent hover:border-border hover:bg-card">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r-2 border-border p-8">
              <div className="flex flex-col space-y-6 mt-10">
                <Link href="/tour" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">THE TOUR</Link>
                <Link href="/stories" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">STORIES</Link>
                <Link href="/resources" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">RESOURCES</Link>
                <Link href="/apply" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">APPLY</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer group">
            <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-display font-bold text-2xl mr-3 border-2 border-black transform group-hover:-rotate-6 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-display font-bold leading-none text-foreground tracking-tighter">
                REPLIT FELLOWS
              </h1>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
                Builder Dinner Tour
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/tour" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">The Tour</Link>
          <Link href="/stories" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">Stories</Link>
          <Link href="/resources" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">Resources</Link>
          <Link href="/faq" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">FAQ</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
            JOIN THE DINNER
          </Button>
        </div>
      </div>
    </nav>
  );
}
