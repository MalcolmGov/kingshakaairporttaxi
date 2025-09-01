import { Star } from "lucide-react";

export default function Reviews() {
  const testimonials = [
    {
      name: "Sarah Anderson",
      role: "International Traveler",
      initials: "SA",
      review: "Friendly, accommodating service that went above and beyond. The driver even helped me get to the airport counter with my luggage!"
    },
    {
      name: "Michael Davis", 
      role: "Business Executive",
      initials: "MD",
      review: "Excellent personality and professionalism. The vehicle was neat and tidy, creating such a warm, welcoming atmosphere."
    },
    {
      name: "Linda Johnson",
      role: "Frequent Traveler", 
      initials: "LJ",
      review: "Reliable service with expert knowledge of KZN. Always on time and professional - exactly what you need for airport transfers."
    }
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-muted" data-testid="section-reviews">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-reviews-title">
            Best King Shaka Airport Taxi Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-reviews-subtitle">
            5-star rated airport taxi service trusted by thousands of travelers. Read real customer experiences with our professional Durban airport transfer service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-card rounded-xl p-6 shadow-lg border border-border" data-testid={`card-testimonial-${index}`}>
              <div className="flex items-center mb-4">
                <div className="flex text-accent" data-testid={`rating-stars-${index}`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic" data-testid={`text-testimonial-review-${index}`}>
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3" data-testid={`avatar-testimonial-${index}`}>
                  <span className="text-primary-foreground font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm" data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
