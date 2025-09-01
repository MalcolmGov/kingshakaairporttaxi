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
          backgroundImage: "url('https://pixabay.com/get/gf421619cd14ea1b442b625e56a8a5063fd8b01d964825d19cb755bf039892767b12555c8c78a633991fd6d06c9a693283b78b491903c041a68786c11f1be705f_1280.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight" data-testid="text-hero-title">
            Reliable and Affordable Taxi Service at{" "}
            <span className="text-accent">King Shaka Airport</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
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
          
          <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-primary-foreground/80">
            <div className="flex items-center" data-testid="feature-safety">
              <Shield className="text-accent mr-2 w-5 h-5" />
              <span className="font-medium">Zero Safety Incidents</span>
            </div>
            <div className="flex items-center" data-testid="feature-availability">
              <Clock className="text-accent mr-2 w-5 h-5" />
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center" data-testid="feature-experience">
              <Star className="text-accent mr-2 w-5 h-5" />
              <span className="font-medium">Serving Since 2010</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
