import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to Send",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 gradient-bg" data-testid="section-contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-contact-title">
              Ready to Travel?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed" data-testid="text-contact-description">
              Contact us today for reliable, professional transportation throughout KwaZulu-Natal. We're here 24/7 to serve you.
            </p>
            
            <div className="space-y-6">
              <a 
                href="tel:+27833423975" 
                className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 hover:bg-primary-foreground/20 transition-colors group"
                data-testid="link-contact-phone"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-accent-foreground w-6 h-6" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">Call Us Directly</p>
                  <p className="text-primary-foreground/80">+27 83 342 3975</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/27833423975" 
                className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 hover:bg-primary-foreground/20 transition-colors group"
                data-testid="link-contact-whatsapp"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">WhatsApp Booking</p>
                  <p className="text-primary-foreground/80">Instant responses</p>
                </div>
              </a>
              
              <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4" data-testid="contact-email">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-primary-foreground w-6 h-6" />
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold">Email Us</p>
                  <p className="text-primary-foreground/80">info@kingshakataxi.co.za</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-2xl" data-testid="card-contact-form">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="text-contact-form-title">
                Quick Contact Form
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Your Name" 
                            className="min-h-[44px]"
                            data-testid="input-contact-name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="Phone Number" 
                            className="min-h-[44px]"
                            data-testid="input-contact-phone"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Message or Booking Details" 
                            rows={4} 
                            className="resize-none"
                            data-testid="textarea-contact-message"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 min-h-[44px]"
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
