import { useStore } from "@/store/useStore";
import { Button } from "@/components/demo/ui/Button";
import { useState, useEffect } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import confetti from "canvas-confetti";

export function SuccessStep() {
    const { setStep, giftAmount, selectedAsset } = useStore();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#22D3EE', '#F59E0B', '#F2FBF9']
        });
    }, []);

    const handleCopy = () => {
        setCopied(true);
        confetti({
            particleCount: 30,
            spread: 50,
            origin: { y: 0.7 },
            colors: ['#22D3EE']
        });
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 pt-4 text-center">
            <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                    <Check size={40} strokeWidth={4} />
                </div>
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-navy">Ready to Send!</h2>
                <p className="text-slate-500">
                    You wrapped <strong className="text-slate-navy">${giftAmount}</strong> of {selectedAsset?.name || 'HBAR'}.
                    <br />Share the link to gift it.
                </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-between border border-slate-100">
                <code className="text-slate-500 text-sm truncate max-w-[200px]">koo.money/gift/x8z9...</code>
                <button onClick={handleCopy} className="text-cyan font-bold text-sm hover:underline">
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>

            <div className="space-y-3">
                <Button onClick={handleCopy} className="w-full flex items-center justify-center gap-2">
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? 'Link Copied!' : 'Copy Link'}
                </Button>
                <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                    <Share2 size={18} /> Share via...
                </Button>
            </div>

            <button
                onClick={() => setStep('dashboard')}
                className="text-slate-400 text-sm font-medium hover:text-slate-500"
            >
                Close
            </button>

            {/* Recipient View Button */}
            <div className="pt-4">
                <Button 
                    onClick={() => setStep('recipient-view')} 
                    variant="secondary"
                    className="w-full bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-100 text-indigo-600 hover:from-indigo-100 hover:to-purple-100"
                >
                    👀 Show Recipient View
                </Button>
            </div>
        </div>
    );
}
