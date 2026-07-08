import React from 'react';
import { motion } from 'motion/react';
import { BENEFITS_DATA } from '../data';
import LucideIcon from './LucideIcon';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-brand-gray-light relative overflow-hidden">
      {/* Visual glow element */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-green-tech/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sticky left introduction text */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center gap-2">
              <Sparkles size={16} className="text-brand-green" />
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-dark tracking-tight leading-[1.15]">
              Por que escolher a InteliHome para seu projeto?
            </h2>
            <div className="h-1.5 w-16 bg-brand-green rounded-full" />
            <p className="text-brand-gray-text text-sm sm:text-base leading-relaxed">
              Trabalhamos focados em simplificar a automação e aumentar de fato a segurança da sua residência ou empresa. Nosso diferencial está na excelência de execução e na seleção das melhores tecnologias para cada caso.
            </p>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">Projetos Inteligentes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">Instaladores Treinados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0" />
                <span className="text-sm font-semibold text-brand-dark">Suporte Pós-Venda Permanente</span>
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="https://wa.me/5564996091026?text=Ol%C3%A1%21+Estive+lendo+sobre+os+benef%C3%ADcios+da+InteliHome+e+gostaria+de+conversar+sobre+um+projeto."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-tech text-white font-sans font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
              >
                Falar com um Especialista
              </a>
            </div>
          </div>

          {/* Right side bento-like grid of features */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BENEFITS_DATA.map((benefit, index) => (
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: index * 0.08 }}
                   key={benefit.id}
                   className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-green/20 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Icon mapping */}
                    <div className="bg-brand-green/10 text-brand-green p-3 rounded-xl w-fit group-hover:scale-105 transition-transform border border-brand-green/5">
                      <LucideIcon name={benefit.icon} className="stroke-[2.2]" size={22} />
                    </div>
                    
                    <h3 className="font-display font-bold text-brand-dark text-lg tracking-tight">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-brand-gray-text text-sm font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
