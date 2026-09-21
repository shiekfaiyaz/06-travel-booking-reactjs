
"use client";

import { useState } from "react";

export default function FlightSearch() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departure, setDeparture] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [travelers, setTravelers] = useState("1");

    const handleSearch = () => {
        console.log({
            from,
            to,
            departure,
            returnDate,
            travelers,
        });
    };

    return (
        <section className="w-full">
            <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-md md:grid-cols-2 lg:grid-cols-5">

                {/* From */}
                <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="From (e.g. Hyderabad)"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-green-300"
                />

                {/* To */}
                <input
                    type="text"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="To (e.g. Dubai)"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-green-300"
                />

                {/* Departure */}
                <input
                    type="date"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-green-300"
                />

                {/* Return */}
                <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="rounded-xl border border-gray-200 px-4 py-3 text-gray-900 outline-none transition focus:border-green-300"
                />

                {/* Travelers + Search */}
                <div className="flex gap-2">
                    <select
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-3 text-gray-900 outline-none focus:border-green-300"
                    >
                        <option value="1">1 Traveler</option>
                        <option value="2">2 Travelers</option>
                        <option value="3">3 Travelers</option>
                        <option value="4">4 Travelers</option>
                        <option value="5">5 Travelers</option>
                    </select>

                    <button
                        onClick={handleSearch}
                        className="rounded-xl bg-green-300 px-5 py-3 font-semibold text-gray-900 transition hover:bg-green-400"
                    >
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}
