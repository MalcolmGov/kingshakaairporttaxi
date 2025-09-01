import { Plane, Phone, Mail, MapPin, Facebook, Twitter } from "lucide-react";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16" data-testid="footer-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2" data-testid="footer-company-info">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Plane className="text-accent-foreground w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg" data-testid="text-footer-company-name">King Shaka Airport Taxi</h3>
                <p className="text-background/70 text-sm" data-testid="text-footer-tagline">Serving KZN with pride since 2010</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed" data-testid="text-footer-description">
              Over a decade of experience delivering clients safely and timeously throughout KwaZulu-Natal. Your trusted transportation partner with zero comebacks and zero safety incidents.
            </p>
            <div className="flex space-x-4" data-testid="social-links">
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors" data-testid="link-facebook">
                <Facebook className="text-primary-foreground w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors" data-testid="link-twitter">
                <Twitter className="text-primary-foreground w-5 h-5" />
              </a>
              <a href="https://wa.me/27123456789" className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors" data-testid="link-whatsapp">
                <MessageCircle className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-home">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-services">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-about">About Us</button></li>
              <li><button onClick={() => scrollToSection('reviews')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-reviews">Reviews</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-contact">Contact</button></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div data-testid="footer-contact-info">
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center" data-testid="footer-phone">
                <Phone className="text-accent mr-3 w-4 h-4" />
                <span className="text-background/80">+27 123 456 789</span>
              </div>
              <div className="flex items-center" data-testid="footer-email">
                <Mail className="text-accent mr-3 w-4 h-4" />
                <span className="text-background/80">info@kingshakataxi.co.za</span>
              </div>
              <div className="flex items-start" data-testid="footer-address">
                <MapPin className="text-accent mr-3 w-4 h-4 mt-1" />
                <span className="text-background/80">
                  King Shaka International Airport<br />
                  KwaZulu-Natal, South Africa
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60" data-testid="text-footer-copyright">
            © 2024 King Shaka Airport Taxi. All rights reserved. | Serving KZN with pride since 2010
          </p>
        </div>
      </div>
    </footer>
  );
}
