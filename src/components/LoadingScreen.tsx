"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

// --- ASSETS ---
const BirdLogoSVG = () => (
    <img
        src="/koo-logo.png"
        alt="Bird Logo"
        width="160"
        height="160"
        className="object-contain drop-shadow-[0_10px_10px_rgba(34,211,238,0.3)]"
    />
);

const GoldCoin = () => (
    <div className="w-8 h-8 bg-[#F59E0B] rounded-full border-2 border-[#FCD34D] flex items-center justify-center shadow-md z-0">
        <span className="text-[#FFFBEB] font-bold text-xs">$</span>
    </div>
);

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [coins, setCoins] = useState<{ id: string; targetX: number; targetY: number; color: string }[]>([]);
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
