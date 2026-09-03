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
import Journal from "./pages/Journal";
import JournalArticle from "./pages/JournalArticle";
import Contact from "./pages/Contact";
import ScrollToTop from "@/components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/legal-notice" element={<MentionsLegales />} />
            <Route path="/privacy-policy" element={<PolitiqueConfidentialite />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalArticle />} />
            <Route path="/blog" element={<Navigate to="/journal" replace />} />

            {/* Legacy localized links */}
            <Route path="/fr" element={<Navigate to="/" replace />} />
            <Route path="/en" element={<Navigate to="/" replace />} />
            <Route path="/fr/mentions-legales" element={<Navigate to="/legal-notice" replace />} />
            <Route path="/mentions-legales" element={<Navigate to="/legal-notice" replace />} />
            <Route path="/en/legal-notice" element={<Navigate to="/legal-notice" replace />} />
            <Route path="/fr/politique-confidentialite" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/politique-confidentialite" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/en/privacy-policy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
