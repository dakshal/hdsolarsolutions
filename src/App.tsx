import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import MarketSegmentDetails from './pages/MarketSegmentDetails';
import ProjectsPage from './pages/ProjectsPage';
import TaxCreditsPage from './pages/TaxCreditsPage';
import SalesRepPage from './pages/SalesRepPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceType" element={<ServiceDetailPage />} />
          <Route path="/services/:segmentId" element={<MarketSegmentDetails />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tax-credits" element={<TaxCreditsPage />} />
          <Route path="/sales-rep" element={<SalesRepPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;