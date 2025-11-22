'use client';

import { motion } from 'framer-motion';

const gifts = [
  {
    id: 'card-1',
    image: '/1.svg',
  },
  {
    id: 'card-2',
    image: '/2.svg',
  },
  {
    id: 'card-3',
    image: '/3.svg',
  },
];

export const CatalogGrid = () => {
  return (
    <section className="py-24 px-6 bg-white/50">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-6 text-center tracking-tight">One Protocol. Every Asset.</h2>
        <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether it’s USDC or SAUCE, wrap any Hedera asset into a magic link. Skip the &quot;seed phrase&quot; tutorial—Koo allows your friends to receive value first and generate a wallet automatically, making it the easiest entry point into the ecosystem.
        </p>

        {/* Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden py-10 mask-linear-gradient">
          <div className="flex">
            <motion.div
              className="flex gap-8"
              animate={{ x: "-25%" }}
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
              }}
            >
              {/* Duplicate the items to create a seamless loop (4 sets) */}
              {[...gifts, ...gifts, ...gifts, ...gifts].map((gift, index) => (
                <motion.div
                  key={`${gift.id}-${index}`}
                  className="relative cursor-pointer group"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <div className="relative w-[420px] h-[300px] flex-shrink-0 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={gift.image}
                      alt="Gift Card"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
