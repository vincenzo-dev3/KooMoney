import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'clay-button hover:scale-105',
      secondary: 'bg-secondary text-white hover:scale-105 shadow-md rounded-full',
      ghost: 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full',
      outline: 'border-2 border-slate-200 bg-transparent hover:border-slate-400 rounded-full',
      white: 'bg-white text-dark hover:scale-105 shadow-md border border-slate-100 rounded-full',
    };
    
    const sizes = {
      sm: 'px-5 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-bold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'transition-all duration-200 font-bold flex items-center justify-center gap-2 active:scale-95 cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
