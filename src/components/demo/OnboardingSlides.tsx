import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
    "Creating your HBAR wallet...",
    "Linking assets...",
    "Securing your account...",
    "Ready!"
];

export function OnboardingSlides() {
    const setStep = useStore((s) => s.setStep);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        if (currentStepIndex < STEPS.length - 1) {
            const timer = setTimeout(() => {
                setCurrentStepIndex((prev) => prev + 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setStep('recipient-dashboard');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentStepIndex, setStep]);

    return (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 space-y-8">
            <div className="w-20 h-20 relative">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 border-4 border-slate-100 rounded-full"
                />
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 border-4 border-cyan border-t-transparent rounded-full"
                />
            </div>

            <div className="text-center space-y-2 h-20">
                <motion.h2
                    key={currentStepIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-xl font-bold text-slate-navy"
                >
                    {STEPS[currentStepIndex]}
                </motion.h2>
            </div>

            <div className="flex gap-2">
                {STEPS.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-500 ${i <= currentStepIndex ? 'w-8 bg-cyan' : 'w-2 bg-slate-200'}`}
                    />
                ))}
            </div>
        </div>
    );
}
