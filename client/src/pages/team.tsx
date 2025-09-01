import { Button } from "@/components/ui/button";
import { Phone, Users, Star, Calendar } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TeamPage() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      text: "My husband & I arrived at King Shaka Airport last night exhausted. We were pleasantly greeted by Gyan from the above taxi service. Asked if we needed a ride home & promptly assisted with our luggage etc. Excellent personality & we were relieved to go home immediately. Very good service all the way home & even carried our luggage right to our door.",
      author: "Nirmala Maharaj"
    },
    {
      text: "I booked a taxi to the airport for my grandfather in law. We were a bit concerned that he would be travelling alone. King Shaka airport taxi ensured that he was well taken care of. They even took him directly to the airport counter. Their service goes above and beyond a taxi service. You will not go wrong with booking them. Thanks for the great service.",
      author: "Beejal Manilall"
    },
    {
      text: "What an awesome experience and could not have started my trip better with someone that has lived and breathed the place and welcomes you with a warm and welcoming environment and atmosphere, his conversations would keep you engaged for hours I'm sure. I would not travel with anyone else when this side again and If you are reading this I recommend you do the same! Thanks so much for an awesome trip man!",
      author: "Devon Pateman"
    },
    {
      text: "If you're coming to Durban, be on the lookout for the friendly King Shaka Airport Taxi service! The gentleman that helped us was so friendly and accommodating and I will for sure be contacting them whenever I am in Durban again 😃. 10/10 excellent service as it should be. Neat and tidy car as well 🙂 and fantastic music taste!",
      author: "Jessica Cronje"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-500/30"></div>
          <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-orange-400/20"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-blue-300/20"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-yellow-500/25"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-1/4 w-20 h-20 rotate-45 bg-yellow-500"></div>
          <div className="absolute bottom-24 left-1/3 w-16 h-16 rotate-12 bg-orange-400"></div>
          <div className="absolute top-1/3 left-10 w-12 h-12 rotate-45 bg-blue-300"></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-900/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6" data-testid="badge-team">
              <Users className="w-4 h-4 mr-2" />
              The Hardworking Faces Ensuring Your Comfort and Safe Journeys Every Time
            </div>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6" data-testid="text-team-title">
              Our Expert Team
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-team-subtitle">
              Pictured here is the dedicated crew that forms the backbone of King Shaka Airport Taxi. Each individual, with their unique strengths and expertise, contributes significantly to our esteemed reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://kingshakaairporttaxi.co.za/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-05-at-10.38.58.jpeg" 
              alt="King Shaka Airport Taxi Team" 
              className="rounded-2xl shadow-2xl w-full mb-8"
              data-testid="img-team-photo"
            />
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-background rounded-lg p-6 shadow-lg" data-testid="team-highlight-drivers">
                <Users className="text-primary w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Expert Drivers</h3>
                <p className="text-muted-foreground">
                  Our drivers, with their unparalleled knowledge of local routes, ensure you're always on the quickest path.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-lg" data-testid="team-highlight-service">
                <Phone className="text-primary w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Customer Service</h3>
                <p className="text-muted-foreground">
                  Our customer service staff, attentive and proactive, is always eager to assist and ensure your journey is planned perfectly.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-lg" data-testid="team-highlight-experience">
                <Star className="text-primary w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Professional Experience</h3>
                <p className="text-muted-foreground">
                  Together, their collective efforts and dedication ensure every ride with us is smooth, timely, and tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6" data-testid="badge-experience">
              <Calendar className="w-4 h-4 mr-2" />
              Serving You Since the Airport Opened in 2010
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" data-testid="text-experience-title">
              Over a Decade of Excellence
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-experience-description">
              We have ever since been transporting travelers throughout KZN with over a decade experience and zero comebacks we have managed to deliver all our clients safely and timeously. Our drivers are all well experienced licensed professionals and would be able to guide you swiftly and safely throughout KZN.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed" data-testid="text-team-philosophy">
              It's not just about transport; it's about the entire experience, and this team is the reason we stand out in the world of travel.
            </p>

            <Button 
              onClick={scrollToBooking}
              size="lg"
              className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              data-testid="button-book-ride"
            >
              Book A Ride
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-testimonials-subtitle">
              Real experiences from our valued customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-lg" data-testid={`testimonial-${index}`}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-testimonial-${index}`}>
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground" data-testid={`text-author-${index}`}>
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}