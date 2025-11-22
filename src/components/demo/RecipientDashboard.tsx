import { useStore } from "@/store/useStore";
import { ClayCard } from "@/components/demo/ui/ClayCard";
import { Button } from "@/components/demo/ui/Button";
import { Gift, Send, ArrowLeftRight, ArrowDown, User, Bird } from "lucide-react";
import { DemoBadge } from "@/components/demo/DemoBadge";

export function RecipientDashboard() {
    const { giftAmount, giftMessage } = useStore();

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
            <ClayCard className="p-8 text-center space-y-2 relative overflow-hidden">
                <div className="absolute -top-6 -right-6 text-cyan/10 rotate-12">
                    <Bird size={120} />
                </div>
                <h2 className="text-slate-400 font-medium text-sm uppercase tracking-wider relative z-10">Total Balance</h2>
                <div className="text-5xl font-extrabold text-slate-navy tracking-tight relative z-10">${(giftAmount || 25).toFixed(2)}</div>
            </ClayCard>

            {/* Action Grid */}
            <div className="grid grid-cols-4 gap-4">
                <ActionButton icon={<Gift />} label="Gift" />
                <ActionButton icon={<Send />} label="Send" />
                <ActionButton icon={<ArrowLeftRight />} label="Swap" />
                <ActionButton icon={<ArrowDown />} label="Receive" />
            </div>

            {/* Transaction History */}
            <div className="space-y-4">
                <h3 className="font-bold text-slate-navy text-lg">Recent Activity</h3>
                <div className="bg-white rounded-3xl p-4 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <ArrowDown size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-slate-navy">Received Gift</div>
                                <div className="text-xs text-slate-400">{giftMessage || "Happy Birthday!"}</div>
                            </div>
                        </div>
                        <div className="font-bold text-green-500">
                            +${(giftAmount || 25).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm bg-white text-slate-navy">
                {icon}
            </div>
            <span className="text-xs font-medium text-slate-500">{label}</span>
        </div>
    );
}
