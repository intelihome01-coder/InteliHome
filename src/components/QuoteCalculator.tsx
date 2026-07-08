import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Check, ArrowRight, Sparkles, Smartphone, ShieldCheck, Home, Zap, Server } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState<string>('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    { id: 'elétrica', label: 'Elétrica Residencial ou Industrial', icon: Zap },
    { id: 'automação', label: 'Automação (Alexa & Smart Home)', icon: Home },
    { id: 'segurança', label: 'Segurança (CFTV & Alarmes)', icon: ShieldCheck },
    { id: 'redes', label: 'Redes & Cabeamento Estruturado', icon: Server },
  ];

  const propertyTypes = [
    { id: 'pequeno', label: 'Apartamento ou Casa Compacta (Até 100 m²)', desc: 'Ideal para automação básica e manutenção elétrica.' },
    { id: 'medio', label: 'Casa de Médio Porte (100 m² a 250 m²)', desc: 'Ideal para CFTV completo, redes Mesh e automações integradas.' },
    { id: 'grande', label: 'Sobrado ou Alto Padrão (Acima de 250 m²)', desc: 'Ideal para automação completa de iluminação e segurança perimetral.' },
    { id: 'comercial', label: 'Comercial ou Industrial', desc: 'Sistemas elétricos robustos, cabeamento blindado e quadros de comando.' },
  ];

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getWhatsAppURL = () => {
    const servicesString = selectedServices.map((s) => s.toUpperCase()).join(', ');
    const propertyLabel = propertyTypes.find((p) => p.id === propertyType)?.label || propertyType;
    
    let text = `Olá, InteliHome! Usei o Simulador de Orçamento no site:\n\n`;
    text += `👤 *Nome:* ${name || 'Não informado'}\n`;
    text += `📞 *WhatsApp:* ${phone || 'Não informado'}\n`;
    if (email) {
      text += `📧 *E-mail:* ${email}\n`;
    }
    text += `📍 *Cidade:* ${city || 'Não informada'}\n`;
    text += `🏢 *Imóvel:* ${propertyLabel || 'Não informado'}\n`;
    text += `⚡ *Serviços de interesse:* ${servicesString || 'Nenhum selecionado'}\n`;
    if (notes) {
      text += `📝 *Detalhes adicionais:* ${notes}\n`;
    }
    text += `\nGostaria de agendar uma visita ou receber uma estimativa personalizada!`;
    
    return `https://wa.me/5564996091026?text=${encodeURIComponent(text)}`;
  };

  const isFormValid = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return propertyType !== '';
    if (step === 3) return name.trim() !== '' && city.trim() !== '' && phone.trim() !== '';
    return true;
  };

  const handleNextStep = async () => {
    if (step === 3) {
      setIsSubmitting(true);
      try {
        const servicesString = selectedServices.map((s) => s.toUpperCase()).join(', ');
        const propertyLabel = propertyTypes.find((p) => p.id === propertyType)?.label || propertyType;
        const msg = `Imóvel: ${propertyLabel}. Cidade: ${city}. Detalhes: ${notes || 'Nenhum'}`;

        const { error } = await supabase
          .from('leads')
          .insert([
            {
              nome: name,
              telefone: phone,
              email: email || null,
              servico: `Simulador: ${servicesString}`,
              mensagem: msg,
              created_at: new Date().toISOString()
            }
          ]);

        if (error) {
          console.warn('Supabase simulator lead store error (possibly table does not exist):', error.message);
        }
      } catch (err) {
        console.error('Falha ao comunicar com o Supabase para salvar simulador:', err);
      } finally {
        setIsSubmitting(false);
        setStep(4);
      }
    } else {
      setStep(step + 1);
    }
  };

  return (
    <section id="orcamento" className="py-24 bg-brand-gray-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green-tech/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center justify-center gap-2">
            <Calculator size={16} className="text-brand-green" />
            Orçamento Inteligente
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-dark tracking-tight">
            Simulador de Orçamento Exclusivo
          </h2>
          <div className="h-1.5 w-16 bg-brand-green rounded-full mx-auto" />
          <p className="text-brand-gray-text text-sm sm:text-base max-w-2xl mx-auto">
            Selecione o que precisa e receba instantaneamente uma proposta detalhada no seu WhatsApp de forma prática e ágil.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-white border border-slate-200 shadow-xl rounded-3xl overflow-hidden">
          
          {/* Top Progress bar */}
          <div className="bg-brand-dark px-6 py-4 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-brand-green-tech font-mono text-sm font-bold">Passo {step} de 4</span>
              <span className="text-white/40 text-sm">|</span>
              <span className="text-white text-xs font-medium tracking-wide uppercase">
                {step === 1 && 'O que você precisa?'}
                {step === 2 && 'Tipo do imóvel'}
                {step === 3 && 'Seus dados'}
                {step === 4 && 'Roteiro de Atendimento'}
              </span>
            </div>
            {/* Dots */}
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i <= step ? 'bg-brand-green w-6' : 'bg-white/20 w-2'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10 min-h-[300px] flex flex-col justify-between">
            <div>
              {/* STEP 1: Services Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-brand-dark text-lg sm:text-xl">
                    Selecione quais soluções você tem interesse:
                  </h3>
                  <p className="text-brand-gray-text text-xs sm:text-sm">Você pode marcar quantas opções desejar.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {servicesList.map((service) => {
                      const IconComp = service.icon;
                      const isSelected = selectedServices.includes(service.id);
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceToggle(service.id)}
                          className={`p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'bg-brand-green/10 border-brand-green-tech text-brand-green shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100/80 hover:border-slate-300'
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl border transition-all ${
                            isSelected ? 'bg-brand-green text-white border-brand-green/10' : 'bg-white border-slate-200'
                          }`}>
                            <IconComp size={20} />
                          </div>
                          <div>
                            <span className="font-display font-bold text-sm block">{service.label}</span>
                            <span className="text-xs text-brand-gray-text mt-1 block">
                              {service.id === 'elétrica' && 'Projetos, manutenções e quadros.'}
                              {service.id === 'automação' && 'Controle por Alexa, celulares e sensores.'}
                              {service.id === 'segurança' && 'CFTV moderno, alarmes e monitoramento.'}
                              {service.id === 'redes' && 'Cabeamento estruturado e Wi-Fi Mesh.'}
                            </span>
                          </div>
                          {isSelected && (
                            <div className="ml-auto text-brand-green">
                              <Check size={20} className="stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Property Type */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-brand-dark text-lg sm:text-xl">
                    Qual o tipo de imóvel para o serviço?
                  </h3>
                  <p className="text-brand-gray-text text-xs sm:text-sm">Isso nos ajuda a entender a complexidade física do projeto.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {propertyTypes.map((type) => {
                      const isSelected = propertyType === type.id;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setPropertyType(type.id)}
                          className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                            isSelected
                              ? 'bg-brand-green/10 border-brand-green-tech text-brand-green shadow-sm'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100/80 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display font-bold text-sm block">{type.label}</span>
                            {isSelected && (
                              <span className="bg-brand-green text-white text-[10px] uppercase font-mono px-2 py-0.5 rounded font-bold">
                                Selecionado
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-brand-gray-text mt-2">{type.desc}</p>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Client Details */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-brand-dark text-lg sm:text-xl">
                    Quase pronto! Informe seus dados de contato:
                  </h3>
                  <p className="text-brand-gray-text text-xs sm:text-sm">Queremos saber quem você é, de onde fala e como podemos te contatar de volta.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold block">Seu Nome *</label>
                      <input
                        type="text"
                        placeholder="Ex: João Silva"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-green focus:bg-white transition-all font-semibold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold block">Sua Cidade *</label>
                      <input
                        type="text"
                        placeholder="Ex: Caldas Novas, Rio Quente, etc."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-green focus:bg-white transition-all font-semibold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold block">WhatsApp / Telefone *</label>
                      <input
                        type="tel"
                        placeholder="Ex: (64) 9.9609-1026"
                        value={phone}
                        onChange={(e) => {
                          const numbers = e.target.value.replace(/\D/g, '');
                          let formatted = numbers;
                          if (numbers.length > 2) {
                            formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
                          }
                          if (numbers.length > 6) {
                            formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
                          }
                          if (numbers.length > 10) {
                            formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)}.${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
                          }
                          setPhone(formatted);
                        }}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-green focus:bg-white transition-all font-semibold"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold block">Seu E-mail (Opcional)</label>
                      <input
                        type="email"
                        placeholder="Ex: joao@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-green focus:bg-white transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wide text-brand-gray-text font-bold block">Alguma observação ou detalhe do que deseja realizar? (Opcional)</label>
                    <textarea
                      placeholder="Ex: Gostaria de automatizar 3 lâmpadas da sala e colocar 4 câmeras de monitoramento."
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-green focus:bg-white transition-all"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Success / WhatsApp CTA */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto border-2 border-brand-green-tech/30">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-brand-dark text-2xl">
                      Simulação Concluída com Sucesso!
                    </h3>
                    <p className="text-brand-gray-text text-sm max-w-lg mx-auto">
                      Olá <strong>{name}</strong>! Preparamos um roteiro estruturado com as melhores tecnologias para o seu perfil e para sua localidade em <strong>{city}</strong>.
                    </p>
                  </div>

                  <div className="bg-brand-gray-light text-brand-dark rounded-2xl p-6 text-left max-w-xl mx-auto space-y-4 border border-slate-200">
                    <h4 className="font-display font-bold text-brand-green text-sm flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-green-tech stroke-[3]" />
                      Roteiro Exclusivo InteliHome:
                    </h4>
                    
                    <ul className="space-y-2 text-xs text-brand-gray-text">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green font-bold">•</span>
                        <span>Análise estrutural de {propertyType === 'pequeno' ? 'apartamento' : propertyType === 'medio' ? 'casa média' : propertyType === 'grande' ? 'sobrado' : 'estabelecimento comercial/industrial'}.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green font-bold">•</span>
                        <span>Instalações organizadas com cabeamento identificado e certificado.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green font-bold">•</span>
                        <span>Demonstração prática de controle por voz ou smartphone (se aplicável).</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
              {step > 1 && step < 4 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-500 font-semibold hover:bg-slate-50 transition-all text-sm cursor-pointer"
                >
                  Voltar
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={handleNextStep}
                  disabled={!isFormValid() || isSubmitting}
                  className={`px-8 py-3 rounded-xl font-sans font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                    isFormValid() && !isSubmitting
                      ? 'bg-brand-green text-white hover:bg-brand-green-tech shadow-md hover:translate-x-0.5'
                      : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? 'Salvando...' : 'Continuar'}
                  <ArrowRight size={16} />
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedServices([]);
                      setPropertyType('');
                      setName('');
                      setCity('');
                      setNotes('');
                      setPhone('');
                      setEmail('');
                    }}
                    className="px-6 py-3.5 rounded-xl border border-slate-200 text-slate-500 font-semibold hover:bg-slate-50 transition-all text-sm shrink-0 cursor-pointer"
                  >
                    Simular Outro
                  </button>
                  <a
                    href={getWhatsAppURL()}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-green hover:bg-brand-green-tech text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Smartphone size={18} />
                    Enviar Roteiro e Solicitar Orçamento
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
