import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Does MERQ work offline?",
      answer: "Yes, MERQ is designed with an offline-first approach. The mobile app can capture GPS check-ins, photos, and form data even without internet connectivity. All data automatically syncs when connection is restored, ensuring your field teams can work anywhere."
    },
    {
      question: "How do I integrate with my ERP?",
      answer: "SYSKITA offers REST APIs and pre-built connectors for major ERP systems like SAP, Oracle, and Microsoft Dynamics. Our technical team provides integration support and documentation. Most integrations can be completed within 2-4 weeks depending on complexity."
    },
    {
      question: "What security certifications do you follow?",
      answer: "We follow OWASP ASVS Level 1 and CIS IG1 security controls. Our platform is compliant with Indonesia's Personal Data Protection Law (UU 27/2022) and uses AES-256 encryption at rest, TLS 1.2+ in transit, and secure JWT-based authentication."
    },
    {
      question: "Can I try a demo before buying?",
      answer: "Absolutely! We offer personalized demos tailored to your specific use case, plus a 14-day free trial with full platform access. No credit card required for the trial. Contact our team to schedule your demo today."
    },
    {
      question: "How is pricing calculated?",
      answer: "Pricing is based on the number of active field users and selected features. We offer Starter, Professional, and Enterprise tiers. Custom pricing is available for large deployments. Contact our sales team for a detailed quote based on your requirements."
    },
    {
      question: "What mobile devices are supported?",
      answer: "MERQ mobile app supports Android devices running version 7.0 or higher. The app is optimized for smartphones and tablets. iOS support is planned for Q4 2025. Web dashboard works on all modern browsers including Chrome, Firefox, Safari, and Edge."
    },
    {
      question: "How long does implementation take?",
      answer: "Standard implementation takes 2-6 weeks depending on your requirements. This includes setup, data migration, user training, and testing. Enterprise implementations with custom integrations may take 8-12 weeks. We provide dedicated project management throughout the process."
    },
    {
      question: "Is training included with the platform?",
      answer: "Yes! All Professional and Enterprise plans include comprehensive training. This covers online training resources, live webinars, and user documentation. Enterprise customers also receive on-site training and dedicated onboarding support."
    },
    {
      question: "Can I customize forms and workflows?",
      answer: "Definitely! MERQ features a dynamic form builder that lets you create custom forms for different roles and projects. You can set conditional logic, required fields, and validation rules. Professional and Enterprise plans include advanced workflow customization."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, with priority support for Professional customers. Enterprise customers receive dedicated account management, phone support, and custom SLAs. Our support team is available during Indonesian business hours with extended hours for critical issues."
    }
  ];

  return (
    <>
      <SEOHead 
        title="SYSKITA FAQ | Frequently Asked Questions"
        description="Find answers to common questions about SYSKITA and MERQ platform features, pricing, security, integrations, and support options."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Answers to the most common questions about SYSKITA and MERQ.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-border">
                  <Collapsible 
                    open={openItems.includes(index)}
                    onOpenChange={() => toggleItem(index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-left text-lg font-semibold">
                            {faq.question}
                          </CardTitle>
                          <ChevronDown 
                            className={`w-5 h-5 text-muted-foreground transition-transform ${
                              openItems.includes(index) ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to help you get the most out of SYSKITA. 
              Whether you need technical assistance or have questions about features, we're ready to assist.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">📧 Email Support</h3>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">📞 Phone Support</h3>
                <p className="text-sm text-muted-foreground">Enterprise customers only</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">📚 Knowledge Base</h3>
                <p className="text-sm text-muted-foreground">Self-service resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is ready to provide personalized answers and help you understand how SYSKITA can work for your business.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
};

export default FAQ;