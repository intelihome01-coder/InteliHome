import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import QuoteCalculator from './components/QuoteCalculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const scrollToServices = () => {
    const target = document.querySelector('#servicos');
    if (target) {
      const offset = 80;
      const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-green selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Sticky Premium Header */}
      <Header onOpenCalculator={() => {
        const target = document.querySelector('#orcamento');
        if (target) {
          const offset = 80;
          const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: position, behavior: 'smooth' });
        }
      }} />

      {/* Main Sections */}
      <main>
        
        {/* Hero Section */}
        <Hero onLearnMoreClick={scrollToServices} />

        {/* Narrative About Section */}
        <About />

        {/* Interactive Services Showcase */}
        <Services />

        {/* Persuasive Benefits Section */}
        <Benefits />

        {/* Step-by-Step Workflow */}
        <HowItWorks />

        {/* Smart Quote Wizard (Orçamento Inteligente) */}
        <QuoteCalculator />

        {/* Real Customer Testimonials */}
        <Testimonials />

        {/* Beautiful Interactive Contact Form (Supabase Leads) */}
        <ContactForm />

        {/* Interactive FAQs Accordion */}
        <FAQ />

      </main>

      {/* Footer & Contacts */}
      <Footer />

      {/* Floating High-Conversion WhatsApp Button */}
      <a
        href="https://wa.me/5564996091026?text=Ol%C3%A1%21+Estou+navegando+no+site+da+InteliHome+e+gostaria+de+falar+com+um+consultor."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 active:scale-95 group focus:outline-none border border-emerald-400/20 animate-whatsapp-alert"
        title="Falar no WhatsApp"
        aria-label="Falar no WhatsApp"
        id="floating-whatsapp-widget"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10 group-hover:animate-none" />
        
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-7 h-7 fill-white/10" />
          {/* Pulsing red alert notification badge */}
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border border-white text-[8px] font-black text-white items-center justify-center shadow-sm">1</span>
          </span>
        </div>
        
        {/* Floating tooltip hover indicator */}
        <span className="absolute right-14 bg-brand-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Fale Conosco no WhatsApp!
        </span>
      </a>

    </div>
  );
}
