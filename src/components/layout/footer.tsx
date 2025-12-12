import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              <div className="bg-white text-black w-12 h-12 flex items-center justify-center font-display font-bold text-2xl mb-4 rotate-3">
                R
              </div>
              <h2 className="text-4xl font-display font-bold leading-none tracking-tighter mb-6">REPLIT<br/>FELLOWS</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono">
                Empowering everyone to build software.<br/>
                No CS degree required.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 rounded-none"><Facebook className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 rounded-none"><Twitter className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 rounded-none"><Instagram className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-white/10 rounded-none"><Youtube className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 border-b-2 border-primary/30 pb-2 inline-block">TOUR</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-bold tracking-wide">
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Upcoming Cities</Link></li>
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Host a Dinner</Link></li>
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Sponsorship</Link></li>
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Code of Conduct</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 border-b-2 border-primary/30 pb-2 inline-block">RESOURCES</h3>
            <ul className="space-y-3 text-sm text-gray-400 font-bold tracking-wide">
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Replit 101</Link></li>
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Builder Templates</Link></li>
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Success Stories</Link></li>
              <li><Link href="#" className="hover:text-primary hover:translate-x-2 transition-all block">Community Forum</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-6 border-b-2 border-primary/30 pb-2 inline-block">STAY UPDATED</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get notified when the tour comes to your city.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Email Address" className="bg-white/10 border-white/20 text-white focus-visible:ring-primary placeholder:text-white/30 rounded-none" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold">SUBSCRIBE</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
          <p>&copy; 2025 Replit Fellows Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
