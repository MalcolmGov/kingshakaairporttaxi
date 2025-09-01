import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MessageCircle, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ReviewRequest() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Google Business Profile review link - direct business profile
  const reviewLink = "https://share.google/n2xxyy5tgFRSs1XB2";
  
  // QR code for the review link (using QR Server API)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(reviewLink)}`;

  const copyReviewLink = async () => {
    try {
      await navigator.clipboard.writeText(reviewLink);
      setCopied(true);
      toast({
        title: "Review Link Copied!",
        description: "Share this link with customers to collect reviews",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Please manually copy the review link",
        variant: "destructive",
      });
    }
  };

  const shareViaWhatsApp = () => {
    const message = `Hi! Thank you for choosing King Shaka Airport Taxi. If you enjoyed your ride, we'd appreciate a quick 5-star review! Here's the direct link to our Google Business Profile: ${reviewLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-testid="section-review-request">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-review-title">
              Share Your Experience with King Shaka Airport Taxi
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-review-subtitle">
              Help other travelers find our trusted taxi service. Your 5-star review helps us maintain our perfect safety record and excellent service reputation in KZN.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="shadow-xl" data-testid="card-review-qr">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-card-foreground mb-4" data-testid="text-qr-title">
                  Scan QR Code to Review
                </h3>
                <div className="inline-block p-4 bg-white rounded-lg shadow-lg mb-4">
                  <img 
                    src={qrCodeUrl} 
                    alt="QR Code for Google Review" 
                    className="w-48 h-48 mx-auto"
                    data-testid="img-review-qr"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  Point your phone camera at the QR code to leave a review
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-review-share-title">
                  Share Review Link
                </h3>
                <div className="bg-muted p-4 rounded-lg border border-border mb-4">
                  <p className="text-sm text-muted-foreground break-all" data-testid="text-review-link">
                    {reviewLink}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={copyReviewLink}
                    variant="outline"
                    className="flex-1"
                    data-testid="button-copy-review-link"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? "Copied!" : "Copy Link"}
                  </Button>
                  <Button
                    onClick={shareViaWhatsApp}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                    data-testid="button-share-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Share via WhatsApp
                  </Button>
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 rounded-xl border border-yellow-200">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <h4 className="font-bold text-foreground mb-2" data-testid="text-rating-title">
                  5-Star Rated Service
                </h4>
                <p className="text-muted-foreground text-sm" data-testid="text-rating-description">
                  Join 50+ satisfied customers who trust our professional airport taxi service throughout KZN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}