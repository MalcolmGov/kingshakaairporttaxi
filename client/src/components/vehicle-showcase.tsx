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
      name: "Sedan",
      capacity: "3 Seater",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "King Shaka Airport Taxi Sedan"
    },
    {
      name: "SUV",
      capacity: "5 Seater", 
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "King Shaka Airport Taxi SUV"
    },
    {
      name: "Luxury Vehicle",
      capacity: "3 Seater",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "King Shaka Airport Taxi Luxury Vehicle"
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
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-card border border-border" data-testid={`card-vehicle-${index}`}>
              <img 
                src={vehicle.image} 
                alt={vehicle.alt} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-vehicle-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
