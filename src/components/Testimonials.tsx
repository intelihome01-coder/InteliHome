import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-gray-light relative">
      <div className="absolute inset-0 bg-radial-gradient(circle at 90% 10%, rgba(11, 107, 27, 0.03) 0%, transparent 40%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-green font-bold flex items-center justify-center gap-2">
            <MessageSquare size={16} />
            Depoimentos Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-dark tracking-tight">
            Quem contratou, aprova e recomenda
          </h2>
          <div className="h-1.5 w-16 bg-brand-green rounded-full mx-auto" />
          <p className="text-brand-gray-text text-base font-light">
            Veja a opinião de clientes que transformaram suas casas e empresas com as soluções elétricas, de automação e segurança da InteliHome.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              key={item.id}
              className="bg-white border border-slate-200/60 shadow-sm p-8 rounded-2xl flex flex-col justify-between hover:border-brand-green/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Five Stars rating bar */}
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-green fill-brand-green" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-brand-gray-text text-sm leading-relaxed font-light italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center font-display font-bold text-sm text-brand-green">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-dark">{item.name}</h4>
                  <span className="text-[10px] uppercase font-mono text-brand-green font-semibold">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
