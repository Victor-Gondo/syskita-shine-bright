import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSignupProps {
  className?: string;
}

export const NewsletterSignup = ({ className = "" }: NewsletterSignupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Store email in localStorage for demonstration
    const existingEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]');
    existingEmails.push({
      email: data.email,
      subscribedAt: new Date().toISOString(),
    });
    localStorage.setItem('newsletter_emails', JSON.stringify(existingEmails));
    
    console.log("Newsletter subscription:", data);
    
    toast({
      title: "Successfully Subscribed!",
      description: "Thank you for subscribing to our newsletter. You'll receive our latest updates and insights.",
    });
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    form.reset();
  };

  if (isSubscribed) {
    return (
      <div className={`flex items-center justify-center p-6 bg-primary/10 rounded-lg ${className}`}>
        <div className="flex items-center text-primary">
          <Check className="w-5 h-5 mr-2" />
          <span className="font-medium">Successfully subscribed to our newsletter!</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="h-12"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="h-12 px-8 bg-gradient-primary hover:shadow-medium transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Mail className="w-4 h-4 mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};