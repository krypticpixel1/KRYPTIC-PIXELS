import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/98 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white"
      )}
    >
      {/* Top bar with contact */}
      <div className="bg-foreground text-background py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0596214271" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>0596214271</span>
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="tel:0209797033" className="hover:text-primary transition-colors">
              0209797033
            </a>
          </div>
          <span className="text-muted-foreground">Your Creative Design Partner in Ghana</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Kryptic Pixel Studio" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-foreground block leading-tight">
                Kryptic Pixel
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Studio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative px-4 py-2 font-medium text-sm transition-all duration-300 rounded-full",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 bg-white",
            isOpen ? "max-h-[400px] pb-6 border-t border-border" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl font-medium transition-all duration-300",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 border-t border-border mt-2">
              <Button variant="hero" className="w-full rounded-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
            <div className="px-4 pt-2 text-sm text-muted-foreground">
              <a href="tel:0596214271" className="hover:text-primary">0596214271</a>
              <span className="mx-2">|</span>
              <a href="tel:0209797033" className="hover:text-primary">0209797033</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
