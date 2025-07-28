import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
}

export const SEOHead = ({ title, description }: SEOHeadProps) => {
  useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update Open Graph meta tags
    const updateOrCreateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        metaTag.setAttribute("content", content);
        document.head.appendChild(metaTag);
      }
    };

    updateOrCreateMetaTag("og:title", title);
    updateOrCreateMetaTag("og:description", description);
    updateOrCreateMetaTag("og:type", "website");
    
  }, [title, description]);

  return null;
};