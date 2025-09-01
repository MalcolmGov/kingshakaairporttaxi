import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car } from "lucide-react";

export default function PopularRoutes() {
  const routes = [
    {
      route: "King Shaka Airport to Durban CBD",
      duration: "45 minutes",
      description: "Direct airport transfer to Durban city center and business district",
      price: "From R450"
    },
    {
      route: "King Shaka Airport to Umhlanga",
      duration: "25 minutes", 
      description: "Quick transfer to Umhlanga Ridge hotels and business hub",
      price: "From R320"
    },
    {
      route: "King Shaka Airport to Ballito",
      duration: "15 minutes",
      description: "Short drive to beautiful Ballito coastal resorts",
      price: "From R250"
    },
    {
      route: "King Shaka Airport to Gateway Mall",
      duration: "30 minutes",
      description: "Shopping and entertainment destination transfer",
      price: "From R350"
    },
    {
      route: "King Shaka Airport to Pietermaritzburg",
      duration: "90 minutes",
      description: "Provincial capital city transfer service",
      price: "From R850"
    },
    {
      route: "King Shaka Airport to Underberg",
      duration: "3 hours",
      description: "Drakensberg gateway town for mountain adventures",
      price: "From R1500"
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
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-routes-title">
            Popular King Shaka Airport Transfer Routes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-routes-subtitle">
            Fixed-price airport transfers to top KZN destinations. Professional drivers, transparent pricing, and guaranteed on-time service to your destination.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {routes.map((route, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow" data-testid={`card-route-${index}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary-foreground w-5 h-5" />
                </div>
                <span className="text-primary font-bold text-lg" data-testid={`text-route-price-${index}`}>
                  {route.price}
                </span>
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