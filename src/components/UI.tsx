/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PrismButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  onClick?: () => void;
}

export const PrismButton = ({ children, variant = 'primary', className = '', onClick }: PrismButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2";
  
  const variants = {
    primary: "prism-gradient text-white shadow-xl shadow-primary/20 hover:scale-[1.02]",
    secondary: "bg-surface-container-highest text-on-surface hover:bg-surface-container-high",
    outline: "border-2 border-primary/20 text-primary hover:bg-primary/5",
    glass: "glass-card text-on-surface hover:bg-white/80"
  };

  return (
    <motion.button 
      whileHover={{ y: -1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  withPrismBorder?: boolean;
}

export const GlassCard = ({ children, className = '', withPrismBorder = false }: GlassCardProps) => {
  return (
    <div className={`glass-card rounded-3xl p-8 ${withPrismBorder ? 'prism-border' : ''} ${className}`}>
      {children}
    </div>
  );
};
