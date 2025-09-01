import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function VehicleShowcase() {
  const scrollToBookingWithVehicle = (vehicleName: string) => {
    // Store selected vehicle in localStorage for the booking form
    localStorage.setItem('selectedVehicle', vehicleName);
    
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const vehicles = [
    {
      name: "Hatchbacks",
      capacity: "3 Seater",
      image: "https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/car.06.46-1024x768.jpeg",
      alt: "King Shaka Airport Taxi Hatchback"
    },
    {
      name: "Sedan",
      capacity: "3 Seater",
      image: "https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-05-at-09.06.45-1.jpeg",
      alt: "King Shaka Airport Taxi Sedan"
    },
    {
      name: "SUV",
      capacity: "3 Seater", 
      image: "https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/motor-vehicle.06.45-1024x768.jpeg",
      alt: "King Shaka Airport Taxi SUV"
    },
    {
      name: "Luxury Cabs",
      capacity: "3 Seater",
      image: "https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-20.19.30.jpeg",
      alt: "King Shaka Airport Taxi Luxury Cab"
    },
    {
      name: "Mini Bus",
      capacity: "8 Seater",
      image: "https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-05-at-09.09.25.jpeg",
      alt: "King Shaka branded Mini Bus for group transfers"
    },
    {
      name: "Vehicle of Choice",
      capacity: "Personalized",
      image: "https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/cars-june112020.jpg",
      alt: "Fleet of King Shaka Airport Taxi cars lined up outside the airport terminal"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-vehicles">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-vehicles-title">
            King Shaka Airport Taxi Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-vehicles-subtitle">
            Professional airport transfer vehicles serving Durban, Umhlanga, Ballito and all KZN destinations. Clean, comfortable, and regularly serviced for optimal safety and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-card border border-border" data-testid={`card-vehicle-${index}`}>
              <img 
                src={vehicle.image} 
                alt={vehicle.alt} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-vehicle-${index}`}
              />
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground text-lg mb-1" data-testid={`text-vehicle-name-${index}`}>
                  {vehicle.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3" data-testid={`text-vehicle-capacity-${index}`}>
                  {vehicle.capacity}
                </p>
                <Button 
                  onClick={() => scrollToBookingWithVehicle(vehicle.name)}
                  size="sm"
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black font-semibold hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 border border-yellow-300"
                  data-testid={`button-book-vehicle-${index}`}
                >
                  <Car className="w-4 h-4 mr-2" />
                  Book This Vehicle
                </Button>
              </div>
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <span className="font-semibold text-lg block" data-testid={`text-vehicle-hover-name-${index}`}>
                    {vehicle.name}
                  </span>
                  <span className="text-sm" data-testid={`text-vehicle-hover-capacity-${index}`}>
                    {vehicle.capacity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
