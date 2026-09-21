
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        '/images/hero-slide1.jpg',
        '/images/hero-slide2.jpg',
        '/images/hero-slide3.jpg',
    ];

    // Change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id='home' className="relative flex min-h-screen items-center justify-center overflow-hidden">

            {/* Background Images */}
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <Image
                        key={image}
                        src={image}
                        alt={`Travel destination ${index + 1}`}
                        fill
                        priority={index === 0}
                        className={`object-cover transition-all duration-1000 ${currentSlide === index
                                ? 'scale-100 opacity-100'
                                : 'scale-105 opacity-0'
                            }`}
                    />
                ))}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 text-center text-white">


                {/* Main Title - Center */}
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold md:text-6xl">
                        Explore Your Next <span className='text-green-400'>Adventure</span> 
                    </h1>

                    <p className="mt-4 max-w-2xl text-base text-gray-200 md:text-lg">
                        Discover beautiful destinations, hotels, stays and unforgettable journeys.
                    </p>

                    <Link
                        href="/stays"
                        className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
                    >
                        Explore Now
                    </Link>
                </div>

                {/* Search Box - Bottom */}
                <div className="absolute bottom-8 left-1/2 w-full max-w-4xl -translate-x-1/2 px-4">
                    <div className="rounded-2xl bg-white p-4 text-left shadow-xl">

                        <h3 className="mb-4 text-lg font-semibold text-gray-900">
                            Find the best hotels and stays
                        </h3>

                        <div className="flex flex-col gap-3 md:flex-row">
                            <input
                                type="text"
                                placeholder="Where do you want to go?"
                                className="flex-1 rounded-lg border px-4 py-3 text-gray-900 outline-none"
                            />

                            <input
                                type="date"
                                className="rounded-lg border px-4 py-3 text-gray-900 outline-none"
                            />

                            <select className="rounded-lg border px-4 py-3 text-gray-900 outline-none">
                                <option value="">Guests</option>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                            </select>

                            <Link
                                href="/stays"
                                className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white hover:bg-gray-800"
                            >
                                Search
                            </Link>
                        </div>

                    </div>
                </div>

            {/* Slider Dots */}
            <div className="mt-6 flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${currentSlide === index
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    </section >
  );
}

