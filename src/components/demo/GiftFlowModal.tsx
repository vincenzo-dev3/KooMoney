import { useStore } from "@/store/useStore";
import { motion, AnimatePresence } from "framer-motion";
import { SelectAssetStep } from "./steps/SelectAssetStep";
import { CustomizerStep } from "./steps/CustomizerStep";
import { AmountStep } from "./steps/AmountStep";
import { ProcessingStep } from "./steps/ProcessingStep";
import { SuccessStep } from "./steps/SuccessStep";
import { X } from "lucide-react";

export function GiftFlowModal() {
    const { step, setStep } = useStore();

    const closeModal = () => setStep('dashboard');

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm pointer-events-auto"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white w-full max-w-md rounded-t-[2.5rem] sm:rounded-[2.5rem] p-6 pb-10 shadow-2xl pointer-events-auto relative overflow-hidden min-h-[60vh]"
            >
                {step !== 'processing' && step !== 'success' && (
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors z-10"
                    >
                        <X size={16} />
                    </button>
                )}

                <div className="h-full">
                    {step === 'modal-select' && <SelectAssetStep />}
                    {step === 'modal-customize' && <CustomizerStep />}
                    {step === 'modal-amount' && <AmountStep />}
                    {step === 'processing' && <ProcessingStep />}
                    {step === 'success' && <SuccessStep />}
                </div>
            </motion.div>
        </div>
    );
}
