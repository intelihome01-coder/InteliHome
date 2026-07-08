import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  // Map our dynamic icon names safely to Lucide icons
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a default fallback icon (Settings) if not found
    const Fallback = Icons.Settings;
    return <Fallback className={className} size={size} id={`fallback-icon-${name}`} />;
  }
  
  return <IconComponent className={className} size={size} id={`icon-${name.toLowerCase()}`} />;
}
