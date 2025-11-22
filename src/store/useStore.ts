import { create } from 'zustand';

type Step =
    | 'dashboard'
    | 'modal-select'
    | 'modal-customize'
    | 'modal-amount'
    | 'processing'
    | 'success'
    | 'recipient-view'
    | 'login'
    | 'onboarding'
    | 'recipient-dashboard';

interface Store {
    step: Step;
    giftAmount: number;
    giftMessage: string;
    selectedAsset: { symbol: string; name: string; balance: string; icon: string } | null;
    selectedCardStyle: string;

    // Actions
    setStep: (step: Step) => void;
    setGiftData: (amount: number, msg: string) => void;
    setSelectedAsset: (asset: Store['selectedAsset']) => void;
    setSelectedCardStyle: (style: string) => void;
    reset: () => void;
}

export const useStore = create<Store>((set) => ({
    step: 'dashboard',
    giftAmount: 0,
    giftMessage: '',
    selectedAsset: null,
    selectedCardStyle: 'birthday',

    setStep: (step) => set({ step }),
    setGiftData: (amount, msg) => set({ giftAmount: amount, giftMessage: msg }),
    setSelectedAsset: (asset) => set({ selectedAsset: asset }),
    setSelectedCardStyle: (style) => set({ selectedCardStyle: style }),
    reset: () => set({
        step: 'dashboard',
        giftAmount: 0,
        giftMessage: '',
        selectedAsset: null,
        selectedCardStyle: 'birthday'
    }),
}));
