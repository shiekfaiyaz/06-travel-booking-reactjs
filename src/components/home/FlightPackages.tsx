'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const flightObj = [
    {
        country: "USA",
        distance: "13,400 KM from Hyderabad",
        time: "18 Hrs",
        image: "/images/flight1.jpg",
    },
    {
        country: "Dubai",
        distance: "2,200 KM from Hyderabad",
        time: "4 Hrs",
        image: "/images/flight2.jpg",
    },
    {
        country: "Singapore",
        distance: "3,300 KM from Hyderabad",
        time: "5 Hrs",
        image: "/images/flight3.jpg",
    },
    {
        country: "United Kingdom",
        distance: "7,700 KM from Hyderabad",
        time: "10 Hrs",
        image: "/images/flight4.jpg",
    },
    {
        country: "France",
        distance: "7,300 KM from Hyderabad",
        time: "11 Hrs",
        image: "/images/flight5.jpg",
    },
    {
        country: "Thailand",
        distance: "2,900 KM from Hyderabad",
        time: "4 Hrs",
        image: "/images/flight6.jpg",
    },
];


export default function FlightSection() {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Desktop: 4 cards visible
    const visibleCards = 4;

    // Prevent slider from creating empty space
    const maxIndex = flightObj.length - visibleCards;

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const previousSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section id="flights" className="mx-auto max-w-7xl px-4 py-16 bg-green-100">

            {/* Section Title */}
            <div className="mb-8">

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Explore International Trips

                </h2>

                <p className="mt-2 text-gray-600">
                    Discover exciting destinations around the world and plan your next unforgettable journey.
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
                        {flightObj.map((flight) => (
                            <Link
                                href="/flight"
                                key={flight.country}
                                className="group min-w-[300px] overflow-hidden rounded-2xl
                                border border-gray-200 bg-white shadow-sm
                                transition duration-300 hover:-translate-y-1
                                hover:shadow-xl"
                            >
                                {/* Hotel Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={flight.image}
                                        fill
                                        alt={flight.country}
                                        className="object-cover transition duration-500
                                        group-hover:scale-105"
                                    />
                                </div>

                                {/* flight Details */}
                                <div className="p-5 flex-col">
                                    {/* country distance time  */}
                                    <h4 className="text-black font-bold">{flight.country}</h4>
                                    <p className="text-gray-400 ">{flight.distance} <span className="text-gray-400">{flight.time}</span> </p>

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