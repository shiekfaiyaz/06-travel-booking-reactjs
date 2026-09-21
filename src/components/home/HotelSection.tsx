
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const hotels = [
    {
        name: "Grand Palace Hotel",
        location: "Hyderabad, India",
        rating: "4.5",
        reviews: "1K+",
        nights: "2 Days 2 Nights",
        price: "$120",
        image: "/images/hotel1.jpg",
    },
    {
        name: "Ocean View Resort",
        location: "Goa, India",
        rating: "4.8",
        reviews: "850+",
        nights: "2 Days 2 Nights",
        price: "$150",
        image: "/images/hotel2.jpg",
    },
    {
        name: "Royal City Hotel",
        location: "New Delhi, India",
        rating: "4.6",
        reviews: "900+",
        nights: "2 Days 2 Nights",
        price: "$110",
        image: "/images/hotel3.jpg",
    },
    {
        name: "Luxury Stay",
        location: "Mumbai, India",
        rating: "4.7",
        reviews: "1.2K+",
        nights: "2 Days 2 Nights",
        price: "$140",
        image: "/images/hotel4.jpg",
    },
    {
        name: "Mountain Resort",
        location: "Manali, India",
        rating: "4.9",
        reviews: "700+",
        nights: "2 Days 2 Nights",
        price: "$160",
        image: "/images/hotel5.jpg",
    },
];

export default function HotelSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Desktop: 4 cards visible
    const visibleCards = 4;

    // Prevent slider from creating empty space
    const maxIndex = hotels.length - visibleCards;

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const previousSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section id="hotels" className="mx-auto max-w-7xl px-4 py-16">

            {/* Section Title */}
            <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-300">
                    Find Your Stay
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Popular{" "}
                    <span className="text-green-300">
                        Hotels
                    </span>
                </h2>

                <p className="mt-2 text-gray-600">
                    Discover comfortable stays for your next journey.
                </p>
            </div>

            {/* Slider */}
            <div className="relative">

                {/* Slider Viewport */}
                <div className="overflow-hidden">

                    {/* Cards */}
                    <div
                        className="flex gap-5 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 320}px)`,
                        }}
                    >
                        {hotels.map((hotel) => (
                            <Link
                                href="/stays"
                                key={hotel.name}
                                className="group min-w-[300px] overflow-hidden rounded-2xl
                                border border-gray-200 bg-white shadow-sm
                                transition duration-300 hover:-translate-y-1
                                hover:shadow-xl"
                            >
                                {/* Hotel Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={hotel.image}
                                        fill
                                        alt={hotel.name}
                                        className="object-cover transition duration-500
                                        group-hover:scale-105"
                                    />
                                </div>

                                {/* Hotel Details */}
                                <div className="p-5">

                                    {/* Rating */}
                                    <span
                                        className="inline-block rounded-full bg-green-100
                                        px-3 py-1 text-sm font-medium text-gray-800"
                                    >
                                        ⭐ {hotel.rating} {hotel.reviews}
                                    </span>

                                    {/* Name */}
                                    <h3 className="mt-3 text-lg font-bold text-gray-900">
                                        {hotel.name}
                                    </h3>

                                    {/* Location */}
                                    <p className="mt-1 text-sm text-gray-500">
                                        📍 {hotel.location}
                                    </p>

                                    {/* Duration */}
                                    <p className="mt-3 text-sm text-gray-500">
                                        {hotel.nights}
                                    </p>

                                    {/* Price */}
                                    <p className="mt-2 text-xl font-bold text-gray-900">
                                        {hotel.price}
                                        <span className="text-sm font-normal text-gray-500">
                                            {" "} / night
                                        </span>
                                    </p>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Previous Button */}
                <button
                    onClick={previousSlide}
                    disabled={currentIndex === 0}
                    aria-label="Previous hotels"
                    className="absolute left-2 top-1/2 flex h-11 w-11
                    -translate-y-1/2 items-center justify-center rounded-full
                    border border-green-300 bg-white text-xl text-gray-900
                    shadow-lg transition hover:bg-green-300
                    disabled:cursor-not-allowed disabled:opacity-40"
                >
                    &#10094;
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    aria-label="Next hotels"
                    className="absolute right-2 top-1/2 flex h-11 w-11
                    -translate-y-1/2 items-center justify-center rounded-full
                    border border-green-300 bg-white text-xl text-gray-900
                    shadow-lg transition hover:bg-green-300
                    disabled:cursor-not-allowed disabled:opacity-40"
                >
                    &#10095;
                </button>

            </div>

       

        </section>
    );
}

