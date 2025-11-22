"use client";

import { useStore } from "@/store/useStore";
import { SenderDashboard } from "@/components/demo/SenderDashboard";
import { GiftFlowModal } from "@/components/demo/GiftFlowModal";
import { RecipientUnboxing } from "@/components/demo/RecipientUnboxing";
import { OnboardingSlides } from "@/components/demo/OnboardingSlides";
import { RecipientDashboard } from "@/components/demo/RecipientDashboard";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Page() {
  const step = useStore((s) => s.step);
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
      ) : (
        <main className="bg-mint-cream min-h-screen font-sans text-slate-navy overflow-hidden relative" key="demo">
          {/* Sender Flow */}
          {(step === 'dashboard' || step.startsWith('modal-') || step === 'processing' || step === 'success') && (
            <SenderDashboard />
          )}

          {/* Recipient Flow */}
          {step === 'recipient-view' && <RecipientUnboxing />}
          {step === 'onboarding' && <OnboardingSlides />}
          {step === 'recipient-dashboard' && <RecipientDashboard />}

          {/* The Modal Overlay */}
          <AnimatePresence>
            {(step.startsWith('modal-') || step === 'processing' || step === 'success') && (
              <GiftFlowModal />
            )}
          </AnimatePresence>
        </main>
      )}
    </AnimatePresence>
  );
}
