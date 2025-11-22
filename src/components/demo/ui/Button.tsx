import { cn } from "@/lib/demo/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: ReactNode;
}

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
    const variants = {
        primary: "bg-cyan text-white shadow-lg shadow-cyan/30 hover:bg-cyan/90",
        secondary: "bg-white text-slate-navy shadow-sm border border-slate-100 hover:bg-slate-50",
        ghost: "bg-transparent text-slate-navy hover:bg-slate-100/50"
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-2xl font-bold transition-all duration-200 active:scale-95",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
