
"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPanel() {
    const { wishlist, removeFromWishlist } = useWishlistStore();

    return (
        <div className="absolute right-0 top-full z-50 mt-3 w-80 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
                Wishlist
            </h3>

            {wishlist.length === 0 ? (
                <p className="py-8 text-center text-sm text-gray-500">
                    No saved stays yet.
                </p>
            ) : (
                <div className="space-y-3">
                    {wishlist.map((stay) => (
                        <div
                            key={stay.id}
                            className="flex items-center gap-3 rounded-xl border border-gray-100 p-2"
                        >
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src={stay.image}
                                    alt={stay.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h4 className="truncate text-sm font-semibold text-gray-900">
                                    {stay.name}
                                </h4>

                                <p className="mt-1 text-sm text-gray-500">
                                    {`$${stay.price} / night`}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => removeFromWishlist(stay.id)}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-100 hover:text-red-500"
                            >
                                <X size={17} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

