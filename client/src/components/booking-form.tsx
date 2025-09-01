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
📍 Route: ${data.pickup} → ${data.destination}

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
      setLastBookingData(variables);
      
      console.log('Booking submitted successfully:', variables);
      
      // Immediately open WhatsApp with booking details
      const primaryNumber = "27833423975";
      const message = formatBookingMessage(variables);
      const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${primaryNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappWebUrl, '_blank');
      
      toast({
        title: "Booking Sent to WhatsApp!",
        description: "Your booking details have been opened in WhatsApp. Send the message to confirm your ride.",
      });
      
      // Reset form after successful submission
      form.reset();
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
    bookingMutation.mutate(data);
  };


  return (
    <section id="booking" className="py-16 lg:py-24 gradient-bg" data-testid="section-booking">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#1f2937' }} data-testid="text-booking-title">
              Book King Shaka Airport Taxi Online
            </h2>
            <p className="text-lg sm:text-xl" style={{ color: '#374151', fontWeight: '500' }} data-testid="text-booking-subtitle">
              Professional airport transfers throughout KZN. Licensed drivers, 24/7 availability, reliable service
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
                        <FormControl>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 z-10" />
                            <Input 
                              type="number"
                              min="1"
                              max="50"
                              placeholder="Enter number of passengers"
                              className="pl-10 min-h-[44px]" 
                              data-testid="input-passengers"
                              value={field.value || ''}
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                            />
                          </div>
                        </FormControl>
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
                      type="submit" 
                      disabled={bookingMutation.isPending}
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
