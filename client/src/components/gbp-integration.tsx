import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";

export default function GBPIntegration() {
  const openGoogleMaps = () => {
    const mapsUrl = "https://maps.google.com/?q=King+Shaka+International+Airport,+La+Mercy,+KwaZulu-Natal";
    window.open(mapsUrl, '_blank');
  };

  const openGoogleBusiness = () => {
    const businessUrl = "https://g.page/r/CQoUqY8j_R2mEAg";
    window.open(businessUrl, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-gbp-integration">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-gbp-title">
            Find Us on Google Maps & Business
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12" data-testid="text-gbp-subtitle">
            Verified King Shaka Airport taxi service with top local rankings. Find directions, read customer reviews, and contact us directly through Google.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-shadow" data-testid="card-google-maps">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4" data-testid="text-maps-title">
                  Google Maps Directions
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="text-maps-description">
                  Get accurate directions to King Shaka International Airport and track our location for easy pickup coordination.
                </p>
                <Button
                  onClick={openGoogleMaps}
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black font-semibold hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400"
                  data-testid="button-open-maps"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-shadow" data-testid="card-google-business">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Star className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4" data-testid="text-business-title">
                  Google Business Profile
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="text-business-description">
                  View our verified business profile, read customer reviews, see photos, and check our 24/7 availability.
                </p>
                <Button
                  onClick={openGoogleBusiness}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-open-business"
                >
                  <Star className="w-4 h-4 mr-2" />
                  View Business Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-muted rounded-xl" data-testid="feature-verified">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Google Verified</h4>
              <p className="text-muted-foreground text-sm">Verified business profile with authentic customer reviews</p>
            </div>
            <div className="text-center p-6 bg-muted rounded-xl" data-testid="feature-hours">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">24/7 Availability</h4>
              <p className="text-muted-foreground text-sm">Always open for airport transfers and emergency transport</p>
            </div>
            <div className="text-center p-6 bg-muted rounded-xl" data-testid="feature-contact">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white w-6 h-6" />
              </div>
              <h4 className="font-bold text-foreground mb-2">Direct Contact</h4>
              <p className="text-muted-foreground text-sm">Call or message us directly through Google Business</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}