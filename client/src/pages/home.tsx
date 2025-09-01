import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Safety from "@/components/safety";
import Reviews from "@/components/reviews";
import ReviewRequest from "@/components/review-request";
import GBPIntegration from "@/components/gbp-integration";
import About from "@/components/about";
import BookingForm from "@/components/booking-form";
import Gallery from "@/components/gallery";
import VehicleShowcase from "@/components/vehicle-showcase";
import KznDestinations from "@/components/kzn-destinations";
import PopularRoutes from "@/components/popular-routes";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Safety />
        <Reviews />
        <ReviewRequest />
        <About />
        <BookingForm />
        <Gallery />
        <VehicleShowcase />
        <PopularRoutes />
        <KznDestinations />
        <FAQ />
        <Contact />
        <GBPIntegration />
        <Footer />
        <WhatsAppFloat />
      </div>
  );
}
