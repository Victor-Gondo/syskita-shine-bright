import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Team from "./pages/Team";
import Services from "./pages/Services";
import MERQ from "./pages/MERQ";
import MERQFeatures from "./pages/MERQFeatures";
import MERQUseCases from "./pages/MERQUseCases";
import MERQIntegrations from "./pages/MERQIntegrations";
import MERQPricing from "./pages/MERQPricing";
import CaseStudies from "./pages/CaseStudies";
import Roadmap from "./pages/Roadmap";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/merq" element={<MERQ />} />
            <Route path="/merq/features" element={<MERQFeatures />} />
            <Route path="/merq/use-cases" element={<MERQUseCases />} />
            <Route path="/merq/integrations" element={<MERQIntegrations />} />
            <Route path="/merq/pricing" element={<MERQPricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
