import { Plane, Building2, Briefcase, MapPin, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Plane className="text-primary-foreground w-6 h-6" />,
      title: "King Shaka Airport Transfers",
      features: ["Fixed-price airport rides", "Licensed professional drivers", "24/7 airport availability"]
    },
    {
      icon: <Building2 className="text-primary-foreground w-6 h-6" />,
      title: "Durban City Transport", 
      features: ["Throughout KZN destinations", "Hotels & Gateway mall", "Umhlanga & Ballito routes"]
    },
    {
      icon: <Briefcase className="text-primary-foreground w-6 h-6" />,
      title: "Corporate Transport KZN",
      features: ["Business travel solutions", "Executive airport transport", "Corporate event logistics"]
    },
    {
      icon: <MapPin className="text-primary-foreground w-6 h-6" />,
      title: "KZN Tourism & City Tours",
      features: ["Local KZN expert guides", "Tourist destination transfers", "Durban sightseeing tours"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted" data-testid="section-services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Professional Airport Transfer Services KZN
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Complete King Shaka Airport taxi solutions including corporate transport, city tours, and 24/7 reliable transfers throughout KwaZulu-Natal with licensed professional drivers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group service-card bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl border border-blue-100 dark:border-blue-900/30 transition-all duration-300 hover:-translate-y-2 hover:scale-105" data-testid={`card-service-${index}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <div className="text-white text-xl">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <ul className="text-muted-foreground space-y-3 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" data-testid={`text-service-feature-${index}-${featureIndex}`}>
                    <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
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
