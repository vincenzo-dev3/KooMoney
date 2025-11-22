'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

export const PhysicalCards = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax effect
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const [stars, setStars] = React.useState<Array<{ width: string; height: string; top: string; left: string; opacity: number; animationDuration: string }>>([]);

  React.useEffect(() => {
    const newStars = [...Array(20)].map(() => ({
      width: Math.random() * 2 + 1 + 'px',
      height: Math.random() * 2 + 1 + 'px',
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      opacity: Math.random() * 0.7 + 0.3,
      animationDuration: Math.random() * 3 + 2 + 's'
    }));
    setStars(newStars);
  }, []);

  function onMouseMove(e: React.MouseEvent) {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  }

  return (
    <section
      className="bg-black py-32 px-6 overflow-hidden relative"
      onMouseMove={onMouseMove}
    >
      {/* Starry Background */}
      <div className="absolute inset-0 opacity-80 pointer-events-none">
        {/* Random stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: star.width,
              height: star.height,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
              animation: `twinkle ${star.animationDuration} infinite ease-in-out`
            }}
          />
        ))}
        {/* Large sparkle stars */}
        <div className="absolute top-20 right-20 text-white/80 text-4xl">✦</div>
        <div className="absolute bottom-40 left-10 text-white/60 text-2xl">✧</div>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        <div className="z-10 order-2 lg:order-1">
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-[600px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/physical-cards.png"
                alt="Physical Crypto Gift Cards"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <div className="z-10 order-1 lg:order-2">
          <h2 className="text-white/80 font-bold text-lg mb-4 tracking-wide uppercase">Physical Cards</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Need a better way to <br />onboard friends?
          </h3>
          <p className="text-slate-400 text-xl mb-8 max-w-md font-medium">
            The perfect gift for the person who "doesn't do crypto." Hand them a premium card loaded with HBAR. They simply scan the QR code to claim and generate their wallet instantly.

          </p>

          {/* Visual Inputs - Clay Style */}
          <div className="flex flex-col gap-4 max-w-md opacity-90 pointer-events-none select-none">
            <div className="h-16 w-full bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm flex items-center px-6 text-white/60 text-sm font-bold">Select Amount</div>
            <div className="h-16 w-full bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm flex items-center px-6 text-white/60 text-sm font-bold">Choose Design</div>
            <div className="h-16 w-full bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm flex items-center px-6 text-white/60 text-sm font-bold">Ships Worldwide</div>
            <div className="h-16 w-full bg-white text-black border border-white rounded-[2rem] flex items-center justify-center font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">Order Now</div>
          </div>
        </div>

      </div>
    </section>
  );
};
