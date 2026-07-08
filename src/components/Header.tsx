import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenCalculator?: () => void;
}

export default function Header({ onOpenCalculator }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="fixed-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-brand-gray-light'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center focus:outline-none"
            id="header-logo-link"
          >
            <Logo size="md" variant="colored" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-brand-gray-text hover:text-brand-green transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://wa.me/5564996091026"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-green hover:bg-brand-green-tech text-white font-sans font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-md flex items-center gap-2.5 active:scale-95 hover:shadow-brand-green/20 hover:shadow-lg hover:-translate-y-0.5"
              id="header-cta-button"
            >
              <MessageCircle size={20} className="fill-white/10" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-dark hover:text-brand-green p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-white border-b border-brand-gray-light py-4 px-4 shadow-xl animate-fade-in"
        >
          <div className="space-y-1 pb-4 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-base font-semibold text-brand-gray-text hover:text-brand-green hover:bg-brand-gray-light px-4 py-3 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-brand-gray-light px-4">
              <a
                href="https://wa.me/5564996091026"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-green hover:bg-brand-green-tech text-white text-center font-extrabold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-base active:scale-95"
                id="mobile-cta-button"
              >
                <MessageCircle size={22} className="fill-white/10" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
