
"use client";

import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";

interface WishlistButtonProps {
    stay: {
        id: number;
        name: string;
        image: string;
        price: number;
    };
}

export default function WishlistButton({
    stay,
}: WishlistButtonProps) {
    const { wishlist, addToWishlist, removeFromWishlist } =
        useWishlistStore();

    const isSaved = wishlist.some((item) => item.id === stay.id);

    const handleWishlist = () => {
        if (isSaved) {
            removeFromWishlist(stay.id);
        } else {
            addToWishlist(stay);
        }
    };

    return (
        <button
            type="button"
            onClick={handleWishlist}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:border-green-300 hover:bg-green-300"
        >
            <Heart
                size={21}
                fill={isSaved ? "currentColor" : "none"}
                className={isSaved ? "text-red-500" : "text-gray-700"}
            />
        </button>
    );
}

