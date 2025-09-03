import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Phone, Star } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function ServiceAreasPage() {
  useEffect(() => {
    document.title = "Service Areas | King Shaka Airport Taxi | Durban, Umhlanga, Ballito, PMB";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'King Shaka Airport taxi service areas: Durban CBD, Umhlanga, Ballito, Pietermaritzburg, Richards Bay, Newcastle. Professional transfers throughout KwaZulu-Natal since 2010.'
      );
    }
  }, []);

  const serviceAreas = [
    {
      name: "Durban CBD",
      distance: "35km from King Shaka Airport",
      duration: "30-40 minutes",
      description: "Central business district transfers including hotels, offices, and major attractions like uShaka Marine World and Golden Mile beachfront.",
      landmarks: [
        "Durban City Hall",
        "uShaka Marine World", 
        "Golden Mile Beachfront",
        "Moses Mabhida Stadium",
        "Durban ICC"
      ],
      image: "/assets/durban-cbd.jpg"
    },
    {
      name: "Umhlanga",
      distance: "15km from King Shaka Airport", 
      duration: "15-20 minutes",
      description: "Popular coastal suburb with luxury hotels, shopping centers, and business districts. Quick and convenient airport transfers.",
      landmarks: [
        "Gateway Theatre of Shopping",
        "Umhlanga Lighthouse",
        "Umhlanga Rocks Beach",
        "Beverly Hills Hotel",
        "Pearls Mall"
      ],
      image: "/assets/umhlanga.jpg"
    },
    {
      name: "Ballito",
      distance: "25km from King Shaka Airport",
      duration: "20-25 minutes", 
      description: "Coastal holiday destination with beautiful beaches, resorts, and family attractions. Popular for tourism and business conferences.",
      landmarks: [
        "Ballito Beach",
        "Lifestyle Centre",
        "Crocodile Creek",
        "Ballito Junction",
        "Thompson's Bay Beach"
      ],
      image: "/assets/ballito.jpg"
    },
    {
      name: "Pietermaritzburg",
      distance: "90km from King Shaka Airport",
      duration: "75-90 minutes",
      description: "Capital city of KwaZulu-Natal with rich history, government offices, and university campuses. Professional long-distance transfers.",
      landmarks: [
        "KZN Legislative Assembly",
        "University of KwaZulu-Natal",
        "Tatham Art Gallery", 
        "Pietermaritzburg City Hall",
        "World's View"
      ],
      image: "/assets/pmb.jpg"
    },
    {
      name: "Richards Bay",
      distance: "180km from King Shaka Airport",
      duration: "2-2.5 hours",
      description: "Major industrial port city with business centers, harbors, and nature reserves. Reliable long-distance corporate transfers.",
      landmarks: [
        "Richards Bay Harbour",
        "Alkantstrand Beach",
        "Meerensee",
        "Boardwalk Inkwazi Shopping Centre",
        "Hluhluwe-iMfolozi Park (nearby)"
      ],
      image: "/assets/richards-bay.jpg"
    },
    {
      name: "Newcastle",
      distance: "300km from King Shaka Airport", 
      duration: "3-3.5 hours",
      description: "Industrial city in northern KZN with mining and manufacturing sectors. Professional long-distance business transfers.",
      landmarks: [
        "Newcastle Mall",
        "Fort Amiel Museum",
        "Chelmsford Nature Reserve",
        "Newcastle Country Club",
        "Drakensberg Mountains (nearby)"
      ],
      image: "/assets/newcastle.jpg"
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
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6" data-testid="text-areas-title">
              Service Areas
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-areas-subtitle">
              Professional taxi service throughout KwaZulu-Natal. From Durban CBD to Newcastle, we provide reliable airport transfers and transportation across the province.
            </p>
            <Button 
              onClick={scrollToBooking}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 text-lg"
              data-testid="button-book-area"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Book Your Area Transfer
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-areas-heading">
              Where We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coverage across KwaZulu-Natal with professional drivers who know every route, landmark, and destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border" data-testid={`area-card-${index}`}>
                <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/40 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2" data-testid={`area-title-${index}`}>
                    {area.name}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{area.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{area.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`area-description-${index}`}>
                    {area.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Key Landmarks & Destinations:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {area.landmarks.map((landmark, landmarkIndex) => (
                        <div key={landmarkIndex} className="flex items-center gap-2" data-testid={`landmark-${index}-${landmarkIndex}`}>
                          <Star className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{landmark}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToBooking}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    data-testid={`button-book-${index}`}
                  >
                    <Car className="w-4 h-4 mr-2" />
                    Book Transfer to {area.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-coverage-title">
              Complete KZN Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From coastal cities to inland destinations, we provide reliable taxi service across the entire province of KwaZulu-Natal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center" data-testid="coverage-coastal">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Coastal Areas</h3>
              <p className="text-muted-foreground">Durban, Umhlanga, Ballito, Richards Bay and all coastal destinations</p>
            </div>
            <div className="text-center" data-testid="coverage-inland">
              <Car className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Inland Cities</h3>
              <p className="text-muted-foreground">Pietermaritzburg, Newcastle, Ladysmith and major inland centers</p>
            </div>
            <div className="text-center" data-testid="coverage-rural">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">24/7 Service</h3>
              <p className="text-muted-foreground">Round-the-clock availability for all destinations across KZN</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              data-testid="button-call-coverage"
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