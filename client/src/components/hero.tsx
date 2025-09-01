import { Button } from "@/components/ui/button";
import { Car, Phone, Shield, Clock, Star } from "lucide-react";
import taxiBackground from "@assets/fotis-fotopoulos-7_r85l4eht8-unsplash_1756694465376.jpg";

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
          backgroundImage: `url(${taxiBackground})`
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }} data-testid="text-hero-title">
            Professional King Shaka Airport Taxi Service{" "}
            <span className="text-accent drop-shadow-lg">Since 2010</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-medium" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)', filter: 'contrast(1.2)' }} data-testid="text-hero-subtitle">
            Instant quotes for airport transfers. Fixed prices, professional drivers, 24/7 availability throughout KZN
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              onClick={scrollToBooking}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black font-semibold px-8 py-4 text-lg hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[44px] border-2 border-yellow-300"
              data-testid="button-book-ride"
            >
              <Car className="w-5 h-5 mr-2" />
              Book Your Ride
            </Button>
            <Button 
              asChild
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[56px]"
              data-testid="button-call-now"
            >
              <a href="tel:+27833423975" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-3" />
                Call Now: +27 83 342 3975
              </a>
            </Button>
          </div>
          
          <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-white px-4">
            <div className="flex items-center text-sm sm:text-base" data-testid="feature-safety" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              <Shield className="text-accent mr-2 w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" />
              <span className="font-medium">Zero Safety Incidents</span>
            </div>
            <div className="flex items-center text-sm sm:text-base" data-testid="feature-availability" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              <Clock className="text-accent mr-2 w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" />
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center text-sm sm:text-base" data-testid="feature-experience" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              <Star className="text-accent mr-2 w-4 h-4 sm:w-5 sm:h-5 drop-shadow-lg" />
              <span className="font-medium">Serving Since 2010</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
