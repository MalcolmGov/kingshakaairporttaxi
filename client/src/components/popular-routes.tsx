import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car } from "lucide-react";

export default function PopularRoutes() {
  const routes = [
    {
      route: "King Shaka Airport to Durban CBD",
      duration: "45 minutes",
      description: "Direct airport transfer to Durban city center and business district"
    },
    {
      route: "King Shaka Airport to Umhlanga",
      duration: "25 minutes", 
      description: "Quick transfer to Umhlanga Ridge hotels and business hub"
    },
    {
      route: "King Shaka Airport to Ballito",
      duration: "15 minutes",
      description: "Short drive to beautiful Ballito coastal resorts"
    },
    {
      route: "Margate to Port Shepstone",
      duration: "30 minutes",
      description: "Coastal South Coast route transfer"
    },
    {
      route: "King Shaka Airport to Pietermaritzburg",
      duration: "90 minutes",
      description: "Provincial capital city transfer service"
    },
    {
      route: "King Shaka to St Lucia",
      duration: "1 hour",
      description: "Coastal wetland paradise and wildlife destination"
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-popular-routes">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-routes-title">
            Popular King Shaka Airport Transfer Routes
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-routes-subtitle">
            Professional airport transfers to top KZN destinations. Experienced drivers, reliable service, and guaranteed on-time transport to your destination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {routes.map((route, index) => (
            <div key={index} className="bg-card rounded-xl p-4 sm:p-6 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid={`card-route-${index}`}>
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-foreground w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2" data-testid={`text-route-name-${index}`}>
                {route.route}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3" data-testid={`text-route-description-${index}`}>
                {route.description}
              </p>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4" data-testid={`text-route-duration-${index}`}>
                <Clock className="w-4 h-4 mr-2" />
                {route.duration}
              </div>
              
              <Button 
                onClick={scrollToBooking}
                size="sm"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid={`button-book-route-${index}`}
              >
                <Car className="w-4 h-4 mr-2" />
                Book This Route
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToBooking}
            size="lg"
            className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
            data-testid="button-book-any-route"
          >
            Book Airport Transfer Now
          </Button>
          <p className="text-muted-foreground mt-4 text-sm" data-testid="text-custom-route">
            Need transport to a different destination? We serve all areas throughout KZN and South Africa.
          </p>
        </div>
      </div>
    </section>
  );
}