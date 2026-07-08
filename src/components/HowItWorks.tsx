import React from 'react';
import { motion } from 'motion/react';
import { STEPS_DATA } from '../data';
import { MessageSquare, Users, Search, Lightbulb, FileCheck, Check } from 'lucide-react';

export default function HowItWorks() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <MessageSquare className="w-6 h-6 text-brand-green" />;
      case 1: return <Users className="w-6 h-6 text-brand-green-tech" />;
      case 2: return <Search className="w-6 h-6 text-brand-green" />;
      case 3: return <Lightbulb className="w-6 h-6 text-brand-green-tech" />;
      case 4: return <FileCheck className="w-6 h-6 text-brand-green" />;
      default: return <Check className="w-6 h-6 text-brand-green" />;
    }
  };

  return (
    <section id="como-funciona" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(11, 107, 27, 0.03) 0%, transparent 60%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
            Simplicidade e Segurança
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-brand-dark tracking-tight">
            Como funciona do primeiro contato ao resultado final
          </h2>
          <div className="h-1.5 w-16 bg-brand-green rounded-full mx-auto" />
          <p className="text-brand-gray-text text-base sm:text-lg max-w-2xl mx-auto font-light">
            Nossa metodologia foi desenhada para garantir transparência total, rapidez e total conformidade com o que você precisa.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          
          {/* Decorative connector line for wide screens */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-green/20 via-brand-green-tech/30 to-brand-green/20 -z-10" />

          {STEPS_DATA.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              key={step.number}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Circle Index / Icon container */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-green/35 flex items-center justify-center shadow-md transition-all duration-300 group-hover:border-brand-green-tech group-hover:scale-105 relative">
                
                {/* Step badge number */}
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-green text-white font-mono font-bold text-xs flex items-center justify-center border border-white shadow-sm">
                  {step.number}
                </span>

                {/* Animated inner ring */}
                <div className="absolute inset-1 rounded-full border border-slate-100 group-hover:border-brand-green-tech/20 pointer-events-none" />

                {getStepIcon(index)}
              </div>

              {/* Text content */}
              <div className="mt-6 space-y-2 px-2">
                <h3 className="font-display font-extrabold text-brand-dark text-base tracking-wide group-hover:text-brand-green transition-colors">
                  {step.title}
                </h3>
                <p className="text-brand-gray-text text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Simple arrow connector for vertical mobile screens */}
              {index < STEPS_DATA.length - 1 && (
                <div className="md:hidden text-brand-green/40 my-4 transform rotate-90">
                  ⚡
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Action Button at the end of process */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5564996091026?text=Ol%C3%A1%21+Quero+iniciar+o+processo+de+or%C3%A7amento+e+gostaria+de+falar+com+voc%C3%AAs."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-tech text-white font-sans font-extrabold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Fale Conosco Agora e Comece seu Projeto
          </a>
        </div>

      </div>
    </section>
  );
}
