import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DemoRequestForm from "@/components/DemoRequestForm";

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
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Open the demo request form for demo and book variants
      if (variant === "demo" || variant === "book") {
        setIsFormOpen(true);
      } else {
        // Default action for other variants
        console.log(`CTA clicked: ${ctaContent[variant]}`);
      }
    }
  };

  return (
    <>
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

      <DemoRequestForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        variant={variant === "book" ? "book" : "demo"}
      />
    </>
  );
};