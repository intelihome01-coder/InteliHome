import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Shield, Star } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Visual glowing effects */}
      <div className="absolute inset-0 bg-radial-gradient(circle at 80% 20%, rgba(11, 107, 27, 0.04) 0%, transparent 50%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA banner container with brand green background */}
        <div className="bg-gradient-to-br from-brand-green to-[#0e5c1a] border border-brand-green-tech/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle background overlay lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

          {/* Shield seal decoration */}
          <div className="mx-auto w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
            <Shield className="w-6 h-6" />
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Quer deixar seu imóvel mais seguro, moderno e inteligente?
            </h2>

            <p className="text-emerald-50/90 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Fale agora com a equipe da <strong className="text-white font-medium">InteliHome</strong> e solicite um orçamento personalizado para sua residência, empresa ou indústria. Temos a solução certa para você.
            </p>

            <div className="pt-4 flex flex-col items-center gap-4">
              <a
                href="https://wa.me/5564996091026?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+solicitar+um+or%C3%A7amento+com+a+InteliHome+para+meu+im%C3%B3vel."
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 text-[#0b6b1b] font-sans font-extrabold px-10 py-5 rounded-xl transition-all duration-300 shadow-xl flex items-center gap-3 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                id="cta-whatsapp-link"
              >
                <Smartphone className="w-5 h-5" />
                Falar com a InteliHome no WhatsApp
              </a>

              {/* Direct call reference */}
              <p className="text-xs text-emerald-100/80 font-mono">
                Ou salve nosso contato: <strong className="text-white font-bold">(64) 9.9609-1026</strong> | Atendimento rápido e transparente
              </p>
            </div>
          </div>

          {/* Bottom rating references to build further trust */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 text-white/70 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Star className="text-white fill-white w-4 h-4" />
              <span>Instalações 100% Seguras</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-white fill-white w-4 h-4" />
              <span>Automação Integrada</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-white fill-white w-4 h-4" />
              <span>Suporte Especializado</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
