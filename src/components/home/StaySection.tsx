
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stays = [
  {
    name: "Luxury Beach Villa",
    location: "Goa, India",
    rating: "4.8",
    reviews: "1.2K+",
    nights: "2 Days 2 Nights",
    price: "$180",
    offer: "20% OFF",
    tag: "Beachfront",
    image: "/images/stay1.jpg",
  },
  {
    name: "Modern City Apartment",
    location: "Hyderabad, India",
    rating: "4.6",
    reviews: "850+",
    nights: "2 Days 2 Nights",
    price: "$95",
    offer: "15% OFF",
    tag: "Popular",
    image: "/images/stay2.jpg",
  },
  {
    name: "Mountain View Cottage",
    location: "Manali, India",
    rating: "4.9",
    reviews: "700+",
    nights: "3 Days 2 Nights",
    price: "$140",
    offer: "Limited Deal",
    tag: "Top Rated",
    image: "/images/stay3.jpg",
  },
  {
    name: "Palm Grove Resort",
    location: "Kerala, India",
    rating: "4.7",
    reviews: "950+",
    nights: "2 Days 2 Nights",
    price: "$160",
    offer: "25% OFF",
    tag: "Great Deal",
    image: "/images/stay4.jpg",
  },
  {
    name: "Cozy Forest Cabin",
    location: "Ooty, India",
    rating: "4.8",
    reviews: "600+",
    nights: "2 Days 2 Nights",
    price: "$120",
    offer: "10% OFF",
    tag: "Nature Stay",
    image: "/images/stay5.jpg",
  },
  {
    name: "Boutique Heritage Stay",
    location: "Jaipur, India",
    rating: "4.7",
    reviews: "800+",
    nights: "2 Days 2 Nights",
    price: "$130",
    offer: "Special Deal",
    tag: "Heritage",
    image: "/images/stay6.jpg",
  },
];

export default function StaySection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Desktop: 4 cards visible
    const visibleCards = 4;

    // Prevent slider from creating empty space
    const maxIndex = stays.length - visibleCards;

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const previousSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section id="stays" className="mx-auto max-w-7xl px-4 py-16">

            {/* Section Title */}
            <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-300">
                    Find Your Stay
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Popular{" "}
                    <span className="text-green-300">
                   Stays for Every Kind of Traveller
                    </span>
                </h2>

                <p className="mt-2 text-gray-600">
                   From beachfront villas to cozy mountain cabins, find a stay that fits your journey.
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
                        {stays.map((stay) => (
                            <Link
                                href="/stays"
                                key={stay.name}
                                className="group min-w-[300px] overflow-hidden rounded-2xl
                                border border-gray-200 bg-white shadow-sm
                                transition duration-300 hover:-translate-y-1
                                hover:shadow-xl"
                            >
                                {/* Hotel Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={stay.image}
                                        fill
                                        alt={stay.name}
                                        className="object-cover transition duration-500
                                        group-hover:scale-105"
                                    />
                                </div>

                                {/* Hotel Details */}
                                <div className="p-5 flex-col">

                                    {/* offer */}
                                    <p>{stay.offer}</p>
                                    <span className="text-blue-300 font-bold">{stay.tag}</span>
                                    <br />

                                    {/* Rating */}
                                    <span
                                        className="inline-block rounded-full bg-green-100
                                        px-3 py-1 text-sm font-medium text-gray-800"
                                    >
                                        ⭐ {stay.rating} {stay.reviews}
                                    </span>

                                    {/* Name */}
                                    <h3 className="mt-3 text-lg font-bold text-gray-900">
                                        {stay.name}
                                    </h3>

                                    {/* Location */}
                                    <p className="mt-1 text-sm text-gray-500">
                                        📍 {stay.location}
                                    </p>

                                    {/* Duration */}
                                    <p className="mt-3 text-sm text-gray-500">
                                        {stay.nights}
                                    </p>

                                    {/* Price */}
                                    <p className="mt-2 text-xl font-bold text-gray-900">
                                        {stay.price}
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

