import { Button } from "@/components/ui/button";
import { Calendar, Shield, Clock, Users, CheckCircle, Star } from "lucide-react";
import logoImage from "../assets/king-shaka-logo.png";

export default function About() {
  const features = [
    {
      icon: <CheckCircle className="text-accent w-5 h-5" />,
      title: "Brilliant Client Service",
      description: "Dedicated to customer satisfaction"
    },
    {
      icon: <Clock className="text-accent w-5 h-5" />,
      title: "24/7 Support", 
      description: "Available around the clock"
    },
    {
      icon: <Users className="text-accent w-5 h-5" />,
      title: "Excellent Communication",
      description: "Clear and timely updates"
    },
    {
      icon: <Shield className="text-accent w-5 h-5" />,
      title: "Client Safety",
      description: "Your security is our priority"
    },
    {
      icon: <Star className="text-accent w-5 h-5" />,
      title: "Experienced Drivers",
      description: "Licensed professionals"
    },
    {
      icon: <Calendar className="text-accent w-5 h-5" />,
      title: "Easy Booking",
      description: "Simple and convenient"
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <img 
              src={logoImage} 
              alt="King Shaka Airport Taxi Official Logo" 
              className="rounded-xl shadow-2xl w-full mb-6 bg-white object-contain p-4"
              data-testid="img-company-logo"
            />
            <img 
              src="https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/shutterstock_627682721.jpg" 
              alt="King Shaka Airport Taxi Service vehicle waiting outside the terminal" 
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-airport-terminal"
            />
          </div>
          
          <div>
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6" data-testid="badge-since-2010">
              <Calendar className="w-4 h-4 mr-2" />
              Serving with Pride Since 2010
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6" data-testid="text-about-title">
              About King Shaka Airport Taxi
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed" data-testid="text-about-description">
              King Shaka Airport Taxi is a locally operated business that possesses an extensive fleet of commercial vehicles to meet your diverse transportation requirements from airport transfers to corporate travels and sightseeing tours.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed" data-testid="text-about-mission">
              We commit ourselves to delivering the service you deserve and not merely the one you need. With various models of cars and cabs on our fleet we can deliver on just about any ground transportation requirements for any number of passengers.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed" data-testid="text-about-safety">
              Due to the high volume of criminal activities with illegal operators and E-Hailing services, we are here to guarantee your safety as well as the safety of your loved ones during our services.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`about-feature-${index}`}>
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm" data-testid={`text-about-feature-title-${index}`}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs" data-testid={`text-about-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted rounded-lg p-4" data-testid="stat-experience">
                <div className="text-2xl font-bold text-primary mb-1">14+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="bg-muted rounded-lg p-4" data-testid="stat-safety">
                <div className="text-2xl font-bold text-primary mb-1">Zero</div>
                <div className="text-muted-foreground text-sm">Safety Incidents</div>
              </div>
            </div>
            
            <Button 
              onClick={scrollToBooking}
              className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              data-testid="button-book-ride"
            >
              Book A Ride
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
