"use client";

import Image from "next/image";
import Link from "next/link";
import { FlightDataObj } from "@/data/flightData";

interface FlightCardProps {
flight: FlightDataObj;
}

export default function FlightCard({ flight }: FlightCardProps) {
return ( <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
{/* Top */} <div className="mb-5 flex items-center justify-between"> <div className="flex items-center gap-3"> <div className="relative h-10 w-10"> <Image
                         src={flight.logo}
                         alt={flight.airline}
                         fill
                         className="object-contain"
                     /> </div>


                <div>
                    <h3 className="font-semibold text-gray-900">
                        {flight.airline}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {flight.flightNumber}
                    </p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-xl font-bold text-gray-900">
                    ${flight.price}
                </p>
                <p className="text-xs text-gray-500">
                    {flight.class}
                </p>
            </div>
        </div>

        {/* Route */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div>
                <p className="text-2xl font-bold text-gray-900">
                    {flight.fromCode}
                </p>
                <p className="text-sm text-gray-500">
                    {flight.from}
                </p>
                <p className="mt-2 font-semibold text-gray-900">
                    {flight.departure}
                </p>
            </div>

            <div className="text-center">
                <p className="text-xs text-gray-500">
                    {flight.duration}
                </p>
                <div className="my-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gray-400" />
                    <div className="h-px w-20 bg-gray-300" />
                    <span className="h-2 w-2 rounded-full bg-gray-400" />
                </div>
                <p className="text-xs text-gray-500">
                    {flight.stops}
                </p>
            </div>

            <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                    {flight.toCode}
                </p>
                <p className="text-sm text-gray-500">
                    {flight.to}
                </p>
                <p className="mt-2 font-semibold text-gray-900">
                    {flight.arrival}
                </p>
            </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-500">
                {flight.baggage}
            </p>

            <Link
                href={`/flight/${flight.id}`}
                className="rounded-xl bg-green-300 px-5 py-2.5 font-semibold text-gray-900 transition hover:bg-green-400"
            >
                View Flight
            </Link>
        </div>
    </div>
);


}
