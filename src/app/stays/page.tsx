
import StaySearch from "@/components/stays/StaySearch";
import StayFilters from "@/components/stays/StayFilters";
import StayList from "@/components/stays/StayList";

export default function StaysPage() {
    return (
        <main>
<p className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
  Demo Practice Project — Design & functionality showcase only. No real data, bookings, payments, or backend processing.
</p>

            {/* Search + Filter */}
            <div className="mx-auto flex max-w-[70%] items-end  px-1 py-6">
                {/* Left Filter */}
                <div className="shrink-0">
                    <StayFilters />
                </div>

                {/* Center Search */}
                <div className="flex flex-1 justify-center">
                    <StaySearch />
                </div>
            </div>

            {/* Stay Cards */}
            <div className="mx-auto w-[80%] pb-10">
                <StayList />
            </div>
        </main>
    );
}

