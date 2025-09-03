import { Button } from "@/components/ui/button";
import { Car, Clock, Shield, Users, Building, MapPin, Phone } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Professional Taxi Services | King Shaka Airport Taxi | Durban KZN";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Complete taxi services in Durban & KZN: Airport transfers, corporate transport, city tours, hotel transfers, event transportation. Professional drivers, 24/7 availability since 2010.'
      );
    }
  }, []);

  const services = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Airport Transfers",
      description: "Professional transfers to and from King Shaka International Airport. Reliable, punctual service with flight monitoring and meet-and-greet service.",
      features: [
        "Flight monitoring & tracking",
        "Meet & greet service", 
        "Fixed pricing - no surprises",
        "Professional drivers",
        "24/7 availability"
      ]
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Corporate Transportation",
      description: "Executive transport solutions for business professionals. Reliable corporate accounts, professional service for meetings, conferences, and business travel.",
      features: [
        "Executive vehicle fleet",
        "Corporate billing accounts",
        "Professional chauffeurs",
        "Confidential service",
        "Flexible scheduling"
      ]
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "City Tours & Sightseeing",
      description: "Discover KwaZulu-Natal with our guided tours. From Durban beaches to Drakensberg mountains, experience the best of KZN with knowledgeable local guides.",
      features: [
        "Local expert guides",
        "Customizable itineraries",
        "Historical sites tours",
        "Coastal & mountain tours",
        "Group bookings available"
      ]
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Hotel Transfers",
      description: "Convenient transfers between King Shaka Airport and major hotels in Durban, Umhlanga, Ballito, and surrounding areas.",
      features: [
        "Direct hotel pickup",
        "Luggage assistance",
        "All major hotels covered",
        "Advance reservations",
        "Group transfer rates"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Event Transportation",
      description: "Special event transport for weddings, conferences, sporting events, and corporate functions. Coordinated group transport solutions.",
      features: [
        "Wedding party transport",
        "Conference shuttles",
        "Sports event transfers",
        "Group coordination",
        "Event planning support"
      ]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency taxi service for urgent transportation needs. Reliable service when you need it most.",
      features: [
        "24-hour availability",
        "Emergency response",
        "Hospital transfers",
        "Urgent business trips",
        "Same-day booking"
      ]
    }
  ];

  const scrollToBooking = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate to home page booking section
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
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6" data-testid="text-services-title">
              Professional Taxi Services
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-services-subtitle">
              Comprehensive transportation solutions across Durban and KwaZulu-Natal. From airport transfers to corporate transport, we deliver reliable service since 2010.
            </p>
            <Button 
              onClick={scrollToBooking}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 text-lg"
              data-testid="button-book-service"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your Service Now
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-heading">
              Complete Transportation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional taxi services tailored to meet all your transportation needs across KwaZulu-Natal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border" data-testid={`service-card-${index}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-3" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`service-description-${index}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3" data-testid={`feature-${index}-${featureIndex}`}>
                      <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-cta-title">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for reliable, professional taxi service across Durban and KZN. Fixed prices, licensed drivers, 24/7 availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              data-testid="button-book-now"
            >
              <Car className="w-5 h-5 mr-2" />
              Book Online Now
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-3"
              data-testid="button-call-direct"
            >
              <a href="tel:+27833423975" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call: +27 83 342 3975
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}