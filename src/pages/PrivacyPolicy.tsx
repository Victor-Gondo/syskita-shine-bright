import { Shield, Eye, Lock, FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";

const PrivacyPolicy = () => {
  const lastUpdated = "December 1, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, phone number, company information, and other contact details."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect certain information about your use of our platform, including your IP address, browser type, operating system, pages visited, time spent on pages, and other diagnostic data."
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about the devices you use to access our services, including hardware model, operating system, unique device identifiers, and mobile network information."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our frontliner management platform, including processing transactions, providing customer support, and delivering the features you request."
        },
        {
          subtitle: "Communication",
          text: "We may use your information to send you technical notices, updates, security alerts, support messages, marketing communications, and other information related to our services."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We use collected information to understand how users interact with our platform, analyze trends, and improve our services and user experience."
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer service."
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required to do so by law or if we believe that such disclosure is necessary to protect our rights, your safety, or the safety of others."
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Encryption",
          text: "All data transmission is encrypted using industry-standard SSL/TLS protocols. Sensitive data is encrypted at rest using advanced encryption standards."
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict access controls and regularly review access permissions to ensure that only authorized personnel can access personal information."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead 
        title="Privacy Policy - SYSKITA"
        description="SYSKITA's Privacy Policy explaining how we collect, use, and protect your personal information in compliance with Indonesian PDP Law and international standards."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect 
            your information when you use SYSKITA's services.
          </p>
          <p className="text-lg text-primary-foreground/80">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SYSKITA ("we," "our," or "us") is committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our frontliner management platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This policy is designed to comply with Indonesian Personal Data Protection Law (PDP Law) 
                and international privacy standards. By using our services, you agree to the collection 
                and use of information in accordance with this policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@syskita.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 text-primary-foreground">
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-semibold mb-2">{item.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Access and Portability</h4>
                <p className="text-muted-foreground">
                  You have the right to request access to the personal information we hold about you 
                  and to receive a copy of your data in a structured, commonly used format.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Correction and Updates</h4>
                <p className="text-muted-foreground">
                  You can update your personal information at any time through your account settings 
                  or by contacting our support team.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Deletion</h4>
                <p className="text-muted-foreground">
                  You have the right to request deletion of your personal information, subject to 
                  certain legal obligations and legitimate business interests.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Marketing Communications</h4>
                <p className="text-muted-foreground">
                  You can opt out of marketing communications at any time by clicking the unsubscribe 
                  link in our emails or updating your preferences in your account settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or 
                permitted by law.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When determining retention periods, we consider factors such as the nature of the 
                information, the purpose for which it was collected, legal requirements, and our 
                legitimate business interests.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When personal information is no longer needed, we securely delete or anonymize it 
                in accordance with our data retention procedures.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> privacy@syskita.com</p>
                <p><strong>Address:</strong> SYSKITA, Jakarta, Indonesia</p>
                <p><strong>Phone:</strong> +62 21 1234 5678</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We will respond to your inquiry within 30 days or as required by applicable law.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Updates */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices, technology, legal requirements, or other factors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When we make changes, we will update the "Last updated" date at the top of this 
                policy and notify you through our platform or by email if the changes are significant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;