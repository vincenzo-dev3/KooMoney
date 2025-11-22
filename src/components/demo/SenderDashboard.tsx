import { useStore } from "@/store/useStore";
import { ClayCard } from "@/components/demo/ui/ClayCard";
import { Button } from "@/components/demo/ui/Button";
import { Gift, Send, ArrowLeftRight, ArrowDown, User } from "lucide-react";
import { DemoBadge } from "@/components/demo/DemoBadge";

export function SenderDashboard() {
    const setStep = useStore((s) => s.setStep);

    return (
        <div className="p-6 max-w-md mx-auto space-y-8 pt-12">
            {/* Top Bar */}
            <header className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src="/koo-logo.png" alt="Koo Logo" className="w-12 h-12 object-contain" />
                    <span className="font-bold text-slate-navy text-xl">Koo Money</span>
                </div>
                <div className="flex items-center gap-3">
                    <DemoBadge className="group relative" />
                    <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-400" />
                    </div>
                </div>
            </header>

            {/* Hero Card */}
            <ClayCard className="p-8 text-center space-y-2">
                <h2 className="text-slate-400 font-medium text-sm uppercase tracking-wider">Total Balance</h2>
                <div className="text-5xl font-extrabold text-slate-navy tracking-tight">$1,240.50</div>
            </ClayCard>

            {/* Action Grid */}
            <div className="grid grid-cols-4 gap-4">
                <ActionButton icon={<Gift />} label="Gift" onClick={() => setStep('modal-select')} active />
                <ActionButton icon={<Send />} label="Send" />
                <ActionButton icon={<ArrowLeftRight />} label="Swap" />
                <ActionButton icon={<ArrowDown />} label="Receive" />
            </div>

            {/* Trending Assets */}
            <div className="space-y-4">
                <h3 className="font-bold text-slate-navy text-lg">Trending Assets</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    <AssetCard
                        name="HBAR"
                        symbol="Hedera"
                        color="from-cyan/20 to-cyan/5"
                        icon={<div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs">H</div>}
                    />
                    <AssetCard
                        name="SAUCE"
                        symbol="Sauce"
                        color="from-pink-500/20 to-pink-500/5"
                        icon={<div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xs">S</div>}
                    />
                    <AssetCard
                        name="USDC"
                        symbol="USD Coin"
                        color="from-blue-500/20 to-blue-500/5"
                        icon={<div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">$</div>}
                    />
                </div>
            </div>

            {/* Dev Tools */}
            <div className="pt-8 pb-4">
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

function ActionButton({ icon, label, onClick, active }: { icon: React.ReactNode, label: string, onClick?: () => void, active?: boolean }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <button
                onClick={onClick}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-all active:scale-95 ${active ? 'bg-cyan text-white shadow-cyan/30 shadow-lg' : 'bg-white text-slate-navy hover:bg-slate-50'}`}
            >
                {icon}
            </button>
            <span className="text-xs font-medium text-slate-500">{label}</span>
        </div>
    );
}

function AssetCard({ name, symbol, color, icon }: { name: string, symbol: string, color: string, icon: React.ReactNode }) {
    return (
        <div className={`min-w-[140px] p-4 rounded-3xl bg-gradient-to-br ${color} border border-white/50 flex flex-col gap-3`}>
            {icon}
            <div>
                <div className="font-bold text-slate-navy">{name}</div>
                <div className="text-xs text-slate-500">{symbol}</div>
            </div>
        </div>
    );
}
