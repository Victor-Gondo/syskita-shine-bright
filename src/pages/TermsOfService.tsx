import { Scale, FileText, Users, Shield } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";

const TermsOfService = () => {
  const lastUpdated = "December 1, 2024";

  const sections = [
    {
      title: "Service Description",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Platform Overview",
          text: "SYSKITA provides a comprehensive frontliner management platform that includes workforce management, analytics, workflow automation, and related services. Our platform is designed to help businesses optimize their frontliner operations and improve overall efficiency."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to provide continuous access to our services, but we cannot guarantee 100% uptime. We may perform scheduled maintenance, which will be communicated in advance when possible."
        },
        {
          subtitle: "Service Modifications",
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice, though we will make reasonable efforts to notify users of significant changes."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized access or security breach."
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services to transmit harmful, offensive, or illegal content or to violate any applicable laws or regulations."
        },
        {
          subtitle: "Data Accuracy",
          text: "You are responsible for ensuring that all information you provide to us is accurate, current, and complete. You must promptly update any information that becomes inaccurate or outdated."
        }
      ]
    },
    {
      title: "Payment and Billing",
      icon: <Scale className="w-5 h-5" />,
      content: [
        {
          subtitle: "Subscription Fees",
          text: "Access to our services requires payment of subscription fees as outlined in your chosen plan. Fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle."
        },
        {
          subtitle: "Payment Methods",
          text: "We accept various payment methods including credit cards and bank transfers. You authorize us to charge your chosen payment method for all fees due under your subscription."
        },
        {
          subtitle: "Refund Policy",
          text: "Refunds are handled on a case-by-case basis. Generally, we do not provide refunds for unused portions of subscription periods, but we may make exceptions in certain circumstances."
        }
      ]
    },
    {
      title: "Data and Privacy",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "Data Ownership",
          text: "You retain ownership of all data you submit to our platform. We do not claim ownership of your content, but you grant us necessary rights to provide our services."
        },
        {
          subtitle: "Data Security",
          text: "We implement industry-standard security measures to protect your data, but we cannot guarantee absolute security. You acknowledge that data transmission over the internet carries inherent risks."
        },
        {
          subtitle: "Privacy Compliance",
          text: "Our collection and use of your data is governed by our Privacy Policy, which is incorporated into these Terms by reference. We comply with applicable data protection laws including Indonesian PDP Law."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <SEOHead 
        title="Terms of Service - SYSKITA"
        description="SYSKITA's Terms of Service outlining the legal agreement between users and our frontliner management platform services."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            These terms govern your use of SYSKITA's frontliner management platform and services. 
            Please read them carefully.
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
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you 
                and SYSKITA ("Company," "we," "our," or "us") regarding your use of our frontliner 
                management platform and related services.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using our services, you agree to be bound by these Terms and our 
                Privacy Policy. If you do not agree to these Terms, please do not use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms apply to all users of our services, including free trial users, 
                paid subscribers, and visitors to our website.
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

      {/* Prohibited Uses */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use our services for any of the following prohibited activities:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc ml-6">
                <li>Violating any applicable laws, regulations, or third-party rights</li>
                <li>Transmitting or distributing harmful, offensive, or illegal content</li>
                <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfering with or disrupting our services or servers</li>
                <li>Using our services for any fraudulent or deceptive purposes</li>
                <li>Reverse engineering, decompiling, or attempting to extract source code</li>
                <li>Creating derivative works based on our platform without permission</li>
                <li>Using automated systems to access our services without authorization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Our Rights</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The SYSKITA platform, including all software, design, text, graphics, and other 
                  content, is owned by us and protected by copyright, trademark, and other intellectual 
                  property laws. You may not copy, modify, or distribute our content without permission.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Your Rights</h4>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to the data and content you submit to our platform. 
                  By using our services, you grant us a limited license to use your content 
                  solely for the purpose of providing our services to you.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Trademark Policy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  SYSKITA and related logos are trademarks of our company. You may not use our 
                  trademarks without our prior written consent.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, SYSKITA shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to 
                loss of profits, data, use, or goodwill, arising out of or relating to your use of our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability to you for all claims arising out of or relating to these Terms 
                or our services shall not exceed the amount you paid to us in the twelve (12) months 
                preceding the claim.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Some jurisdictions do not allow the exclusion or limitation of certain damages, 
                so the above limitations may not apply to you.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Termination by You</h4>
                <p className="text-muted-foreground leading-relaxed">
                  You may terminate your account at any time by contacting our support team or 
                  through your account settings. Upon termination, your access to our services 
                  will cease immediately.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Termination by Us</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account immediately if you violate these Terms 
                  or for any other reason at our sole discretion, with or without notice.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Effect of Termination</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination, you will lose access to your account and data. We may retain 
                  certain information as required by law or for legitimate business purposes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Governing Law and Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Indonesia, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any disputes arising out of or relating to these Terms or our services shall be 
                resolved through binding arbitration in Jakarta, Indonesia, in accordance with 
                the rules of the Indonesian Arbitration Board (BANI).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> legal@syskita.com</p>
                <p><strong>Address:</strong> SYSKITA, Jakarta, Indonesia</p>
                <p><strong>Phone:</strong> +62 21 1234 5678</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;