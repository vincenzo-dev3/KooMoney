import { Wrench } from "lucide-react";

export function DemoBadge({ className }: { className?: string }) {
    return (
        <div className={className || "fixed bottom-4 right-4 z-50 group"}>
            <div className="bg-white/90 backdrop-blur-md text-slate-navy p-3 rounded-full shadow-clay border border-white/50 flex items-center gap-3 cursor-help transition-all duration-500 ease-out hover:pl-4 hover:pr-6 hover:py-3 w-12 hover:w-auto overflow-hidden">
                <div className="w-6 h-6 bg-cyan/10 rounded-full flex items-center justify-center shrink-0">
                    <Wrench size={14} className="text-cyan" />
                </div>

                <div className="flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-0 group-hover:w-auto whitespace-nowrap">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-400 group-hover:text-cyan transition-colors">Interactive Demo</span>
                    <span className="text-[10px] text-slate-500 leading-tight whitespace-normal max-w-[200px] hidden group-hover:block">
                        UX Prototype. Simulated Data.
                    </span>
                </div>
            </div>
        </div>
    );
}

