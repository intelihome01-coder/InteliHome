import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';
import { ChevronDown, HelpCircle, Smartphone } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-radial-gradient(circle at 10% 80%, rgba(11, 107, 27, 0.03) 0%, transparent 40%) pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center justify-center gap-2">
            <HelpCircle size={16} />
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-dark tracking-tight">
            Perguntas sobre nossos serviços
          </h2>
          <div className="h-1.5 w-16 bg-brand-green rounded-full mx-auto" />
          <p className="text-brand-gray-text text-base font-light">
            Encontre respostas rápidas para as principais dúvidas sobre elétrica, automação residencial, alarmes, redes e como contratar a InteliHome.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto" id="faq-accordion-list">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-slate-200/80 hover:border-brand-green/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-brand-dark hover:text-brand-green transition-colors focus:outline-none cursor-pointer"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-display font-bold text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white border border-slate-200 text-brand-green transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-brand-green text-white border-brand-green' : ''
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-brand-gray-text text-xs sm:text-sm font-light leading-relaxed border-t border-slate-200/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ conversion block */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-4 bg-brand-gray-light border border-slate-200 p-8 rounded-3xl">
          <h3 className="font-display font-bold text-brand-dark text-lg">Ainda tem alguma dúvida específica?</h3>
          <p className="text-brand-gray-text text-xs sm:text-sm font-light leading-relaxed">
            Fale diretamente com nossa equipe técnica de suporte pelo WhatsApp. Responderemos em minutos para solucionar suas dúvidas ou agendar um orçamento.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/5564996091026?text=Ol%C3%A1%21+Estive+lendo+as+duvidas+frequentes+mas+tenho+uma+pergunta+especifica+sobre+um+projeto."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-tech text-white font-sans font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md hover:scale-102 active:scale-98"
            >
              <Smartphone size={16} />
              Conversar com o Suporte
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
