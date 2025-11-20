import { Link } from "wouter";
import { Menu, Search, ShoppingBag } from "lucide-react";
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
                <Link href="/visit" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">VISIT</Link>
                <Link href="/exhibitions" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">EXHIBITIONS</Link>
                <Link href="/collections" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">COLLECTIONS</Link>
                <Link href="/events" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">EVENTS</Link>
                <Link href="/about" className="text-4xl font-display font-bold hover:text-primary hover:underline decoration-4 underline-offset-4 transition-all">ABOUT</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="flex items-center cursor-pointer group">
            <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center font-display font-bold text-2xl mr-3 border-2 border-black transform group-hover:-rotate-6 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-display font-bold leading-none text-foreground tracking-tighter">
                AAMCA
              </h1>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted-foreground">
                Lab of Culture
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/visit" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">Visit</Link>
          <Link href="/exhibitions" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">Exhibitions</Link>
          <Link href="/collections" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">Collections</Link>
          <Link href="/events" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide border-b-2 border-transparent hover:border-primary">Events</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hidden md:flex text-foreground hover:text-primary border-2 border-transparent hover:border-border hover:bg-card">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
            TICKETS
          </Button>
        </div>
      </div>
    </nav>
  );
}
