import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">The National</span>
              <h2 className="text-3xl font-serif font-bold leading-none tracking-tight mb-6">AAMCA</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Celebrating the richness of African American art, history, and culture through contemporary expression.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary"><Facebook className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="hover:text-primary"><Twitter className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="hover:text-primary"><Instagram className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="hover:text-primary"><Youtube className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Visit</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Plan Your Visit</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Hours & Admission</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Directions & Parking</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Group Visits</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Explore</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Exhibitions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Events & Programs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Education</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates on exhibitions, events, and news.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Email Address" className="bg-background border-input focus-visible:ring-primary" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Join</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Use</Link>
            <Link href="#" className="hover:text-foreground">Credits</Link>
          </div>
          <p>&copy; 2025 African American Museum of Contemporary Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
