import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function FakeLoginModal({ onClose }: { onClose: () => void }) {
    const setStep = useStore((s) => s.setStep);
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setStep('onboarding');
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white w-full max-w-sm rounded-[2rem] p-8 shadow-2xl relative z-10 text-center space-y-6"
            >
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-slate-navy">Login to Claim</h2>
                    <p className="text-slate-500 text-sm">Create your Koo wallet in seconds.</p>
                </div>

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-navy font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-sm"
                >
                    {loading ? (
                        <Loader2 className="animate-spin text-slate-400" />
                    ) : (
                        <>
                            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">G</div>
                            Sign in with Google
                        </>
                    )}
                </button>

                <p className="text-xs text-slate-400">
                    By continuing you agree to our Terms of Service.
                </p>
            </motion.div>
        </div>
    );
}
