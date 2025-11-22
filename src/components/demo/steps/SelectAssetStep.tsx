import { useStore } from "@/store/useStore";
import { ChevronRight } from "lucide-react";

const ASSETS = [
    { id: 'hbar', name: 'Hedera', symbol: 'HBAR', balance: '10,000', icon: 'H', color: 'bg-black' },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC', balance: '500', icon: '$', color: 'bg-blue-500' },
    { id: 'sauce', name: 'Sauce', symbol: 'SAUCE', balance: '25,000', icon: 'S', color: 'bg-pink-500' },
];

export function SelectAssetStep() {
    const { setStep, setSelectedAsset } = useStore();

    const handleSelect = (asset: typeof ASSETS[0]) => {
        setSelectedAsset(asset);
        setStep('modal-customize');
    };

    return (
        <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-slate-navy text-center">What do you want to gift?</h2>

            <div className="space-y-3">
                {ASSETS.map((asset) => (
                    <button
                        key={asset.id}
                        onClick={() => handleSelect(asset)}
                        className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full ${asset.color} text-white flex items-center justify-center font-bold`}>
                                {asset.icon}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-slate-navy">{asset.name}</div>
                                <div className="text-xs text-slate-500">Balance: {asset.balance} {asset.symbol}</div>
                            </div>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-slate-400 transition-colors" />
                    </button>
                ))}
            </div>
        </div>
    );
}
