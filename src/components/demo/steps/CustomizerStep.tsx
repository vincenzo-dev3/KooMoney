import { useStore } from "@/store/useStore";
import { Button } from "@/components/demo/ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link as LinkIcon } from "lucide-react";
import { CARD_DESIGNS } from "@/lib/demo/constants";

export function CustomizerStep() {
    const { setStep, selectedCardStyle, setSelectedCardStyle, giftMessage, setGiftData, giftAmount } = useStore();
    const [deliveryMethod, setDeliveryMethod] = useState<'link' | 'email'>('link');

    const handleNext = () => {
        setStep('modal-amount');
    };

    return (
        <div className="space-y-6 pt-2">
            {/* Carousel */}
            <div className="overflow-x-auto flex gap-4 pb-4 px-2 no-scrollbar snap-x snap-mandatory">
                {CARD_DESIGNS.map((design) => (
                    <motion.button
                        key={design.id}
                        onClick={() => setSelectedCardStyle(design.id)}
                        className={`relative flex-shrink-0 w-[240px] h-[150px] rounded-2xl ${design.bg} p-6 flex flex-col justify-between text-white shadow-lg snap-center transition-all duration-300 ${selectedCardStyle === design.id ? 'ring-4 ring-cyan/30 scale-105' : 'opacity-70 scale-95'}`}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="text-4xl">{design.icon}</div>
                        <div className="font-bold text-lg">{design.name}</div>
                        {selectedCardStyle === design.id && (
                            <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Delivery Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex">
                <button
                    onClick={() => setDeliveryMethod('link')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${deliveryMethod === 'link' ? 'bg-white text-slate-navy shadow-sm' : 'text-slate-400'}`}
                >
                    <LinkIcon size={14} /> Link
                </button>
                <button
                    onClick={() => setDeliveryMethod('email')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${deliveryMethod === 'email' ? 'bg-white text-slate-navy shadow-sm' : 'text-slate-400'}`}
                >
                    <Mail size={14} /> Email
                </button>
            </div>

            {/* Message Input */}
            <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Message</label>
                <textarea
                    value={giftMessage}
                    onChange={(e) => setGiftData(giftAmount, e.target.value)}
                    placeholder="Write a nice note..."
                    className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-cyan/50 resize-none h-24 text-slate-navy placeholder:text-slate-300 font-medium"
                />
            </div>

            <Button onClick={handleNext} className="w-full">Next</Button>
        </div>
    );
}
