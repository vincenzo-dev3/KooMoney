'use client';

import { motion } from 'framer-motion';

export const HowItWorks = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-page relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            How it Works
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* LEFT COLUMN: The Sender Journey (Steps 1-3) */}
          <div className="md:col-span-7 space-y-12 relative">

            {/* Vertical Line */}
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/30 to-transparent -z-10" />

            {/* Step 1 */}
            <div className="flex gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 text-2xl shadow-lg shadow-slate-200/50 group-hover:scale-110 transition-transform relative z-10">🪙</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Choose Asset</h3>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-semibold text-cyan-600">Any Token. Any Amount.</span> From micro-tips in HBAR to macro-gifts in USDC. If it’s on Hedera, you can wrap it.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 text-2xl shadow-lg shadow-slate-200/50 group-hover:scale-110 transition-transform relative z-10">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Customize</h3>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-semibold text-cyan-600">Add Personality.</span> Don't just send a transaction. Attach a personal note and wrap your asset in a stunning 3D digital skin.
                </p>
              </div>
            </div>

            {/* Step 3 - The Logistics Flex */}
            <div className="flex gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 text-2xl shadow-lg shadow-slate-200/50 group-hover:scale-110 transition-transform relative z-10">📦</div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">3. Select Delivery</h3>
                  <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-orange-200">Worldwide Shipping</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Send instantly via <span className="font-semibold text-slate-900">Text/Email</span>, or choose <span className="font-semibold text-slate-900">Physical Delivery</span>. We handle the logistics to ship premium gift cards to your recipient’s doorstep—anywhere in the world.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Receiver Benefit (Highlighted Card) */}
          <div className="md:col-span-5 bg-white rounded-[2.5rem] p-8 text-slate-900 relative overflow-hidden shadow-2xl shadow-cyan-500/10 border-4 border-white ring-1 ring-slate-100">
            {/* Abstract Background Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-4">For the Receiver</div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Zero Friction Onboarding.</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-emerald-500 font-bold">✓</div>
                  <p className="text-slate-600 font-medium">No wallet needed to receive.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-emerald-500 font-bold">✓</div>
                  <p className="text-slate-600 font-medium">Instant account creation via Google Login.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-emerald-500 font-bold">✓</div>
                  <p className="text-slate-600 font-medium">Works with Physical QR or Digital Link.</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-sm text-slate-400 italic">"We handle the complexity so you don't have to."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
