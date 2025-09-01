import { Phone, Mail, MapPin, Facebook, Twitter } from "lucide-react";
import { MessageCircle } from "lucide-react";
import logoImage from "../assets/king-shaka-logo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 overflow-hidden" data-testid="footer-main">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-yellow-500"></div>
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-orange-400"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 rounded-full bg-yellow-500"></div>
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 left-1/3 w-16 h-16 rotate-45 bg-gradient-to-r from-yellow-500 to-yellow-500"></div>
        <div className="absolute bottom-32 right-1/4 w-12 h-12 rotate-12 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2" data-testid="footer-company-info">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoImage} 
                alt="King Shaka Airport Taxi Logo" 
                className="h-12 w-auto"
                data-testid="footer-logo-image"
              />
              <div>
                <h3 className="font-bold text-lg" data-testid="text-footer-company-name">King Shaka Airport Taxi</h3>
                <p className="text-background/70 text-sm" data-testid="text-footer-tagline">Serving KZN with pride since 2010</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed" data-testid="text-footer-description">
              Over a decade of experience delivering clients safely and timeously throughout KwaZulu-Natal. Your trusted transportation partner with zero comebacks and zero safety incidents.
            </p>
            <div className="flex space-x-4" data-testid="social-links">
              <a href="https://www.facebook.com/KingShakaAirportTaxi?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-400 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" data-testid="link-facebook">
                <Facebook className="text-white w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center hover:from-sky-400 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" data-testid="link-twitter">
                <Twitter className="text-white w-6 h-6" />
              </a>
              <a href="https://wa.me/27833423975" className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center hover:from-green-400 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" data-testid="link-whatsapp">
                <MessageCircle className="text-white w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="font-bold text-lg mb-6 text-white relative">
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 bg-clip-text text-transparent">Airport Transfer Services</span>
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('services')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-services">King Shaka Airport Taxi</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-booking">Book Airport Transfer</button></li>
              <li><a href="/team" className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-team">Our Professional Team</a></li>
              <li><button onClick={() => scrollToSection('reviews')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-reviews">Customer Reviews</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-link-contact">Contact & WhatsApp</button></li>
            </ul>
          </div>
          
          {/* Popular Routes */}
          <div data-testid="footer-popular-routes">
            <h4 className="font-bold text-lg mb-6 text-white relative">
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 bg-clip-text text-transparent">Popular KZN Destinations</span>
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('booking')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-route-durban">Durban CBD Transfer</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-route-umhlanga">Umhlanga Ridge</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-route-ballito">Ballito Coastal</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-route-pmb">Pietermaritzburg</button></li>
              <li><button onClick={() => scrollToSection('booking')} className="text-background/80 hover:text-accent transition-colors" data-testid="footer-route-corporate">Corporate Transport</button></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div data-testid="footer-contact-info">
            <h4 className="font-bold text-lg mb-6 text-white relative">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">24/7 Contact Info</span>
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <a href="tel:+27833423975" className="flex items-center group hover:bg-white/5 p-3 rounded-lg transition-colors duration-300 cursor-pointer" data-testid="footer-phone">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <span className="text-white font-medium group-hover:text-yellow-300 transition-colors">+27 83 342 3975</span>
              </a>
              <a href="mailto:info@kingshakaairporttaxi.co.za" className="flex items-center group hover:bg-white/5 p-3 rounded-lg transition-colors duration-300 cursor-pointer" data-testid="footer-email">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <span className="text-white font-medium group-hover:text-yellow-300 transition-colors">info@kingshakaairporttaxi.co.za</span>
              </a>
              <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-colors duration-300" data-testid="footer-address">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 shadow-lg flex-shrink-0 mt-0">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <span className="text-white font-medium group-hover:text-yellow-300 transition-colors">
                  King Shaka International Airport<br />
                  KwaZulu-Natal, South Africa
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 mb-4" data-testid="text-footer-copyright">
            © 2024 King Shaka Airport Taxi. All rights reserved. | Serving KZN with pride since 2010
          </p>
          
          {/* Powered by Move Digital */}
          <div className="flex justify-center">
            <a 
              href="https://movedigital.africa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium text-sm hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="link-powered-by-move-digital"
            >
              <span className="mr-2">⚡</span>
              Powered by Move Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
