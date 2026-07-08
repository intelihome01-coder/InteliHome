import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Smartphone, ArrowRight } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: () => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onLearnMoreClick();
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-brand-gray-light via-white to-brand-green/5 overflow-hidden"
    >
      {/* Background Image with Light & Green Overlays */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="/images/automacao-residencial.jpg"
          alt="InteliHome Smart Home Automation background"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          id="hero-bg-image"
        />
      </div>

      {/* Modern multi-layer gradient mask for white/light aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-light via-brand-gray-light/90 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-brand-gray-light/40 z-10" />

      {/* Grid Pattern Decoration */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10 bg-[radial-gradient(#0b6b1b_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Elegant Brand Slogan Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 px-4 py-2 rounded-full shadow-sm"
              id="hero-slogan-badge"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-tech opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-tech"></span>
              </span>
              <p className="text-xs font-bold tracking-wider text-brand-green uppercase font-sans">
                “Tecnologia e Segurança ao Seu Alcance!”
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-dark tracking-tight leading-[1.1]"
              id="hero-headline"
            >
              Sua casa ou empresa mais <span className="text-brand-green">segura</span>, <span className="text-brand-green-tech">inteligente</span> e eficiente.
            </motion.h1>

            {/* Supporting Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gray-text text-lg sm:text-xl max-w-2xl font-light leading-relaxed"
              id="hero-subtext"
            >
              A <strong className="text-brand-dark font-semibold">InteliHome</strong> oferece soluções completas em elétrica residencial e industrial, automação, alarmes, redes e segurança eletrônica, com atendimento profissional e tecnologia de ponta ao seu alcance.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
              id="hero-cta-group"
            >
              <a
                href="https://wa.me/5564996091026?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+com+a+InteliHome."
                target="_blank"
                rel="noreferrer"
                className="bg-brand-green hover:bg-brand-green-tech text-white font-sans font-extrabold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-brand-green/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Smartphone className="w-5 h-5" />
                Solicitar Orçamento no WhatsApp
              </a>
              
              <a
                href="#servicos"
                onClick={handleServicesClick}
                className="bg-white hover:bg-brand-gray-light text-brand-dark border border-slate-200 px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                Conhecer Serviços
                <ArrowRight className="w-4 h-4 text-brand-green" />
              </a>
            </motion.div>

            {/* Social reference tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs text-brand-gray-text font-mono"
            >
              Instagram oficial: <a href="https://instagram.com/inteli_home" target="_blank" rel="noreferrer" className="text-brand-green hover:underline font-semibold">@inteli_home</a> | WhatsApp: (64) 9.9609-1026
            </motion.p>
          </div>

          {/* Elegant Floating Cards Widget (Right Column) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
              id="hero-floating-cards"
            >
              {/* Feature 1 */}
              <div className="bg-white border border-slate-100 p-5 rounded-2xl flex items-start gap-4 hover:border-brand-green/30 transition-all shadow-md group">
                <div className="bg-brand-green/10 p-3 rounded-xl border border-brand-green-tech/15 text-brand-green group-hover:scale-105 transition-transform">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-dark text-base">Segurança Blindada</h4>
                  <p className="text-brand-gray-text text-sm mt-1">Sistemas robustos de CFTV, alarmes de alta tecnologia e monitoramento inteligente na ponta dos dedos.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border border-slate-100 p-5 rounded-2xl flex items-start gap-4 hover:border-brand-green/30 transition-all shadow-md group">
                <div className="bg-brand-green/10 p-3 rounded-xl border border-brand-green-tech/15 text-brand-green-tech group-hover:scale-105 transition-transform">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-dark text-base">Automação Inteligente</h4>
                  <p className="text-brand-gray-text text-sm mt-1">Controle total de iluminação, climatização, áudio e vídeo pelo seu celular ou comandos de voz com Alexa.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border border-slate-100 p-5 rounded-2xl flex items-start gap-4 hover:border-brand-green/30 transition-all shadow-md group">
                <div className="bg-brand-green/10 p-3 rounded-xl border border-brand-green-tech/15 text-brand-green group-hover:scale-105 transition-transform">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-dark text-base">Elétrica Profissional</h4>
                  <p className="text-brand-gray-text text-sm mt-1">Desde projetos residenciais à elétrica industrial complexa de alta durabilidade e eficiência.</p>
                </div>
              </div>
            </motion.div>

            {/* Ambient decorative glowing spots */}
            <div className="absolute top-1/4 -right-12 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 -left-12 w-48 h-48 bg-brand-green-tech/5 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
