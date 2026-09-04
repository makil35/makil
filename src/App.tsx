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
import Journal from "./pages/Journal";
import JournalArchive from "./pages/JournalArchive";
import JournalArticle from "./pages/JournalArticle";
import Contact from "./pages/Contact";
import Mandates from "./pages/Mandates";
import Search from "./pages/Search";
import Private from "./pages/Private";
import ScrollToTop from "@/components/ScrollToTop";
import AccessGate from "@/components/AccessGate";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <ScrollToTop />
          <Analytics />
          <AccessGate>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/legal-notice" element={<MentionsLegales />} />
            <Route path="/privacy-policy" element={<PolitiqueConfidentialite />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/archive" element={<JournalArchive />} />
            <Route path="/journal/:slug" element={<JournalArticle />} />
            <Route path="/blog" element={<Navigate to="/journal" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mandates" element={<Mandates />} />
            {/* Unlisted internal search (noindex, not linked in navigation) */}
            <Route path="/search" element={<Search />} />
            {/* Private client area (own authentication, noindex) */}
            <Route path="/private" element={<Private />} />

            {/* Legacy localized links */}
            <Route path="/fr" element={<Navigate to="/" replace />} />
            <Route path="/en" element={<Navigate to="/" replace />} />
            <Route path="/fr/mentions-legales" element={<Navigate to="/legal-notice" replace />} />
            <Route path="/mentions-legales" element={<Navigate to="/legal-notice" replace />} />
            <Route path="/en/legal-notice" element={<Navigate to="/legal-notice" replace />} />
            <Route path="/fr/politique-confidentialite" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/politique-confidentialite" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/en/privacy-policy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
          </AccessGate>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
