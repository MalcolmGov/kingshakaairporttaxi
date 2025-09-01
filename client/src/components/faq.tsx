import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I book a ride?",
      answer: "You can book through our online form, call us directly, or send us a WhatsApp message. We offer instant price calculations and confirmation."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve King Shaka International Airport and all areas throughout KwaZulu-Natal, including Durban, Pietermaritzburg, and beyond. We can travel anywhere in South Africa."
    },
    {
      question: "Are your rates fixed?",
      answer: "Yes, we offer fixed-price rates with no surge pricing or hidden fees. You'll know the exact cost upfront with our instant price calculator."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "All our drivers are licensed professionals with over a decade of experience. We maintain a zero safety incident record and provide guaranteed safe transport for you and your loved ones."
    },
    {
      question: "Do you operate 24/7?",
      answer: "Yes, we provide 24/7 service for airport transfers and emergency transportation. Our drivers are always available to serve you."
    },
    {
      question: "Can you provide corporate transportation?",
      answer: "Absolutely! We offer corporate solutions including employee shuttles, executive transportation, and event logistics. Contact us for customized corporate packages."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-faq-subtitle">
              Everything you need to know about our service
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg" data-testid={`faq-item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-muted transition-colors text-left" data-testid={`faq-trigger-${index}`}>
                  <span className="font-semibold text-card-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4" data-testid={`faq-content-${index}`}>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
