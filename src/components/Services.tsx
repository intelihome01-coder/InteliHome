import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { Smartphone, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'todas' | 'elétrica' | 'automação' | 'segurança' | 'redes'>('todas');

  const categories = [
    { id: 'todas', label: 'Todos os Serviços' },
    { id: 'elétrica', label: 'Elétrica Geral' },
    { id: 'automação', label: 'Automação Inteligente' },
    { id: 'segurança', label: 'Segurança Eletrônica' },
    { id: 'redes', label: 'Redes e Cabeamento' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeCategory === 'todas') return true;
    if (activeCategory === 'segurança' && service.category === 'segurança') return true;
    if (activeCategory === 'elétrica' && service.category === 'elétrica') return true;
    if (activeCategory === 'automação' && service.category === 'automação') return true;
    if (activeCategory === 'redes' && service.category === 'redes') return true;
    return false;
  });

  const getWhatsAppLink = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá, InteliHome! Gostaria de solicitar um orçamento e mais informações sobre o serviço: "${serviceTitle}".`);
    return `https://wa.me/5564996091026?text=${message}`;
  };

  return (
    <section id="servicos" className="py-24 bg-white relative">
      {/* Decorative light background details */}
      <div className="absolute inset-0 bg-radial-gradient(circle at 10% 20%, rgba(11, 107, 27, 0.05) 0%, transparent 40%) pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient(circle at 90% 80%, rgba(22, 138, 46, 0.03) 0%, transparent 40%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
            Nossas Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-dark tracking-tight">
            Soluções completas com o mais alto padrão técnico
          </h2>
          <div className="h-1.5 w-16 bg-brand-green rounded-full mx-auto" />
          <p className="text-brand-gray-text text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Seja para automatizar sua residência, estruturar redes rápidas ou montar quadros de comandos complexos, nossa equipe entrega excelência.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="services-categories-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-semibold tracking-wide transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-brand-green text-white border-brand-green shadow-md shadow-brand-green/20'
                  : 'bg-brand-gray-light text-brand-gray-text border-slate-200 hover:text-brand-green hover:bg-white hover:border-brand-green/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="services-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                className="bg-white border border-slate-100 hover:border-brand-green/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-brand-green/5 group"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="bg-brand-green/10 p-3.5 rounded-2xl border border-brand-green-tech/15 text-brand-green w-fit group-hover:scale-105 transition-transform">
                    <LucideIcon name={service.icon} className="stroke-[1.8]" size={28} />
                  </div>
                  
                  {/* Title & Category Badge */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-green bg-brand-green/5 px-2.5 py-1 rounded-md border border-brand-green/10 font-bold">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-display font-extrabold text-brand-dark text-xl group-hover:text-brand-green transition-colors pt-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-brand-gray-text text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card CTA Link */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-tech text-sm font-bold tracking-wide transition-colors"
                  >
                    <Smartphone size={16} />
                    Solicitar Orçamento
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global callout under services */}
        <div className="mt-16 text-center bg-brand-gray-light border border-slate-200 p-6 rounded-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <CheckCircle className="text-brand-green w-6 h-6 shrink-0" />
            <p className="text-sm text-brand-gray-text leading-relaxed">
              Precisa de um serviço específico que não está listado? Fale conosco! Desenvolvemos projetos sob medida para necessidades especiais.
            </p>
          </div>
          <a
            href="https://wa.me/5564996091026?text=Ol%C3%A1%21+Preciso+de+um+projeto+el%C3%A9trico+especializado+que+n%C3%A3o+encontrei+no+site."
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap bg-brand-green hover:bg-brand-green-tech text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95 shrink-0"
          >
            Consultar Equipe
          </a>
        </div>

      </div>
    </section>
  );
}
