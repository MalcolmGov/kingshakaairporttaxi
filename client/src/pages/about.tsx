import { Button } from "@/components/ui/button";
import { Shield, Star, Users, Car, Phone, Calendar, Award } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";
import teamPhoto from "../assets/team-photo.jpg";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | King Shaka Airport Taxi | Professional Service Since 2010";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'About King Shaka Airport Taxi: Professional taxi service since 2010 in Durban, KZN. Licensed drivers, modern fleet, zero safety incidents, 24/7 airport transfers throughout KwaZulu-Natal.'
      );
    }
  }, []);

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started operations with a commitment to reliable, professional taxi service at King Shaka International Airport."
    },
    {
      year: "2015", 
      title: "Fleet Expansion",
      description: "Expanded our vehicle fleet to include luxury sedans, SUVs, and mini-buses to serve diverse customer needs."
    },
    {
      year: "2018",
      title: "Corporate Services",
      description: "Launched dedicated corporate transportation services for business travelers and events."
    },
    {
      year: "2020",
      title: "Digital Transformation", 
      description: "Implemented online booking system and enhanced customer communication for seamless service."
    },
    {
      year: "2025",
      title: "Modern Website",
      description: "Launched our comprehensive website with instant booking, WhatsApp integration, and enhanced customer experience."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Service", icon: <Calendar className="w-6 h-6" /> },
    { number: "10,000+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
    { number: "0", label: "Safety Incidents", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Availability", icon: <Car className="w-6 h-6" /> }
  ];

  const fleetDetails = [
    {
      type: "Luxury Sedans",
      description: "Premium vehicles for executive transport and special occasions",
      features: ["Air conditioning", "Leather seating", "Professional chauffeurs", "Wi-Fi available"]
    },
    {
      type: "SUVs & 4x4s", 
      description: "Spacious vehicles perfect for families and group travel",
      features: ["Extra luggage space", "Comfortable seating", "All-terrain capability", "Child seat friendly"]
    },
    {
      type: "Mini Buses",
      description: "Group transport solutions for events and corporate functions", 
      features: ["8+ passenger capacity", "Tour guide capability", "Group luggage storage", "Event coordination"]
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
      <section className="relative py-20 lg:py-32 bg-blue-600 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6" data-testid="text-about-title">
              About King Shaka Airport Taxi
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-about-subtitle">
              Professional taxi service since 2010. Trusted by thousands of customers across KwaZulu-Natal for reliable, safe, and professional transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-overview-title">
                Our Story Since 2010
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                King Shaka Airport Taxi began operations in 2010 with a simple mission: provide reliable, professional taxi service to and from King Shaka International Airport. Over 15 years, we've grown from a small local service to KwaZulu-Natal's trusted transportation provider.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
                Our commitment to safety, reliability, and customer service has earned us the trust of thousands of passengers. From individual travelers to corporate clients, we deliver consistent, professional service that exceeds expectations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Today, we operate a modern fleet of vehicles serving destinations across KZN, from Durban's Golden Mile to the Drakensberg Mountains, maintaining our founding principles of safety, reliability, and professional service.
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={scrollToBooking}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                  data-testid="button-book-about"
                >
                  <Car className="w-5 h-5 mr-2" />
                  Experience Our Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-stats-title">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-primary-foreground mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-timeline-title">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our journey from a local taxi service to KZN's trusted transportation provider.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} data-testid={`milestone-${index}`}>
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                      <div className="text-2xl font-bold text-primary mb-2" data-testid={`milestone-year-${index}`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-card-foreground mb-3" data-testid={`milestone-title-${index}`}>
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`milestone-description-${index}`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Information */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-fleet-title">
              Our Professional Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern, well-maintained vehicles designed for comfort, safety, and reliability across all service categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fleetDetails.map((vehicle, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border" data-testid={`fleet-card-${index}`}>
                <Car className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-card-foreground mb-4" data-testid={`fleet-type-${index}`}>
                  {vehicle.type}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`fleet-description-${index}`}>
                  {vehicle.description}
                </p>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3" data-testid={`fleet-feature-${index}-${featureIndex}`}>
                      <Award className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-cta-about-title">
            Experience Professional Service
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust King Shaka Airport Taxi for reliable, professional transportation across KZN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              data-testid="button-book-experience"
            >
              <Car className="w-5 h-5 mr-2" />
              Book Your Ride Now
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-3"
              data-testid="button-call-about"
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