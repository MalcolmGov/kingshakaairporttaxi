import { Button } from "@/components/ui/button";
import { Car, Phone, Shield, Clock, Star } from "lucide-react";

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} data-testid="text-hero-title">
            Reliable and Affordable Taxi Service at{" "}
            <span className="text-accent drop-shadow-lg">King Shaka Airport</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} data-testid="text-hero-subtitle">
            Making Your Travels Simpler and Stress-Free - Over a Decade of Safe, Professional Service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              onClick={scrollToBooking}
              className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-4 text-lg hover:bg-accent/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[44px]"
              data-testid="button-book-ride"
            >
              <Car className="w-5 h-5 mr-2" />
              Book Your Ride
            </Button>
            <Button 
              asChild
              variant="secondary"
              className="w-full sm:w-auto bg-primary-foreground text-primary px-8 py-4 text-lg hover:bg-primary-foreground/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[44px]"
              data-testid="button-call-now"
            >
              <a href="tel:+27123456789">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +27 123 456 789
              </a>
            </Button>
          </div>
          
          <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-white">
            <div className="flex items-center" data-testid="feature-safety" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              <Shield className="text-accent mr-2 w-5 h-5 drop-shadow-lg" />
              <span className="font-medium">Zero Safety Incidents</span>
            </div>
            <div className="flex items-center" data-testid="feature-availability" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              <Clock className="text-accent mr-2 w-5 h-5 drop-shadow-lg" />
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center" data-testid="feature-experience" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              <Star className="text-accent mr-2 w-5 h-5 drop-shadow-lg" />
              <span className="font-medium">Serving Since 2010</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
