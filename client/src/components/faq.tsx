import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How much does a taxi cost from King Shaka Airport to Durban CBD?",
      answer: "Our fixed-price airport transfers start from competitive rates with no surge pricing. Use our online booking form for instant price calculations, or call +27 83 342 3975 for immediate quotes."
    },
    {
      question: "What areas do you serve from King Shaka Airport?",
      answer: "We provide airport transfers throughout KwaZulu-Natal including Durban CBD, Umhlanga, Ballito, Gateway Mall, Pietermaritzburg, and all KZN destinations. Professional transport anywhere in South Africa."
    },
    {
      question: "Are your airport taxi rates fixed?",
      answer: "Yes, we offer transparent fixed-price airport transfers with no surge pricing or hidden fees. Book online for instant price calculations or call for immediate quotes."
    },
    {
      question: "Why choose King Shaka Airport Taxi over ride-sharing apps?",
      answer: "Licensed professional drivers with 14+ years experience, zero safety incidents, guaranteed availability, fixed rates, and local KZN expertise. Safe alternative to illegal operators and unreliable ride-sharing services."
    },
    {
      question: "Do you operate 24/7 from King Shaka Airport?",
      answer: "Yes, we provide 24/7 airport taxi service with professional drivers always available for transfers, corporate transport, and emergency transportation throughout KZN."
    },
    {
      question: "Can you provide corporate transport from King Shaka Airport?",
      answer: "Absolutely! We specialize in corporate airport transfers, executive transport, employee shuttles, and business event logistics. Contact us for customized corporate transport packages."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
              King Shaka Airport Taxi FAQ
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="text-faq-subtitle">
              Common questions about our professional airport transfer service, booking process, and KZN transport solutions
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
