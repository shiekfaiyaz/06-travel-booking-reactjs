
import { create } from "zustand";

interface WishlistStay {
    id: number;
    name: string;
    image: string;
    price: number;
}

interface WishlistStore {
    wishlist: WishlistStay[];
    addToWishlist: (stay: WishlistStay) => void;
    removeFromWishlist: (id: number) => void;
    isInWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
    wishlist: [],

    addToWishlist: (stay) =>
        set((state) => ({
            wishlist: [...state.wishlist, stay],
        })),

    removeFromWishlist: (id) =>
        set((state) => ({
            wishlist: state.wishlist.filter((stay) => stay.id !== id),
        })),

    isInWishlist: (id) =>
        get().wishlist.some((stay) => stay.id === id),
}));

