
"use client";

import { useState } from "react";

export default function StayFilter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Filter Button */}
            <div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-medium text-gray-900 shadow-sm transition hover:border-green-300 hover:bg-green-300"
                >
                    ☰ Filters
                </button>
            </div>

            {/* Background Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/40"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-5">
                    <h2 className="text-xl font-bold text-gray-900">
                        Filter Stays
                    </h2>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-2xl text-gray-500 hover:text-gray-900"
                    >
                        ×
                    </button>
                </div>

                {/* Destination */}
                <div className="mt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                        Destination
                    </h3>

                    <input
                        type="text"
                        placeholder="Enter destination"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-300"
                    />
                </div>

                {/* Date */}
                <div className="mt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                        Travel Date
                    </h3>

                    <input
                        type="date"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-300"
                    />
                </div>

                {/* Guests */}
                <div className="mt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                        Guests
                    </h3>

                    <select className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-300">
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                    </select>
                </div>

                {/* Price */}
                <div className="mt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                        Price Range
                    </h3>

                    <input
                        type="range"
                        min="50"
                        max="500"
                        className="w-full accent-green-300"
                    />

                    <div className="mt-2 flex justify-between text-sm text-gray-500">
                        <span>$50</span>
                        <span>$500+</span>
                    </div>
                </div>

                {/* Categories */}
                <div className="mt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                        Stay Type
                    </h3>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            Hotels
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            Villas
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            Apartments
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            Resorts
                        </label>
                    </div>
                </div>

                {/* Rating */}
                <div className="mt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                        Rating
                    </h3>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            ⭐ 4.5 & above
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            ⭐ 4.0 & above
                        </label>
                    </div>
                </div>

                {/* Facilities */}
                <div className="mt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                        Facilities
                    </h3>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            AC
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            Free Wi-Fi
                        </label>

                        <label className="flex items-center gap-3">
                            <input type="checkbox" />
                            Swimming Pool
                        </label>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3 border-t pt-5">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 rounded-lg bg-green-300 px-4 py-3 font-semibold text-gray-900 transition hover:bg-green-400"
                    >
                        Apply
                    </button>
                </div>
            </aside>
        </>
    );
}

