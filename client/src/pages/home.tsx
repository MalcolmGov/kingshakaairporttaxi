import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Safety from "@/components/safety";
import Reviews from "@/components/reviews";
import About from "@/components/about";
import BookingForm from "@/components/booking-form";
import VehicleShowcase from "@/components/vehicle-showcase";
import KznDestinations from "@/components/kzn-destinations";
import PopularRoutes from "@/components/popular-routes";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Safety />
        <Reviews />
        <About />
        <BookingForm />
        <VehicleShowcase />
        <PopularRoutes />
        <KznDestinations />
        <FAQ />
        <Contact />
        <Footer />
      </div>
  );
}
