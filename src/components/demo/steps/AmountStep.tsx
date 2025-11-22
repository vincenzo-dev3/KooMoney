import { useStore } from "@/store/useStore";
import { Button } from "@/components/demo/ui/Button";

const AMOUNTS = [10, 25, 50];

export function AmountStep() {
    const { setStep, giftAmount, setGiftData, giftMessage } = useStore();

    const handleAmountChange = (val: number) => {
        setGiftData(val, giftMessage);
    };

    const handleNext = () => {
        if (giftAmount > 0) {
            setStep('processing');
        }
    };

    return (
        <div className="space-y-8 pt-8 text-center">
            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase">Amount to Gift</label>
                <div className="flex justify-center items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-navy">$</span>
                    <input
                        type="number"
                        value={giftAmount || ''}
                        onChange={(e) => handleAmountChange(Number(e.target.value))}
                        placeholder="0"
                        className="text-6xl font-extrabold text-slate-navy bg-transparent border-none focus:ring-0 p-0 placeholder:text-slate-200 min-w-[1ch] text-left"
                        style={{ width: `${Math.max(1, (giftAmount || '').toString().length)}ch` }}
                    />
                </div>
            </div>

            <div className="flex justify-center gap-3">
                {AMOUNTS.map((amt) => (
                    <button
                        key={amt}
                        onClick={() => handleAmountChange(amt)}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${giftAmount === amt ? 'bg-cyan text-white shadow-lg shadow-cyan/30' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                    >
                        ${amt}
                    </button>
                ))}
                <button
                    onClick={() => handleAmountChange(1240.50)}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${giftAmount === 1240.50 ? 'bg-cyan text-white shadow-lg shadow-cyan/30' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                >
                    Max
                </button>
            </div>

            <Button onClick={handleNext} className="w-full" disabled={!giftAmount}>
                Wrap Gift
            </Button>
        </div>
    );
}
