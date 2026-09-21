'use client';

import FlightSearch from "@/components/flights/FlightSearch";
import FlightFilters from "@/components/flights/FlightFilters";
import FlightCard from "@/components/flights/FlightCard";
import { flights } from "@/data/flightData";

export default function FlightsPage() {
return ( 


<main className="min-h-screen bg-gray-50">
               <p className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
  Demo Practice Project — Design & functionality showcase only. No real data, bookings, payments, or backend processing.
</p>
{/* Search */} <div className="mx-auto max-w-7xl px-4 pt-8"> <FlightSearch /> </div>


        {/* Filters + Results */}
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-6">
            <div className="shrink-0">
                <FlightFilters />
            </div>

            <div className="flex-1">
                <p className="text-sm text-gray-500">
                    {flights.length} flights available
                </p>
            </div>
        </div>

        {/* Flight Cards */}
        <div className="mx-auto w-[80%] space-y-4 pb-12">
            {flights.map((flight) => (
                <FlightCard
                    key={flight.id}
                    flight={flight}
                />
            ))}
        </div>
    </main>
);


}
