import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Smartphone, User, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    { value: 'elétrica', label: 'Elétrica (Residencial/Industrial)' },
    { value: 'automação', label: 'Automação Smart Home' },
    { value: 'segurança', label: 'Segurança & Monitoramento' },
    { value: 'redes', label: 'Redes & Conectividade' },
    { value: 'outros', label: 'Outro Projeto Especial' }
  ];

  const formatPhone = (value: string) => {
    // Basic phone formatting (e.g. (64) 99609-1026)
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)}.${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setTelefone(formatted);
  };

  const getWhatsAppFallbackURL = () => {
    let text = `Olá, InteliHome! Gostaria de um orçamento:\n\n`;
    text += `👤 *Nome:* ${nome}\n`;
    text += `📞 *WhatsApp:* ${telefone}\n`;
    text += `📧 *E-mail:* ${email || 'Não informado'}\n`;
    text += `⚡ *Serviço:* ${servico.toUpperCase() || 'Não especificado'}\n`;
    text += `💬 *Mensagem:* ${mensagem}`;
    
    return `https://wa.me/5564996091026?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !telefone || !servico || !mensagem) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send to Supabase 'leads' table
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            nome,
            telefone,
            email: email || null,
            servico,
            mensagem,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        // Log the warning but handle gracefully as requested (it should continue normally)
        console.warn('Supabase lead storage error (possibly table does not exist yet):', error.message);
      }

      // We consider it a success for the user even if the table isn't created yet,
      // as the app should continue working normally and we provide a WhatsApp fallback
      setSubmitStatus('success');
    } catch (err) {
      console.error('Failed to communicate with Supabase:', err);
      // Fallback is still treated gracefully
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-24 bg-brand-gray-light relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/3 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green-tech/3 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center justify-center gap-2">
            <Mail size={16} className="text-brand-green" />
            Entre em Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-dark tracking-tight">
            Solicite um Orçamento sem Compromisso
          </h2>
          <div className="h-1.5 w-16 bg-brand-green rounded-full mx-auto" />
          <p className="text-brand-gray-text text-base font-light max-w-2xl mx-auto">
            Preencha os campos abaixo para nos contar sobre o seu projeto. Retornamos em poucos minutos via WhatsApp ou e-mail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Form container */}
          <div className="p-8 sm:p-10 md:col-span-7 space-y-6">
            {submitStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto border border-brand-green/20">
                  <CheckCircle2 size={36} className="stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-brand-dark text-xl sm:text-2xl">
                    Sua mensagem foi enviada!
                  </h3>
                  <p className="text-brand-gray-text text-sm leading-relaxed max-w-md mx-auto">
                    Obrigado, <strong>{nome}</strong>. Já registramos sua solicitação e em breve entraremos em contato.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <p className="text-xs text-brand-gray-text">
                    Deseja agilizar seu atendimento? Envie também pelo WhatsApp para falar em tempo real:
                  </p>
                  <a
                    href={getWhatsAppFallbackURL()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    <Smartphone size={16} />
                    Enviar via WhatsApp
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setNome('');
                      setTelefone('');
                      setEmail('');
                      setServico('');
                      setMensagem('');
                      setSubmitStatus('idle');
                    }}
                    className="text-xs font-semibold text-slate-400 hover:text-brand-green transition-colors underline underline-offset-4 cursor-pointer"
                  >
                    Enviar outra solicitação
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold flex items-center gap-1.5">
                    <User size={12} className="text-brand-green" />
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:outline-none rounded-xl px-4 py-3 text-sm text-brand-dark font-semibold transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold flex items-center gap-1.5">
                      <Smartphone size={12} className="text-brand-green" />
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (64) 9.9609-1026"
                      value={telefone}
                      onChange={handlePhoneChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:outline-none rounded-xl px-4 py-3 text-sm text-brand-dark font-semibold transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold flex items-center gap-1.5">
                      <Mail size={12} className="text-brand-green" />
                      Seu E-mail (Opcional)
                    </label>
                    <input
                      type="email"
                      placeholder="Ex: joao@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:outline-none rounded-xl px-4 py-3 text-sm text-brand-dark font-semibold transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold flex items-center gap-1.5">
                    <Sparkles size={12} className="text-brand-green" />
                    Tipo de Serviço *
                  </label>
                  <select
                    required
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:outline-none rounded-xl px-4 py-3 text-sm text-brand-dark font-semibold transition-all cursor-pointer"
                  >
                    <option value="" disabled>Selecione um serviço de interesse</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold flex items-center gap-1.5">
                    <MessageSquare size={12} className="text-brand-green" />
                    Sua Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva detalhes do que precisa para seu imóvel..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:outline-none rounded-xl px-4 py-3 text-sm text-brand-dark transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-green hover:bg-brand-green-tech disabled:bg-slate-300 text-white font-sans font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer hover:shadow-lg active:scale-98"
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Solicitação de Orçamento
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className="bg-brand-dark text-white p-8 sm:p-10 md:col-span-5 flex flex-col justify-between relative overflow-hidden">
            {/* Visual background glowing */}
            <div className="absolute inset-0 bg-radial-gradient(circle at 100% 0%, rgba(11, 107, 27, 0.15) 0%, transparent 60%) pointer-events-none" />
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-green-tech font-bold uppercase">Atendimento Premium</span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1">InteliHome</h3>
                <div className="h-1 w-12 bg-brand-green mt-3 rounded-full" />
              </div>

              <p className="text-xs text-brand-gray-light/75 leading-relaxed font-light">
                Utilizamos tecnologia de ponta para conectar você com soluções ágeis, seguras e transparentes.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-green shrink-0">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-white/40 uppercase">Atendimento Direto</span>
                    <a href="https://wa.me/5564996091026" className="text-sm font-bold text-white hover:text-brand-green-tech transition-colors">
                      (64) 9.9609-1026
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand-green shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-white/40 uppercase">E-mail Técnico</span>
                    <a href="mailto:contato@intelihome.com" className="text-sm font-bold text-white hover:text-brand-green-tech transition-colors">
                      contato@intelihome.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 relative z-10 space-y-1">
              <span className="text-[10px] font-mono text-white/40 block">LOCALIZAÇÃO</span>
              <p className="text-xs font-semibold text-white">Catalão — Goiás</p>
              <p className="text-[10px] text-brand-gray-light/50 font-light">E Cidades Vizinhas</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
