import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="KwaZulu-Natal landscape" 
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-kzn-landscape"
            />
          </div>
          
          <div>
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6" data-testid="badge-since-2010">
              <Calendar className="w-4 h-4 mr-2" />
              Serving with Pride Since 2010
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
              Expert Knowledge of KwaZulu-Natal
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description">
              For over a decade, we've been delivering clients safely and timeously throughout KwaZulu-Natal. Our experience speaks for itself - zero comebacks, zero safety incidents, and thousands of satisfied customers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted rounded-lg p-4" data-testid="stat-customers">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-muted-foreground text-sm">Happy Customers</div>
              </div>
              <div className="bg-muted rounded-lg p-4" data-testid="stat-experience">
                <div className="text-2xl font-bold text-primary mb-1">14+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
            </div>
            
            <Button 
              className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              data-testid="button-learn-more"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
