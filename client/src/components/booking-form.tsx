import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Calendar, Clock, Users, Phone, CalendarCheck, Car, MessageCircle } from "lucide-react";

const bookingFormSchema = insertBookingSchema.extend({
  date: insertBookingSchema.shape.date.refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Please select a future date"),
});

export default function BookingForm() {
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [showWhatsAppConfirmation, setShowWhatsAppConfirmation] = useState(false);
  const [lastBookingData, setLastBookingData] = useState<InsertBooking | null>(null);
  const { toast } = useToast();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      pickup: "",
      destination: "",
      date: "",
      time: "",
      passengers: 1,
      vehicleType: "",
      contactNumber: "",
      name: "",
      estimatedPrice: 0,
    },
  });

  // Check for pre-selected vehicle from fleet section
  useEffect(() => {
    const selectedVehicle = localStorage.getItem('selectedVehicle');
    if (selectedVehicle) {
      form.setValue('vehicleType', selectedVehicle);
      localStorage.removeItem('selectedVehicle');
    }
  }, [form]);

  // Price calculation mutation
  const calculatePriceMutation = useMutation({
    mutationFn: async (data: { pickup: string; destination: string; passengers: number }) => {
      const response = await apiRequest("POST", "/api/calculate-price", data);
      return response.json();
    },
    onSuccess: (data) => {
      setEstimatedPrice(data.estimatedPrice);
      form.setValue("estimatedPrice", data.estimatedPrice);
    },
  });

  // WhatsApp message formatting function
  const formatBookingMessage = (data: InsertBooking) => {
    return `🚗 TAXI BOOKING REQUEST

👤 Name: ${data.name}
📞 Phone: ${data.contactNumber}

📍 From: ${data.pickup}
📍 To: ${data.destination}
📅 Date: ${data.date}
🕐 Time: ${data.time}
👥 Passengers: ${data.passengers}
🚙 Vehicle: ${data.vehicleType}
💰 Estimated Fare: R${data.estimatedPrice}

Please confirm availability and pickup time.

King Shaka Airport Taxi - Since 2010`;
  };

  const handleWhatsAppBooking = () => {
    if (!lastBookingData) {
      console.error('No booking data available');
      return;
    }
    
    const primaryNumber = "27833423975";
    const message = formatBookingMessage(lastBookingData);
    
    // Force WhatsApp Web to ensure pre-filled messages work
    const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${primaryNumber}&text=${encodeURIComponent(message)}`;
    console.log('WhatsApp Web URL:', whatsappWebUrl);
    
    // Open WhatsApp Web specifically
    window.open(whatsappWebUrl, '_blank');
  };

  // Booking submission mutation
  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: (_, variables) => {
      // Store booking data and immediately open WhatsApp
      const bookingDataWithPrice = { ...variables, estimatedPrice: estimatedPrice || 0 };
      setLastBookingData(bookingDataWithPrice);
      
      console.log('Booking submitted successfully:', bookingDataWithPrice);
      
      // Immediately open WhatsApp with booking details
      const primaryNumber = "27833423975";
      const message = formatBookingMessage(bookingDataWithPrice);
      const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${primaryNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappWebUrl, '_blank');
      
      toast({
        title: "Booking Sent to WhatsApp!",
        description: "Your booking details have been opened in WhatsApp. Send the message to confirm your ride.",
      });
      
      // Reset form after successful submission
      form.reset();
      setEstimatedPrice(null);
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBooking) => {
    if (!estimatedPrice) {
      toast({
        title: "Please calculate price first",
        description: "Fill in pickup and destination to get an estimate.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate(data);
  };

  const handleCalculatePrice = () => {
    const pickup = form.getValues("pickup");
    const destination = form.getValues("destination");
    const passengers = form.getValues("passengers");

    if (!pickup || !destination) {
      toast({
        title: "Missing Information",
        description: "Please enter both pickup and destination.",
        variant: "destructive",
      });
      return;
    }

    calculatePriceMutation.mutate({ pickup, destination, passengers });
  };

  return (
    <section id="booking" className="py-16 lg:py-24 gradient-bg" data-testid="section-booking">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4" data-testid="text-booking-title">
              Book King Shaka Airport Taxi Online
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90" data-testid="text-booking-subtitle">
              Instant quotes for airport transfers. Fixed prices, professional drivers, 24/7 availability throughout KZN
            </p>
          </div>
          
          <Card className="shadow-2xl" data-testid="card-booking-form">
            <CardContent className="p-4 sm:p-6 lg:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="pickup"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 lg:col-span-1">
                        <FormLabel>Pick-up Location</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input 
                              placeholder="Enter pick-up address" 
                              className="pl-10 min-h-[44px]"
                              data-testid="input-pickup"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2 lg:col-span-1">
                        <FormLabel>Destination</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input 
                              placeholder="Enter destination" 
                              className="pl-10 min-h-[44px]"
                              data-testid="input-destination"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pick-up Date</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input 
                              type="date" 
                              className="pl-10 min-h-[44px]"
                              data-testid="input-date"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pick-up Time</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input 
                              type="time" 
                              className="pl-10 min-h-[44px]"
                              data-testid="input-time"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="passengers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passengers</FormLabel>
                        <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value?.toString()}>
                          <FormControl>
                            <div className="relative">
                              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
                              <SelectTrigger className="pl-10 min-h-[44px]" data-testid="select-passengers">
                                <SelectValue placeholder="Select passengers" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 Passenger</SelectItem>
                            <SelectItem value="2">2 Passengers</SelectItem>
                            <SelectItem value="3">3 Passengers</SelectItem>
                            <SelectItem value="4">4+ Passengers</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="vehicleType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || ""}>
                          <FormControl>
                            <div className="relative">
                              <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
                              <SelectTrigger className="pl-10 min-h-[44px]" data-testid="select-vehicle-type">
                                <SelectValue placeholder="Select vehicle type" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Hatchbacks">Hatchbacks (3 Seater)</SelectItem>
                            <SelectItem value="Sedan">Sedan (3 Seater)</SelectItem>
                            <SelectItem value="SUV">SUV (3 Seater)</SelectItem>
                            <SelectItem value="Luxury Cabs">Luxury Cabs (3 Seater)</SelectItem>
                            <SelectItem value="Mini Bus">Mini Bus (8 Seater)</SelectItem>
                            <SelectItem value="Vehicle of Choice">Vehicle of Choice (Personalized)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your name" 
                            className="min-h-[44px]"
                            data-testid="input-name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                            <Input 
                              type="tel" 
                              placeholder="+27 83 342 3975" 
                              className="pl-10 min-h-[44px]"
                              data-testid="input-contact"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="md:col-span-2 space-y-6">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={handleCalculatePrice}
                      disabled={calculatePriceMutation.isPending}
                      className="w-full min-h-[44px]"
                      data-testid="button-calculate-price"
                    >
                      {calculatePriceMutation.isPending ? "Calculating..." : "Calculate Price"}
                    </Button>

                    {estimatedPrice && (
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4" data-testid="price-display">
                        <div className="flex justify-between items-center">
                          <span className="text-accent-foreground font-medium">Estimated Price:</span>
                          <span className="text-2xl font-bold text-accent" data-testid="text-estimated-price">
                            R {estimatedPrice}
                          </span>
                        </div>
                        <p className="text-accent-foreground/70 text-sm mt-1">
                          Fixed rates • No surge pricing • No hidden fees
                        </p>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      disabled={bookingMutation.isPending || !estimatedPrice}
                      className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 min-h-[44px]"
                      data-testid="button-whatsapp-booking"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {bookingMutation.isPending ? "Sending to WhatsApp..." : "📱 Send Booking to WhatsApp"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
