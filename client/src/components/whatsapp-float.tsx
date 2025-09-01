import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+27833423975"; // Primary contact number
    const message = "Hi! I'm interested in booking a taxi service with King Shaka Airport Taxi.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        data-testid="button-whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
}