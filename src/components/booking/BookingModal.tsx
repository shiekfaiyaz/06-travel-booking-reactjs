
"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Link from "next/link";

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        country: "",
        dob: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsConfirmed(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setIsConfirmed(false);
        setFormData({
            name: "",
            age: "",
            country: "",
            dob: "",
        });
    };

    return (
        <>
            {/* Book Now Button */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="mt-6 w-full rounded-xl bg-green-300 px-5 py-4 font-bold text-gray-900 transition hover:bg-green-400"
            >
                Book Now
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
                    <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
                        {!isConfirmed ? (
                            <>
                                {/* Close */}
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"
                                >
                                    <X size={20} />
                                </button>

                                <h2 className="text-2xl font-bold text-gray-900">
                                    Demo Booking
                                </h2>

                                <p className="mt-2 rounded-xl bg-green-50 p-3 text-xs leading-5 text-gray-600">
                                    Demo practice project — no real data,
                                    payment, booking or backend processing.
                                </p>

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-6 space-y-4"
                                >
                                    {/* Name */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>

                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-300"
                                        />
                                    </div>

                                    {/* Age */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Age
                                        </label>

                                        <input
                                            required
                                            type="number"
                                            min="1"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            placeholder="Enter your age"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-300"
                                        />
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Country
                                        </label>

                                        <input
                                            required
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Enter your country"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-300"
                                        />
                                    </div>

                                    {/* DOB */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Date of Birth
                                        </label>

                                        <input
                                            required
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-300"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-green-300 px-5 py-3 font-bold text-gray-900 transition hover:bg-green-400"
                                    >
                                        Confirm Demo Booking
                                    </button>
                                </form>
                            </>
                        ) : (
                            /* Confirmation */
                            <div className="py-8 text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <Check
                                        size={34}
                                        className="text-green-600"
                                    />
                                </div>

                                <h2 className="mt-5 text-2xl font-bold text-gray-900">
                                    Thank You!
                                </h2>

                                <p className="mt-2 text-gray-500">
                                    Your demo booking has been confirmed.
                                </p>

                                <p className="mt-2 text-xs text-gray-400">
                                    This is a practice project. No real
                                    booking was made.
                                </p>

                                <Link
                                    href="/"
                                    onClick={closeModal}
                                    className="mt-6 inline-block rounded-xl bg-green-300 px-6 py-3 font-semibold text-gray-900 transition hover:bg-green-400"
                                >
                                    Return Home
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

