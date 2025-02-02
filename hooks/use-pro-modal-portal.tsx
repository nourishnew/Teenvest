import { create } from "zustand";

interface useProModalPortalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	stock: string;
	stockPrice: number;
	setStock: (stock: string) => void;
	setStockPrice: (stockPrice: number) => void;
}

export const useProModalPortal = create<useProModalPortalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	stock: "",
	stockPrice: 0,
	setStock: (stock: string) => set({ stock: stock }),
	setStockPrice: (stockPrice: number) => set({ stockPrice: stockPrice }),
}));
