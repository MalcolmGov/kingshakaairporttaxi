import { Button } from "@/components/ui/button";
import { Car, Phone, Shield, Clock, Star } from "lucide-react";
import taxiBackground from "../assets/hero-background.jpg";

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden pt-20 sm:pt-0" data-testid="section-hero">
      {/* Original Background with NEED A TAXI */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        {/* Large NEED A TAXI text background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="text-gray-400 text-[200px] md:text-[300px] lg:text-[400px] font-black leading-none tracking-wider transform -rotate-3 select-none">
            NEED A TAXI?
          </div>
        </div>
        
        {/* Transport icons background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-16 left-8 md:left-16 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
            <div className="text-black text-xs font-bold">PORT</div>
          </div>
          <div className="absolute top-20 right-8 md:right-16 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center transform -rotate-6 shadow-lg">
            <div className="text-black text-xs font-bold">AIRPORT</div>
          </div>
          <div className="absolute bottom-32 md:bottom-40 left-4 md:left-12 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-45 shadow-lg">
            <div className="text-black text-xs font-bold">TRAIN</div>
          </div>
          <div className="absolute top-32 md:top-40 right-8 md:right-16 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg">
            <div className="text-black text-xs font-bold">SHOPPING</div>
          </div>
          <div className="absolute top-1/2 left-2 md:left-8 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-6 shadow-lg">
            <div className="text-black text-xs font-bold">HOTEL</div>
          </div>
          <div className="absolute bottom-16 md:bottom-20 right-4 md:right-12 w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-lg flex items-center justify-center transform rotate-30 shadow-lg">
            <div className="text-black text-xs font-bold">HOME</div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2" style={{ color: '#ffffff', textShadow: '3px 3px 8px rgba(0,0,0,1)', fontWeight: '700' }} data-testid="text-hero-title">
            Professional King Shaka Airport Taxi Service{" "}
            <span style={{ color: '#fbbf24', textShadow: '2px 2px 4px rgba(0,0,0,1)' }}>Since 2010</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-medium" style={{ color: '#ffffff', textShadow: '3px 3px 8px rgba(0,0,0,1)', fontWeight: '500' }} data-testid="text-hero-subtitle">
            Instant quotes for airport transfers. Fixed prices, professional drivers, 24/7 availability throughout KZN
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center max-w-lg sm:max-w-none mx-auto">
            <Button 
              onClick={scrollToBooking}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black font-bold px-6 py-5 text-base sm:text-lg hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[56px] border-2 border-yellow-300 rounded-xl"
              data-testid="button-book-ride"
            >
              <Car className="w-5 h-5 mr-2 flex-shrink-0" />
              <span>Book Your Ride</span>
            </Button>
            <Button 
              asChild
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base sm:text-lg font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 min-h-[56px] border-2 border-blue-500 rounded-xl"
              data-testid="button-call-now"
            >
              <a href="tel:+27833423975" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span className="whitespace-nowrap">Call: +27 83 342 3975</span>
              </a>
            </Button>
          </div>
          
          <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4">
            <div className="flex items-center text-sm sm:text-base" data-testid="feature-safety" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,1)' }}>
              <Shield className="mr-2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#fbbf24' }} />
              <span className="font-medium">Zero Safety Incidents</span>
            </div>
            <div className="flex items-center text-sm sm:text-base" data-testid="feature-availability" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,1)' }}>
              <Clock className="mr-2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#fbbf24' }} />
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center text-sm sm:text-base" data-testid="feature-experience" style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,1)' }}>
              <Star className="mr-2 w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#fbbf24' }} />
              <span className="font-medium">Serving Since 2010</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
