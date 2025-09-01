import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Safety from "@/components/safety";
import Reviews from "@/components/reviews";
import About from "@/components/about";
import BookingForm from "@/components/booking-form";
import VehicleShowcase from "@/components/vehicle-showcase";
import KznDestinations from "@/components/kzn-destinations";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Meta tags for SEO */}
      <head>
        <title>King Shaka Airport Taxi - Reliable & Affordable Rides in KZN | Since 2010</title>
        <meta name="description" content="Premium taxi service at King Shaka Airport. Over a decade of safe, reliable transportation throughout KwaZulu-Natal. Book your ride today!" />
        <meta property="og:title" content="King Shaka Airport Taxi - Reliable Transportation Since 2010" />
        <meta property="og:description" content="Professional taxi service with zero safety incidents. Serving King Shaka Airport and KwaZulu-Natal with pride since 2010." />
        <meta property="og:type" content="website" />
      </head>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Safety />
        <Reviews />
        <About />
        <BookingForm />
        <VehicleShowcase />
        <KznDestinations />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
