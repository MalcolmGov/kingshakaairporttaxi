import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import fleetVehicle1 from "@assets/WhatsApp Image 2025-09-01 at 14.57.10_1756985085623.jpeg";
import fleetVehicle2 from "@assets/WhatsApp Image 2025-09-01 at 14.57.09_1756985085623.jpeg";
import fleetVehicle3 from "@assets/WhatsApp Image 2025-09-01 at 14.57.05_1756985085624.jpeg";

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
      name: "Professional Fleet Vehicle",
      capacity: "3 Seater",
      image: fleetVehicle1,
      alt: "King Shaka Airport Taxi Professional Vehicle"
    },
    {
      name: "Comfort Sedan",
      capacity: "4 Seater", 
      image: fleetVehicle2,
      alt: "King Shaka Airport Taxi Comfort Sedan"
    },
    {
      name: "Executive Transport",
      capacity: "3 Seater",
      image: fleetVehicle3,
      alt: "King Shaka Airport Taxi Executive Vehicle"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-vehicles">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-vehicles-title">
            King Shaka Airport Taxi Fleet
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-vehicles-subtitle">
            Professional airport transfer vehicles serving Durban, Umhlanga, Ballito and all KZN destinations. Clean, comfortable, and regularly serviced for optimal safety and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-card border border-border hover:shadow-xl transition-shadow duration-300" data-testid={`card-vehicle-${index}`}>
              <div className="h-80 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-vehicle-${index}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`text-vehicle-name-${index}`}>
                  {vehicle.name}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-vehicle-capacity-${index}`}>
                  {vehicle.capacity}
                </p>
                <Button 
                  onClick={() => scrollToBookingWithVehicle(vehicle.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid={`button-book-vehicle-${index}`}
                >
                  <Car className="mr-2 h-4 w-4" />
                  Book This Vehicle
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
