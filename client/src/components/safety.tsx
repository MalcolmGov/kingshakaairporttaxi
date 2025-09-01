import { Tag, Shield, Clock, Heart } from "lucide-react";

export default function Safety() {
  const safetyFeatures = [
    {
      icon: <Tag className="text-accent-foreground w-4 h-4" />,
      title: "Licensed Drivers",
      description: "Professional, vetted drivers with proper licensing"
    },
    {
      icon: <Shield className="text-accent-foreground w-4 h-4" />,
      title: "Zero Incidents", 
      description: "Perfect safety record since 2010"
    },
    {
      icon: <Clock className="text-accent-foreground w-4 h-4" />,
      title: "Decade of Experience",
      description: "Trusted service since 2010"
    },
    {
      icon: <Heart className="text-accent-foreground w-4 h-4" />,
      title: "Your Loved Ones",
      description: "Guaranteed safe transport for family"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-safety">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 px-4 sm:px-0" data-testid="text-safety-title">
              Safe & Licensed King Shaka Airport Taxi Service
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0" data-testid="text-safety-description">
              With over 14 years serving KwaZulu-Natal airport transfers, we guarantee safe transport versus illegal operators and unreliable ride-sharing services. Licensed professional drivers, zero safety incidents, and complete peace of mind for your journey.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`safety-feature-${index}`}>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1" data-testid={`text-safety-feature-title-${index}`}>
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`text-safety-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional taxi fleet" 
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-taxi-fleet"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl" data-testid="badge-experience">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-lg">14+</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Years</p>
                  <p className="text-muted-foreground text-sm">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
