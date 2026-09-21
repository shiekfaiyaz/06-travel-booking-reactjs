'use client';
import Image from "next/image";
import Link from "next/link";
import { stays } from "@/data/stayData";


export default function StayList() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-10">

            {/* Results Title */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Available Stays
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Find a comfortable stay for your next journey.
                </p>
            </div>

            {/* Stay Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                {stays.map((stay) => (
                    <Link
                        key={stay.id}
                        href={`/stays/${stay.id}`}
                        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">

                            <Image
                                src={stay.image}
                                alt={stay.name}
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* Offer */}
                            <span className="absolute left-3 top-3 rounded-full bg-green-300 px-3 py-1 text-xs font-bold text-gray-900">
                                {stay.tag}
                            </span>

                            {/* Wishlist */}
                            <button
                                onClick={(e) => e.preventDefault()}
                                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg shadow"
                            >
                                ♡
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            {/* Category + Rating */}
                            <div className="flex items-center justify-between">
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                                    {stay.category}
                                </span>

                                <span className="text-sm font-medium text-gray-700">
                                    ⭐ {stay.rating} ({stay.reviews})
                                </span>
                            </div>

                            {/* Name */}
                            <h3 className="mt-4 text-xl font-bold text-gray-900">
                                {stay.name}
                            </h3>

                            {/* Location */}
                            <p className="mt-1 text-sm text-gray-500">
                                📍 {stay.location}
                            </p>

                            {/* Dates / Nights */}
                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Stay
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        {stay.nights}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">
                                        Dates
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        {stay.dates}
                                    </p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mt-4">
                                <span className="text-2xl font-bold text-gray-900">
                                    ${stay.price}
                                </span>

                                <span className="text-sm text-gray-500">
                                    {" "} / night
                                </span>
                            </div>

                        </div>
                    </Link>
                ))}

            </div>
        </section>
    );
}

