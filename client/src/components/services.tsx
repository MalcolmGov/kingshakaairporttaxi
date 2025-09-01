import { Plane, Building2, Briefcase, MapPin, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Plane className="text-primary-foreground w-6 h-6" />,
      title: "Airport Transfers",
      features: ["Fixed-price rides", "Professional drivers", "24/7 availability"]
    },
    {
      icon: <Building2 className="text-primary-foreground w-6 h-6" />,
      title: "City Transport", 
      features: ["Throughout KZN", "Hotels & malls", "Anywhere in SA"]
    },
    {
      icon: <Briefcase className="text-primary-foreground w-6 h-6" />,
      title: "Corporate Solutions",
      features: ["Employee shuttles", "Executive transport", "Event logistics"]
    },
    {
      icon: <MapPin className="text-primary-foreground w-6 h-6" />,
      title: "City Tours",
      features: ["Local expert guides", "Hidden gems", "KZN expertise"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted" data-testid="section-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Professional transportation solutions tailored to your needs throughout KwaZulu-Natal
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-card rounded-xl p-6 shadow-lg border border-border" data-testid={`card-service-${index}`}>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center" data-testid={`text-service-feature-${index}-${featureIndex}`}>
                    <Check className="text-accent mr-2 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
