'use client';

import { motion } from 'framer-motion';

const ideas = [
  { id: 1, title: 'Birthday', amount: '200 HBAR', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Airdrop', amount: '50 HBAR', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Event Swag', amount: '100 HBAR', image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Thank You', amount: '1000 SAUCE', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop' },
];

export const UsageCarousel = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-page">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-slate-800 mb-12 tracking-tight">HBAR Gift Card Usage Ideas</h2>

        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">
          {ideas.map((idea) => (
            <motion.div
              key={idea.id}
              className="min-w-[300px] md:min-w-[400px] h-[300px] rounded-[2.5rem] relative overflow-hidden flex-shrink-0 snap-center group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={idea.image} alt={idea.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 text-white text-sm font-bold inline-block mb-3 shadow-lg">
                  {idea.amount}
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">{idea.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
