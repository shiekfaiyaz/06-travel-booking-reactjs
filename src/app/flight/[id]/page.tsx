import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, Luggage, MapPin, Plane } from "lucide-react";

import { flights } from "@/data/flightData";

interface FlightDetailsPageProps {
params: Promise<{
id: string;
}>;
}

export default async function FlightDetailsPage({
params,
}: FlightDetailsPageProps) {
const { id } = await params;

const flight = flights.find((item) => item.id === Number(id));

if (!flight) {
    notFound();
}

return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-6xl">
            {/* Back */}
            <Link
                href="/flights"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
                <ArrowLeft size={18} />
                Back to Flights
            </Link>

            {/* Header */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 shrink-0">
                            <Image
                                src={flight.logo}
                                alt={flight.airline}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {flight.airline}
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                {flight.flightNumber} • {flight.class}
                            </p>
                        </div>
                    </div>

                    <div className="sm:text-right">
                        <p className="text-sm text-gray-500">
                            Flight Price
                        </p>
                        <p className="text-3xl font-bold text-gray-900">
                            ${flight.price}
                        </p>
                    </div>
                </div>
            </div>

            {/* Route */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                    Flight Route
                </h2>

                <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                    {/* From */}
                    <div>
                        <p className="text-3xl font-bold text-gray-900">
                            {flight.fromCode}
                        </p>
                        <p className="mt-1 text-gray-500">
                            {flight.from}
                        </p>
                        <p className="mt-3 text-lg font-semibold text-gray-900">
                            {flight.departure}
                        </p>
                        <p className="text-sm text-gray-500">
                            Departure
                        </p>
                    </div>

                    {/* Route Line */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 text-gray-400">
                            <MapPin size={18} />
                            <div className="h-px w-24 bg-gray-300 sm:w-40" />
                            <Plane size={20} />
                            <div className="h-px w-24 bg-gray-300 sm:w-40" />
                            <MapPin size={18} />
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                            <Clock size={16} />
                            {flight.duration}
                        </div>

                        <p className="mt-1 text-sm font-medium text-gray-700">
                            {flight.stops}
                        </p>
                    </div>

                    {/* To */}
                    <div className="md:text-right">
                        <p className="text-3xl font-bold text-gray-900">
                            {flight.toCode}
                        </p>
                        <p className="mt-1 text-gray-500">
                            {flight.to}
                        </p>
                        <p className="mt-3 text-lg font-semibold text-gray-900">
                            {flight.arrival}
                        </p>
                        <p className="text-sm text-gray-500">
                            Arrival
                        </p>
                    </div>
                </div>
            </div>

            {/* Details + Booking */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
                {/* Details */}
                <div className="space-y-6">
                    {/* Flight Information */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-5 text-xl font-bold text-gray-900">
                            Flight Information
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Airline
                                </p>
                                <p className="mt-1 font-semibold text-gray-900">
                                    {flight.airline}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Flight Number
                                </p>
                                <p className="mt-1 font-semibold text-gray-900">
                                    {flight.flightNumber}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Travel Class
                                </p>
                                <p className="mt-1 font-semibold text-gray-900">
                                    {flight.class}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Rating
                                </p>
                                <p className="mt-1 font-semibold text-gray-900">
                                    ★ {flight.rating}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Baggage
                                </p>
                                <p className="mt-1 flex items-center gap-2 font-semibold text-gray-900">
                                    <Luggage size={17} />
                                    {flight.baggage}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Stops
                                </p>
                                <p className="mt-1 font-semibold text-gray-900">
                                    {flight.stops}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Description */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-3 text-xl font-bold text-gray-900">
                            About This Flight
                        </h2>

                        <p className="leading-7 text-gray-600">
                            {flight.description}
                        </p>
                    </section>

                    {/* Amenities */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-5 text-xl font-bold text-gray-900">
                            Amenities
                        </h2>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {flight.amenities.map((amenity) => (
                                <div
                                    key={amenity}
                                    className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                                >
                                    <Check
                                        size={18}
                                        className="text-green-500"
                                    />
                                    <span className="text-sm text-gray-700">
                                        {amenity}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Custom Map */}
                    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-5 text-xl font-bold text-gray-900">
                            Route Map
                        </h2>

                        <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gray-100">
                            <div className="absolute left-[12%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-900" />

                            <div className="absolute right-[12%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-gray-900" />

                            <div className="absolute left-[14%] right-[14%] top-1/2 border-t-2 border-dashed border-gray-400" />

                            <div className="relative z-10 flex h-12 w-12 rotate-45 items-center justify-center rounded-full bg-green-300">
                                <Plane
                                    size={22}
                                    className="-rotate-45 text-gray-900"
                                />
                            </div>

                            <div className="absolute left-[7%] top-[58%] text-sm font-bold text-gray-900">
                                {flight.fromCode}
                            </div>

                            <div className="absolute right-[7%] top-[58%] text-sm font-bold text-gray-900">
                                {flight.toCode}
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between text-sm text-gray-500">
                            <span>{flight.from}</span>
                            <span>{flight.to}</span>
                        </div>
                    </section>
                </div>

                {/* Booking Card */}
                <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
                    <p className="text-sm text-gray-500">
                        Total Flight Price
                    </p>

                    <p className="mt-1 text-3xl font-bold text-gray-900">
                        ${flight.price}
                    </p>

                    <div className="my-5 border-t border-gray-200" />

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Flight
                            </span>
                            <span className="font-medium text-gray-900">
                                {flight.flightNumber}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Route
                            </span>
                            <span className="font-medium text-gray-900">
                                {flight.fromCode} → {flight.toCode}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Class
                            </span>
                            <span className="font-medium text-gray-900">
                                {flight.class}
                            </span>
                        </div>
                    </div>

                    <Link
                        href={`/flights/${flight.id}?booking=true`}
                        className="mt-6 block w-full rounded-xl bg-green-300 px-5 py-3 text-center font-semibold text-gray-900 transition hover:bg-green-400"
                    >
                        Book This Flight
                    </Link>

                    <p className="mt-3 text-center text-xs text-gray-400">
                        Demo practice project — no real booking or payment.
                    </p>
                </aside>
            </div>
        </div>
    </main>
);


}
