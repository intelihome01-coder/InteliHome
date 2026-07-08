import React from 'react';
import { Zap, Smartphone, Instagram, Mail, MapPin, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-gray-light/10 text-white pt-20 pb-8 relative overflow-hidden" id="contato">
      
      {/* Decorative details */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-brand-gray-light/10">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo size="lg" />
            </div>
            
            <p className="text-brand-gray-light/70 text-sm font-light leading-relaxed">
              Especialista em elétrica residencial e industrial, automação inteligente, sistemas de alarmes, redes lógicas estruturadas e CFTV. Soluções de alta performance e tecnologia sob medida.
            </p>

            <p className="text-xs font-mono text-brand-green-tech font-bold uppercase tracking-wider">
              “Tecnologia e Segurança ao Seu Alcance!”
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest text-brand-green uppercase">
              Menu de Navegação
            </h4>
            <ul className="space-y-3 text-sm text-brand-gray-light/70">
              <li>
                <a href="#inicio" className="hover:text-brand-green-tech transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-green-tech transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-green-tech transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-brand-green-tech transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-brand-green-tech transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-green-tech transition-colors">Perguntas Frequentes (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest text-brand-green uppercase">
              Contatos Diretos
            </h4>
            
            <ul className="space-y-4 text-sm text-brand-gray-light/70">
              <li className="flex items-start gap-3">
                <Smartphone size={18} className="text-brand-green shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-xs font-mono text-white/40">WhatsApp</span>
                  <a href="https://wa.me/5564996091026" className="font-bold text-white hover:text-brand-green-tech transition-colors">
                    (64) 9.9609-1026
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Instagram size={18} className="text-brand-green shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-xs font-mono text-white/40">Instagram Oficial</span>
                  <a href="https://instagram.com/inteli_home" target="_blank" rel="noreferrer" className="text-white hover:text-brand-green-tech transition-colors">
                    @inteli_home
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-green shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="block text-xs font-mono text-white/40">E-mail</span>
                  <a href="mailto:intelihome01@gmail.com" className="text-white hover:text-brand-green-tech transition-colors">
                    intelihome01@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Action / Area */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-sm tracking-widest text-brand-green uppercase">
              Área de Atendimento
            </h4>
            <p className="text-brand-gray-light/70 text-sm font-light leading-relaxed">
              Atendimento personalizado na região de Catalão, Goiás, e cidades vizinhas. Projetos elétricos industriais e automações comerciais sob agendamento prévio.
            </p>
            
            <div className="pt-2">
              <a
                href="https://wa.me/5564996091026"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-brand-green hover:bg-brand-green-tech text-white font-bold py-3 px-5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Smartphone size={16} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-brand-gray-light/60 font-mono text-center md:text-left">
            &copy; {currentYear} InteliHome. Todos os direitos reservados.
            <br />
            <span className="text-[10px] text-brand-gray-light/40">Especialista em Elétrica, Automação & Segurança Eletrônica</span>
          </p>
          
          <p className="text-xs text-brand-green-tech font-display font-semibold tracking-wide text-center">
            InteliHome — Tecnologia e Segurança ao Seu Alcance.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-slate-800 hover:bg-brand-green hover:text-white text-brand-green rounded-full border border-slate-700 hover:border-brand-green/20 transition-all duration-300 focus:outline-none cursor-pointer"
            title="Voltar ao topo"
            aria-label="Voltar ao topo"
            id="scroll-to-top-button"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
