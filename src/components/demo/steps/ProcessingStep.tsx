import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CARD_DESIGNS } from "@/lib/demo/constants";

export function ProcessingStep() {
    const { setStep, selectedCardStyle, giftAmount, selectedAsset } = useStore();
    const [status, setStatus] = useState("Wrapping your gift...");

    const design = CARD_DESIGNS.find(d => d.id === selectedCardStyle) || CARD_DESIGNS[0];

    useEffect(() => {
        const t1 = setTimeout(() => {
            setStatus("Generating Magic Link...");
        }, 2000);

        const t2 = setTimeout(() => {
            setStep('success');
        }, 4000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [setStep]);

    return (
        <div className="flex flex-col items-center justify-center h-[400px] space-y-8 w-full">
            {/* Card Preview */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`w-full max-w-[320px] aspect-[1.6/1] rounded-3xl ${design.bg} relative shadow-2xl overflow-hidden flex items-center justify-center`}
            >
                <div className="absolute top-4 left-4 flex items-center gap-1.5 opacity-90 z-10">
                    <img src="/koo-logo.png" alt="Koo" className="w-5 h-5 object-contain bg-white/20 rounded-full p-0.5" />
                    <span className="font-bold text-white text-xs">Koo Money</span>
                </div>

                {/* Main Icon */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl drop-shadow-lg"
                >
                    {design.icon}
                </motion.div>

                {/* Amount Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between border border-white/10">
                    <div>
                        <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Gift Card Value</div>
                        <div className="text-white font-bold text-lg">
                            ${giftAmount} of {selectedAsset?.symbol || 'HBAR'}
                        </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${selectedAsset?.symbol === 'USDC' ? 'bg-blue-500 text-white' : selectedAsset?.symbol === 'SAUCE' ? 'bg-pink-500 text-white' : 'bg-black text-white'}`}>
                        {selectedAsset?.icon || 'H'}
                    </div>
                </div>
            </motion.div>

            {/* Status & Progress */}
            <div className="space-y-4 text-center w-full max-w-[200px]">
                <motion.h3
                    key={status}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg font-bold text-slate-navy"
                >
                    {status}
                </motion.h3>

                {/* Progress Bar */}
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden w-full">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        className="h-full bg-cyan rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
