import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Phone, Star, Shield } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function DurbanAirportTaxiPage() {
  useEffect(() => {
    document.title = "Durban to King Shaka Airport Taxi | Professional Airport Transfer Service";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Reliable Durban to King Shaka Airport taxi service. Professional drivers, fixed rates, 35km journey in 30-40 minutes. Book your Durban CBD airport transfer now - available 24/7.'
      );
    }
  }, []);

  const routeFeatures = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Direct Route",
      description: "35km direct route from Durban CBD to King Shaka Airport via M41 and R102"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Travel Time",
      description: "30-40 minutes depending on traffic conditions and exact pickup location"
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Popular Destinations",
      description: "Serving all major Durban hotels, businesses, and residential areas"
    }
  ];

  const popularPickups = [
    "Durban City Hall area",
    "Golden Mile beachfront hotels", 
    "Moses Mabhida Stadium vicinity",
    "Durban ICC and surrounding hotels",
    "uShaka Marine World area",
    "Point area and waterfront",
    "Berea and Morningside suburbs",
    "Durban station and bus terminals"
  ];

  const scrollToBooking = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = '/#booking';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary via-primary/90 to-primary/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-background.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6" data-testid="text-durban-title">
              Durban to King Shaka Airport Taxi
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-durban-subtitle">
              Professional airport transfer service from Durban CBD to King Shaka International Airport. Reliable, punctual, and comfortable - your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToBooking}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 text-lg"
                data-testid="button-book-durban"
              >
                <Car className="w-5 h-5 mr-2" />
                Book Durban Transfer
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                data-testid="button-call-durban"
              >
                <a href="tel:+27833423975" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +27 83 342 3975
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Route Information */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-route-title">
              Durban to Airport Route Details
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast, direct route from Durban's central business district to King Shaka International Airport with professional service guaranteed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {routeFeatures.map((feature, index) => (
              <div key={index} className="text-center" data-testid={`route-feature-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Route Map */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center" data-testid="text-journey-title">
              Your Journey from Durban to King Shaka Airport
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Route Highlights:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Pickup from any Durban CBD location</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Travel via M41 towards Umhlanga</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Continue on R102 to King Shaka Drive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Direct arrival at airport terminals</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Service Guarantees:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Professional licensed drivers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Fixed pricing - no surprises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Flight monitoring service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pickup Locations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-pickups-title">
              Popular Durban Pickup Locations
            </h2>
            <p className="text-xl text-muted-foreground">
              We serve all areas of Durban CBD and surrounding suburbs with convenient pickup service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularPickups.map((location, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border text-center" data-testid={`pickup-${index}`}>
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm text-card-foreground font-medium">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing and Booking */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-booking-title">
              Book Your Durban Airport Transfer
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience professional, reliable taxi service from Durban to King Shaka Airport. Fixed rates, no hidden charges, and guaranteed punctual service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-card-foreground mb-2">Fast Journey</h3>
                <p className="text-muted-foreground text-sm">30-40 minute direct route to airport</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-card-foreground mb-2">Safe & Reliable</h3>
                <p className="text-muted-foreground text-sm">Licensed drivers, insured vehicles</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-card-foreground mb-2">Fixed Pricing</h3>
                <p className="text-muted-foreground text-sm">No meter, no surprises</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToBooking}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                data-testid="button-book-now-durban"
              >
                <Car className="w-5 h-5 mr-2" />
                Book Durban Transfer Now
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-3"
                data-testid="button-call-quote-durban"
              >
                <a href="tel:+27833423975" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Instant Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}