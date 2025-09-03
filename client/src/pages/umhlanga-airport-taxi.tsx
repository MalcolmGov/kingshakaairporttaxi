import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Phone, Star, Shield } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function UmhlangaAirportTaxiPage() {
  useEffect(() => {
    document.title = "Umhlanga to King Shaka Airport Taxi | Quick 15-Minute Transfer Service";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Fast Umhlanga to King Shaka Airport taxi - only 15km, 15-20 minutes. Professional service from Gateway, hotels, and Umhlanga Ridge. Book your convenient airport transfer now.'
      );
    }
  }, []);

  const routeFeatures = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Short Distance",
      description: "Only 15km from Umhlanga to King Shaka Airport - the closest major destination"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Quick Journey",
      description: "15-20 minutes travel time via direct route on King Shaka Drive"
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Premium Area",
      description: "Serving Umhlanga's luxury hotels, business district, and residential areas"
    }
  ];

  const popularPickups = [
    "Gateway Theatre of Shopping",
    "Umhlanga Lighthouse area",
    "Beverly Hills Hotel",
    "Oyster Box Hotel", 
    "Umhlanga Ridge business district",
    "Pearls Mall",
    "Umhlanga Rocks Beach area",
    "La Lucia residential area"
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
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6" data-testid="text-umhlanga-title">
              Umhlanga to King Shaka Airport Taxi
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-umhlanga-subtitle">
              The fastest airport transfer from Umhlanga! Just 15 minutes to King Shaka International Airport with professional, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToBooking}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 text-lg"
                data-testid="button-book-umhlanga"
              >
                <Car className="w-5 h-5 mr-2" />
                Book Umhlanga Transfer
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
                data-testid="button-call-umhlanga"
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
              Quick Umhlanga to Airport Route
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most convenient airport transfer route in KZN - from Umhlanga's premier destinations straight to King Shaka Airport.
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
              Your Quick Journey from Umhlanga
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Why Choose Umhlanga Route:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Shortest distance to airport (15km)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Direct route via King Shaka Drive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Minimal traffic delays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Perfect for business travelers</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-4">Premium Service Features:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Luxury vehicle options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Hotel pickup arrangements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Corporate account billing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Flight departure monitoring</span>
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
              Umhlanga Pickup Locations
            </h2>
            <p className="text-xl text-muted-foreground">
              Convenient pickup from all major Umhlanga destinations including hotels, shopping centers, and business districts.
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

      {/* Benefits for Umhlanga Travelers */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-title">
                Perfect for Umhlanga Travelers
              </h2>
              <p className="text-xl text-muted-foreground">
                Whether you're staying at luxury hotels or conducting business in Umhlanga Ridge, we provide the ideal airport transfer solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Business Travelers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Express service to catch flights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Executive vehicles available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Early morning/late night service</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Hotel Guests</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Direct hotel pickup service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Luggage assistance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>Concierge booking partnerships</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToBooking}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                  data-testid="button-book-now-umhlanga"
                >
                  <Car className="w-5 h-5 mr-2" />
                  Book Umhlanga Transfer
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-3"
                  data-testid="button-call-quote-umhlanga"
                >
                  <a href="tel:+27833423975" className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Quick Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}