import React, { useState } from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'colored';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', variant = 'colored', size = 'md' }: LogoProps) {
  const [logoSrc, setLogoSrc] = useState<string>('/images/logo-intelihome.png');
  const [useFallbackText, setUseFallbackText] = useState(false);

  // Suggested sizes
  const dims = {
    sm: { imgHeight: 'h-6 sm:h-8', svgWidth: 140, textClass: 'text-base sm:text-lg' },
    md: { imgHeight: 'h-10 sm:h-12', svgWidth: 200, textClass: 'text-xl sm:text-3xl' },
    lg: { imgHeight: 'h-12 sm:h-16', svgWidth: 260, textClass: 'text-2xl sm:text-4xl' },
  };

  const currentDims = dims[size];

  const handleImageError = () => {
    if (logoSrc === '/images/logo-intelihome.png') {
      // First fallback: try the root path
      setLogoSrc('/logo-intelihome.png');
    } else {
      // Second fallback: use the premium SVG text logo
      setUseFallbackText(true);
    }
  };

  // If both logo formats fail, fall back to our premium engineered SVG
  if (useFallbackText) {
    return (
      <div className={`flex items-center gap-1.5 sm:gap-2.5 select-none ${className}`} id="brand-fallback-logo">
        <div className="bg-brand-green p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-brand-green-tech/30 flex items-center justify-center transition-all duration-300 shadow-md">
          <Zap className="text-white fill-white/10 w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className={`font-display font-extrabold ${currentDims.textClass} tracking-tight leading-none ${
            variant === 'light' ? 'text-white' : 'text-brand-dark'
          }`}>
            Inteli<span className="text-brand-green-tech">Home</span>
          </span>
          <span className={`text-[9px] uppercase font-mono tracking-widest mt-0.5 hidden sm:block ${
            variant === 'light' ? 'text-brand-gray-light/75' : 'text-brand-gray-text'
          }`}>
            Elétrica & Automação
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`} id="brand-logo-container">
      <img
        src={logoSrc}
        alt="InteliHome"
        className={`${currentDims.imgHeight} w-auto object-contain`}
        onError={handleImageError}
        referrerPolicy="no-referrer"
        id="brand-logo-img"
      />
    </div>
  );
}
