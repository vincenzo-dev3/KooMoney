import { useStore } from "@/store/useStore";
import { Button } from "@/components/demo/ui/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, Gift } from "lucide-react";
import confetti from "canvas-confetti";
import { FakeLoginModal } from "./FakeLoginModal";

export function RecipientUnboxing() {
    const { giftAmount, giftMessage, step } = useStore();
    const [opened, setOpened] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleOpen = () => {
        setOpened(true);
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#22D3EE', '#F59E0B', '#F2FBF9']
        });
    };

    const handleClaim = () => {
        setShowLogin(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <AnimatePresence>
                {!opened ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        className="text-center space-y-8 cursor-pointer"
                        onClick={handleOpen}
                    >
                        <motion.div
                            animate={{
                                rotate: [-2, 2, -2],
                                y: [0, -10, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2
                            }}
                            className="w-64 h-48 bg-white rounded-3xl shadow-clay flex items-center justify-center relative mx-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent rounded-3xl" />
                            <MailOpen size={80} className="text-cyan" />
                            <div className="absolute -top-4 -right-4 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce">
                                !
                            </div>
                        </motion.div>

                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-slate-navy">You received a gift!</h1>
                            <p className="text-slate-500">Tap to open</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full max-w-sm space-y-8 text-center"
                    >
                        {/* The Gift Card */}
                        <div className="bg-gradient-to-br from-pink-400 to-rose-400 rounded-3xl p-8 text-white shadow-2xl transform rotate-2 relative overflow-hidden">
                            <div className="absolute top-4 left-4 flex items-center gap-1.5 opacity-90">
                                <img src="/koo-logo.png" alt="Koo" className="w-5 h-5 object-contain bg-white/20 rounded-full p-0.5" />
                                <span className="font-bold text-white text-xs">Koo Money</span>
                            </div>
                            <div className="text-6xl mb-4 mt-4">🎂</div>
                            <div className="text-3xl font-bold mb-2">${giftAmount || 25}.00</div>
                            <div className="font-medium opacity-90">HBAR</div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-sm space-y-4">
                            <p className="text-slate-navy font-medium italic">"{giftMessage || "Happy Birthday!"}"</p>
                            <div className="h-px bg-slate-100 w-full" />
                            <Button onClick={handleClaim} className="w-full">
                                Claim Gift
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showLogin && <FakeLoginModal onClose={() => setShowLogin(false)} />}
            </AnimatePresence>
        </div>
    );
}
