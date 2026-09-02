import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import Unsubscribe from "./pages/Unsubscribe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* French */}
            <Route path="/" element={<Navigate to="/fr" replace />} />
            <Route path="/fr" element={<Index />} />
            <Route path="/fr/mentions-legales" element={<MentionsLegales />} />
            <Route path="/fr/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* Preserve legacy French links */}
            <Route path="/mentions-legales" element={<Navigate to="/fr/mentions-legales" replace />} />
            <Route path="/politique-confidentialite" element={<Navigate to="/fr/politique-confidentialite" replace />} />
            {/* English */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/legal-notice" element={<MentionsLegales />} />
            <Route path="/en/privacy-policy" element={<PolitiqueConfidentialite />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
