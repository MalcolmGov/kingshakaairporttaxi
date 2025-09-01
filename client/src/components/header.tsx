import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Plane, Menu, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50" data-testid="header-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3" data-testid="logo-container">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
              <Plane className="text-primary-foreground w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl text-foreground">King Shaka Airport Taxi</span>
              <span className="text-xs lg:text-sm text-muted-foreground">Reliable & Affordable Rides in KZN</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-testid="nav-desktop">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-services">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-about">
              About
            </button>
            <Link href="/team" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-team">
              Our Team
            </Link>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-reviews">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="nav-contact">
              Contact
            </button>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4" data-testid="header-cta">
            <a href="tel:+27833423975" className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center" data-testid="link-phone">
              <Phone className="w-4 h-4 mr-2" />
              +27 83 342 3975
            </a>
            <Button 
              onClick={() => scrollToSection('booking')} 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]" data-testid="sheet-mobile-menu">
              <nav className="flex flex-col space-y-6 mt-8">
                <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors font-medium text-lg" data-testid="mobile-nav-home">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors font-medium text-lg" data-testid="mobile-nav-services">
                  Services
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors font-medium text-lg" data-testid="mobile-nav-about">
                  About
                </button>
                <Link href="/team" className="text-left text-foreground hover:text-primary transition-colors font-medium text-lg" data-testid="mobile-nav-team">
                  Our Team
                </Link>
                <button onClick={() => scrollToSection('reviews')} className="text-left text-foreground hover:text-primary transition-colors font-medium text-lg" data-testid="mobile-nav-reviews">
                  Reviews
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors font-medium text-lg" data-testid="mobile-nav-contact">
                  Contact
                </button>
                
                <div className="pt-6 border-t border-border space-y-4">
                  <a href="tel:+27833423975" className="flex items-center text-primary font-semibold text-lg" data-testid="mobile-link-phone">
                    <Phone className="w-5 h-5 mr-3" />
                    +27 83 342 3975
                  </a>
                  <Button 
                    onClick={() => scrollToSection('booking')} 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                    data-testid="mobile-button-book"
                  >
                    Book Your Ride
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
