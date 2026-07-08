import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, HeartHandshake, Eye } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Qualidade Inabalável',
      desc: 'Utilizamos materiais de alto padrão e marcas consolidadas do mercado.',
      icon: Award,
    },
    {
      title: 'Segurança Total',
      desc: 'Projetos que cumprem rigorosamente as normas técnicas vigentes (ABNT).',
      icon: Shield,
    },
    {
      title: 'Foco no Cliente',
      desc: 'Soluções personalizadas desenhadas para sua rotina ou processo industrial.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-gray-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Image Grid Collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 aspect-[4/5] group">
                  <img
                    src="/src/assets/images/intelihome_cctv_security_1783549706001.jpg"
                    alt="CFTV e Segurança InteliHome"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent flex items-end p-4">
                    <span className="text-white font-display font-bold text-sm tracking-wide">CFTV & Monitoramento</span>
                  </div>
                </div>
                <div className="bg-brand-green text-white p-6 rounded-3xl shadow-lg border border-brand-green-tech/20 flex flex-col justify-center text-center">
                  <span className="text-3xl font-display font-black text-white">100%</span>
                  <span className="text-xs font-mono uppercase tracking-widest mt-1 text-slate-100">Garantia de Qualidade</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 pt-8"
              >
                <div className="bg-brand-dark text-white p-6 rounded-3xl shadow-lg border border-white/5 text-center">
                  <Eye className="text-brand-green-tech mx-auto mb-2 animate-pulse" size={28} />
                  <p className="text-xs font-medium text-brand-gray-light/80 leading-relaxed">Praticidade e controle por celular ou Alexa</p>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 aspect-[4/5] group">
                  <img
                    src="/src/assets/images/intelihome_electrical_panel_1783549694748.jpg"
                    alt="Quadros de comando InteliHome"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent flex items-end p-4">
                    <span className="text-white font-display font-bold text-sm tracking-wide">Comando Elétrico</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Glowing background shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-green-tech/5 rounded-full blur-2xl -z-10" />
          </div>

          {/* Column 2: Elegant Narrative Content */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold">
                Quem Somos
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-dark tracking-tight">
                Inovando para conectar você ao futuro da segurança e automação.
              </h2>
              <div className="h-1.5 w-16 bg-brand-green rounded-full" />
            </div>

            <div className="space-y-6 text-brand-gray-text text-base leading-relaxed">
              <p>
                A <strong>InteliHome</strong> nasceu com o propósito de transformar residências, empresas e ambientes industriais por meio de soluções inteligentes integradas em elétrica, automação e segurança eletrônica de alto desempenho.
              </p>
              <p>
                Atuamos com focus absoluto em <strong>qualidade, eficiência e confiança</strong>. Oferecemos desde o planejamento e execução de instalações elétricas completas até sistemas modernos de monitoramento remoto (CFTV), alarmes monitorados, infraestrutura de redes estáveis e soluções completas de controle remoto por celular ou assistentes virtuais de voz como a Alexa.
              </p>
              <p className="font-medium text-brand-dark italic border-l-4 border-brand-green pl-4">
                "Nosso objetivo principal é entregar praticidade, segurança robusta e tecnologia intuitiva para facilitar e proteger o dia a dia de nossos clientes."
              </p>
            </div>

            {/* Bullets List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              {highlights.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="text-brand-green flex items-center gap-2">
                      <IconComp size={20} className="stroke-[2.5]" />
                      <h4 className="font-display font-bold text-brand-dark text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-brand-gray-text leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
