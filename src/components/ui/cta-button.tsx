import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant?: "demo" | "book" | "speak";
  size?: "sm" | "default" | "lg";
  className?: string;
  onClick?: () => void;
}

const ctaContent = {
  demo: "Request a Demo",
  book: "Book a Demo Today", 
  speak: "Speak to Our Team"
};

export const CTAButton = ({ 
  variant = "demo", 
  size = "default", 
  className,
  onClick 
}: CTAButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - could be analytics tracking or redirect
      console.log(`CTA clicked: ${ctaContent[variant]}`);
    }
  };

  return (
    <Button
      size={size}
      onClick={handleClick}
      className={cn(
        "bg-gradient-primary hover:shadow-medium transition-all duration-300",
        className
      )}
    >
      {ctaContent[variant]}
    </Button>
  );
};