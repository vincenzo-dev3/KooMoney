import { cn } from "@/lib/demo/utils";
import { ReactNode } from "react";

interface ClayCardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function ClayCard({ children, className, onClick }: ClayCardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "bg-white rounded-3xl shadow-clay ring-1 ring-white/50 ring-inset",
                "transition-transform duration-300 hover:scale-[1.02]",
                onClick && "cursor-pointer",
                className
            )}
        >
            {children}
        </div>
    );
}
