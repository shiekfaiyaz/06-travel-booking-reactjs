'use client';

import { useState } from "react";

export default function FlightFilters() {
const [isOpen, setIsOpen] = useState(false);


return (
    <>
        {/* Filter Button */}
        <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-medium text-gray-900 shadow-sm transition hover:border-green-300 hover:bg-green-300"
        >
            ☰ Filters
        </button>

        {/* Filter Sidebar */}
        {isOpen && (
            <div className="fixed inset-0 z-50">
                {/* Overlay */}
                <div
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-black/40"
                />

                {/* Sidebar */}
                <div className="absolute left-0 top-0 h-full w-80 overflow-y-auto bg-white p-6 shadow-xl">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">
                            Filters
                        </h2>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl text-gray-500 hover:text-gray-900"
                        >
                            ×
                        </button>
                    </div>

                    {/* Stops */}
                    <div className="border-b border-gray-200 pb-5">
                        <h3 className="mb-3 font-semibold text-gray-900">
                            Stops
                        </h3>

                        <div className="space-y-3 text-sm text-gray-700">
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                Non-stop
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                1 Stop
                            </label>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="border-b border-gray-200 py-5">
                        <h3 className="mb-3 font-semibold text-gray-900">
                            Price
                        </h3>

                        <input
                            type="range"
                            min="50"
                            max="2000"
                            defaultValue="1000"
                            className="w-full accent-green-300"
                        />

                        <div className="mt-2 flex justify-between text-sm text-gray-500">
                            <span>$50</span>
                            <span>$2000</span>
                        </div>
                    </div>

                    {/* Airlines */}
                    <div className="border-b border-gray-200 py-5">
                        <h3 className="mb-3 font-semibold text-gray-900">
                            Airlines
                        </h3>

                        <div className="space-y-3 text-sm text-gray-700">
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                Emirates
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                Qatar Airways
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                Singapore Airlines
                            </label>
                        </div>
                    </div>

                    {/* Departure Time */}
                    <div className="py-5">
                        <h3 className="mb-3 font-semibold text-gray-900">
                            Departure Time
                        </h3>

                        <div className="space-y-3 text-sm text-gray-700">
                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                Morning
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                Afternoon
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 accent-green-300"
                                />
                                Evening
                            </label>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex-1 rounded-xl bg-green-300 px-4 py-3 font-semibold text-gray-900 transition hover:bg-green-400"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
);


}
