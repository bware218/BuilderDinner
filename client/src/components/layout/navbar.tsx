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
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-r border-border">
              <div className="flex flex-col space-y-6 mt-10">
                <Link href="/visit" className="text-2xl font-serif hover:text-primary transition-colors">Visit</Link>
                <Link href="/exhibitions" className="text-2xl font-serif hover:text-primary transition-colors">Exhibitions</Link>
                <Link href="/collections" className="text-2xl font-serif hover:text-primary transition-colors">Collections</Link>
                <Link href="/events" className="text-2xl font-serif hover:text-primary transition-colors">Events</Link>
                <Link href="/about" className="text-2xl font-serif hover:text-primary transition-colors">About</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col items-center md:items-start cursor-pointer group">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors">The National</span>
            <h1 className="text-2xl md:text-3xl font-serif font-bold leading-none tracking-tight text-foreground">
              AAMCA
            </h1>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/visit" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">Visit</Link>
          <Link href="/exhibitions" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">Exhibitions</Link>
          <Link href="/collections" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">Collections</Link>
          <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide">Events</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex text-foreground hover:text-primary">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-primary relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-sans tracking-wide">
            Tickets
          </Button>
        </div>
      </div>
    </nav>
  );
}
