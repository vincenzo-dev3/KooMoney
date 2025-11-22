import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User } from 'lucide-react';

// --- DESIGN TOKENS & CONFIG ---
const COLORS = {
  bgSurface: '#F2FBF9',
  brandPrimary: '#22D3EE',
  brandSecondary: '#6EE7B7',
  brandAccent: '#F59E0B',
  textMain: '#1E293B',
};

// Font injection for Plus Jakarta Sans
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    
    /* Claymorphism Utilities */
    .clay-card {
      background: white;
      box-shadow: 0 20px 40px -12px rgba(34, 211, 238, 0.15);
      border-radius: 24px;
    }
    .clay-btn-primary {
      background: ${COLORS.brandPrimary};
      box-shadow: inset 0px 2px 4px rgba(255,255,255,0.6), inset 0px -4px 4px rgba(0,0,0,0.05);
    }
    .clay-btn-accent {
      background: ${COLORS.brandAccent};
      box-shadow: inset 0px 2px 4px rgba(255,255,255,0.6), inset 0px -4px 4px rgba(0,0,0,0.05);
    }
    /* SVG specific drop shadow to simulate 3D */
    .svg-shadow {
      filter: drop-shadow(0px 10px 10px rgba(34, 211, 238, 0.3));
    }
  `}</style>
);

// --- ASSETS ---

// Recreated the 3D Bird using pure SVG to avoid broken image links
import birdLogo from './src/assets/bird_logo.png';

const BirdLogoSVG = () => (
  <img
    src={birdLogo}
    alt="Bird Logo"
    width="160"
    height="160"
    className="svg-shadow object-contain"
  />
);

const GoldCoin = () => (
  <div className="w-8 h-8 bg-[#F59E0B] rounded-full border-2 border-[#FCD34D] flex items-center justify-center shadow-md z-0">
    <span className="text-[#FFFBEB] font-bold text-xs">$</span>
  </div>
);

// --- COMPONENTS ---

// 1. The Loading Screen
const LoadingScreen = ({ onComplete }) => {
  const [coins, setCoins] = useState([]);
  const [progress, setProgress] = useState(0);

  // Define recipient positions (radial arrangement for aesthetic balance)
  const recipients = [
    { x: 140, y: -80, color: '#22D3EE', size: 14, delay: 0.0 },  // Top right
    { x: 180, y: 20, color: '#6EE7B7', size: 13, delay: 0.15 },   // Right
    { x: 140, y: 100, color: '#F59E0B', size: 14, delay: 0.3 },   // Bottom right
    { x: -140, y: 100, color: '#22D3EE', size: 13, delay: 0.45 }, // Bottom left
    { x: -180, y: 20, color: '#6EE7B7', size: 13, delay: 0.6 },   // Left
  ];

  // Simulation Loop
  useEffect(() => {
    // Progress Bar Logic
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    // Enhanced Coin Spawning - creates coins for each recipient
    const coinSpawner = setInterval(() => {
      const timestamp = Date.now();
      recipients.forEach((recipient, index) => {
        setTimeout(() => {
          const id = `${timestamp}-${index}`;
          setCoins((prev) => [...prev, {
            id,
            targetX: recipient.x,
            targetY: recipient.y,
            color: recipient.color
          }]);

          // Clean up old coins
          setTimeout(() => {
            setCoins((prev) => prev.filter(c => c.id !== id));
          }, 1200);
        }, index * 100); // Stagger coin creation
      });
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(coinSpawner);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F2FBF9]"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center">

        {/* The Distributor Animation - EXPANDED */}
        <div className="relative w-96 h-96 flex items-center justify-center">

          {/* The Bird (Bouncing Source) */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              scaleX: [1, 0.95, 1.05, 1],
              scaleY: [1, 1.05, 0.95, 1]
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute z-20"
          >
            <BirdLogoSVG />
          </motion.div>

          {/* The Coins (Distributing to ALL Recipients) */}
          <AnimatePresence>
            {coins.map((coin) => (
              <motion.div
                key={coin.id}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 1, 1, 0.8, 0],
                  x: coin.targetX,
                  y: coin.targetY,
                  scale: [0.5, 1, 1, 0.8],
                  rotate: 720
                }}
                transition={{
                  duration: 1.0,
                  ease: [0.34, 1.56, 0.64, 1] // Bouncy curve
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <GoldCoin />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Multiple Person Icons - REPOSITIONED RADIALLY */}
          {/* Top Right */}
          <div className="absolute top-8 right-8">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.0 }}
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-slate-100">
                <User size={28} className="text-[#22D3EE]" />
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.15 }}
            >
              <div className="w-13 h-13 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-slate-100">
                <User size={26} className="text-[#6EE7B7]" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-8 right-8">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.3 }}
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-slate-100">
                <User size={28} className="text-[#F59E0B]" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-8 left-8">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.45 }}
            >
              <div className="w-13 h-13 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-slate-100">
                <User size={26} className="text-[#22D3EE]" />
              </div>
            </motion.div>
          </div>

          {/* Left */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.6 }}
            >
              <div className="w-13 h-13 bg-white rounded-2xl shadow-lg flex items-center justify-center border-2 border-slate-100">
                <User size={26} className="text-[#6EE7B7]" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Text & Loading Bar */}
        <div className="mt-8 w-64 text-center">


          {/* Custom Clay Progress Bar */}
          <div className="h-5 w-full bg-white rounded-full p-1 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
            <motion.div
              className="h-full bg-[#6EE7B7] rounded-full shadow-[0_2px_4px_rgba(110,231,183,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// 2. The Landing Page
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F2FBF9] text-[#1E293B] overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 backdrop-blur-md bg-[#F2FBF9]/80 border-b border-slate-100/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#22D3EE] rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-sm transform rotate-3">K</div>
            <span className="font-bold text-xl tracking-tight text-[#1E293B]">JustKoo</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hidden md:block text-[#64748B] hover:text-[#1E293B] font-medium transition-colors">Developers</a>
            <button className="clay-btn-primary text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-white text-[#22D3EE] font-bold px-4 py-2 rounded-full text-sm shadow-sm border border-slate-100"
            >
              <span>🚀</span> Now Live on Hedera
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#1E293B]">
              Send Money.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#6EE7B7]">
                No Wallet Needed.
              </span>
            </h1>
            <p className="text-xl text-[#64748B] leading-relaxed max-w-md font-medium">
              Fly HBAR & Tokens to anyone via link. Friends claim with Google Login. Zero friction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="clay-btn-primary text-white text-lg px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan-200/50">
                Send a Gift <Send size={20} />
              </button>
              <button className="bg-white text-[#64748B] text-lg px-8 py-4 rounded-2xl font-bold hover:text-[#22D3EE] hover:bg-slate-50 transition-colors shadow-sm border border-slate-100">
                How it works
              </button>
            </div>
          </motion.div>

          {/* Right: Visual (The Bird in Action) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center h-[400px]"
          >
            {/* Background Orbs */}
            <motion.div
              animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-32 h-32 bg-[#6EE7B7]/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 30, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 w-48 h-48 bg-[#22D3EE]/20 rounded-full blur-3xl"
            />

            {/* Main Character (SVG Version) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 transform scale-125"
            >
              <BirdLogoSVG />
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Feature Cards */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🎁", title: "Wrap", text: "Choose HBAR or Tokens. Add a note." },
            { icon: "🔗", title: "Link", text: "Get a magic URL. DM it to anyone." },
            { icon: "⚡️", title: "Claim", text: "They login with Gmail. Instant wallet." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="clay-card p-8 flex flex-col items-start gap-4 hover:shadow-xl transition-all cursor-default bg-white border border-slate-50"
            >
              <span className="text-4xl bg-[#F8FAFC] p-4 rounded-2xl border border-slate-100">{card.icon}</span>
              <h3 className="text-xl font-bold text-[#1E293B]">{card.title}</h3>
              <p className="text-[#64748B] leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

// 3. Main App Orchestrator
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <FontStyles />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <LandingPage key="landing" />
        )}
      </AnimatePresence>
    </>
  );
}