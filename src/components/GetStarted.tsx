'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const GetStarted = () => {
  return (
    <section className="py-32 px-6 bg-page">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="mx-auto max-w-5xl bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden border-4 border-white ring-1 ring-slate-100">

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="flex-1 z-10 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight tracking-tight">
            Get Started. <br />
            <span className="text-slate-400">Introduce your friends to Hedera the easy way.</span>
          </h2>
          <div className="flex justify-center lg:justify-start">
            <Button size="lg" className="clay-button bg-slate-900 text-white hover:bg-slate-800 text-lg px-12 py-6 shadow-lg shadow-slate-900/20" onClick={() => window.location.href = '/demo'}>Send a Gift</Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center z-10">
          <motion.div
            className="w-[320px] md:w-[400px] relative z-10"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/1.svg"
              alt="HBAR Gift Card"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
