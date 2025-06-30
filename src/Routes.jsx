import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import NotFound from "pages/NotFound";
import HomepageInteractiveDeveloperShowcase from "pages/home";
import PortfolioProjectUniverse from "pages/portfolio";
import AboutTechnicalEvolutionJourney from "pages/about";
import InteractiveSkillsLabPage from "pages/experiments";
import ContactPage from "pages/contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<HomepageInteractiveDeveloperShowcase />} />
          <Route path="/portfolio" element={<PortfolioProjectUniverse />} />
          <Route path="/about" element={<AboutTechnicalEvolutionJourney />} />
          <Route path="/experiments" element={<InteractiveSkillsLabPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;