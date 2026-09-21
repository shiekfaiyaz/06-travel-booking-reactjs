
"use client";

import { useState } from "react";

export default function StaySearch() {
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        console.log("Search location:", location);
        // Later: filter your stay cards based on this location
    };

    return (
   <section className="w-full text-center">

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Find the Best{" "}
                <span className="text-green-300">Stays</span>
            </h1>

            <p className="mt-2 text-gray-600">
                Search hotels and stays by destination.
            </p>

            {/* Search Box */}
            <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-md sm:flex-row">

                {/* Location */}
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Where do you want to stay?"
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-green-300"
                />

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="rounded-xl bg-green-300 px-7 py-3 font-semibold text-gray-900 transition hover:bg-green-400"
                >
                    Search
                </button>

            </div>
        </section>
    );
}

