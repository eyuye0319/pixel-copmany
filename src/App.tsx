import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import CaseStudy from './components/CaseStudy';
import NfcSection from './components/NfcSection';
import Cta from './components/Cta';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CardPage from './pages/CardPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <CaseStudy />
      <NfcSection />
      <Cta />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050d1a] text-white antialiased">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}
