
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stays } from "@/data/stayData";
import Navbar from "@/components/layout/Navbar";
import WishlistButton from "@/components/wishlist/WishlistButton";
import BookingModal from "@/components/booking/BookingModal";


interface StayDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function StayDetailsPage({
    params,
}: StayDetailsPageProps) {
    const { id } = await params;

    const stay = stays.find((item) => item.id === Number(id));

    if (!stay) {
        notFound();
    }

    return (
        <>
            <Navbar />
 

            <main className="min-h-screen bg-gray-200">
                
                {/* Header */}
                <section className="mx-auto max-w-7xl px-4 pb-6 pt-20">
                               <p className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
  Demo Practice Project — Design & functionality showcase only. No real data, bookings, payments, or backend processing.
</p>
                    <Link
                        href="/stays"
                        className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
                    >
                        ← Back to Stays
                    </Link>

                    <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-green-300 px-3 py-1 text-xs font-bold text-gray-900">
                                    {stay.tag}
                                </span>

                                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
                                    {stay.category}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                {stay.name}
                            </h1>

                            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                <span>📍 {stay.location}</span>

                                <span className="text-gray-300">•</span>

                                <span className="font-semibold text-gray-900">
                                    ⭐ {stay.rating}
                                </span>

                                <span>({stay.reviews} reviews)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery + Booking */}
                <section className="mx-auto max-w-7xl px-4">
                    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                        {/* Gallery */}
                        <div className="grid h-[500px] grid-cols-2 gap-3 overflow-hidden rounded-3xl">
                            {/* Main Image */}
                            <div className="relative col-span-2 h-[300px] overflow-hidden sm:h-full">
                                <Image
                                    src={stay.gallery[0]}
                                    alt={stay.name}
                                    fill
                                    priority
                                    className="object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Small Images */}
                            <div className="relative hidden overflow-hidden rounded-br-3xl sm:block">
                                <Image
                                    src={stay.gallery[1] || stay.gallery[0]}
                                    alt={`${stay.name} gallery`}
                                    fill
                                    className="object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="relative hidden overflow-hidden rounded-br-3xl sm:block">
                                <Image
                                    src={stay.gallery[2] || stay.gallery[0]}
                                    alt={`${stay.name} gallery`}
                                    fill
                                    className="object-cover transition duration-500 hover:scale-105"
                                />

                                <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white">
                                    View Gallery
                                </div>
                            </div>
                        </div>

                        {/* Booking Card */}
                        <div className="h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Starting from
                                    </p>

                                    <div className="mt-1">
                                        <span className="text-3xl font-bold text-gray-900">
                                            ${stay.price}
                                        </span>

                                        <span className="text-sm text-gray-500">
                                            {" "}
                                            / night
                                        </span>
                                    </div>
                                </div>

                                {/* Wishlist */}
                                <WishlistButton stay={stay} />
                            </div>

                            <div className="my-6 border-t border-gray-100" />

                            {/* Stay Info */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-xl bg-gray-50 p-4">
                                    <p className="text-xs text-gray-500">
                                        Stay Duration
                                    </p>
                                    <p className="mt-1 font-semibold text-gray-900">
                                        {stay.nights}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-gray-50 p-4">
                                    <p className="text-xs text-gray-500">
                                        Dates
                                    </p>
                                    <p className="mt-1 font-semibold text-gray-900">
                                        {stay.dates}
                                    </p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mt-6 space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        ${stay.price} × 2 nights
                                    </span>
                                    <span className="font-medium text-gray-900">
                                        ${stay.price * 2}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                        Service fee0
                                    </span>
                                    <span className="font-medium text-gray-900">
                                        $25
                                    </span>
                                </div>

                                <div className="border-t border-gray-100 pt-3">
                                    <div className="flex justify-between">
                                        <span className="font-semibold text-gray-900">
                                            Total
                                        </span>
                                        <span className="text-xl font-bold text-gray-900">
                                            ${stay.price * 2 + 25}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Book Button */}
                         <BookingModal />

                            <p className="mt-3 text-center text-xs text-gray-400">
                                Demo booking — no real payment or reservation is
                                processed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Details */}
                <section className="mx-auto max-w-7xl px-4 py-12">
                    <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
                        {/* Left Content */}
                        <div>
                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    About this stay
                                </h2>

                                <p className="mt-4 max-w-3xl leading-7 text-gray-600">
                                    {stay.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    What this stay offers
                                </h2>

                                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {stay.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4"
                                        >
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm">
                                                ✓
                                            </span>

                                            <span className="text-sm font-medium text-gray-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stay Information */}
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Stay information
                                </h2>

                                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                                        <p className="text-sm text-gray-500">
                                            Property Type
                                        </p>
                                        <p className="mt-1 font-semibold text-gray-900">
                                            {stay.category}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                                        <p className="text-sm text-gray-500">
                                            Location
                                        </p>
                                        <p className="mt-1 font-semibold text-gray-900">
                                            {stay.location}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                                        <p className="text-sm text-gray-500">
                                            Check-in
                                        </p>
                                        <p className="mt-1 font-semibold text-gray-900">
                                            {stay.dates.split(" - ")[0]}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                                        <p className="text-sm text-gray-500">
                                            Check-out
                                        </p>
                                        <p className="mt-1 font-semibold text-gray-900">
                                            {stay.dates.split(" - ")[1]}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    Where you'll stay
                                </h2>

                                <div className="mt-5 flex min-h-48 items-center justify-center rounded-2xl bg-gray-200">
                                    <div className="text-center">
                                        <p className="text-3xl">📍</p>
                                        <p className="mt-2 font-semibold text-gray-800">
                                            {stay.location}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Map preview for demo project
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Summary */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-6">
                                <p className="text-sm text-gray-500">
                                    Guest rating
                                </p>

                                <div className="mt-2 flex items-center gap-3">
                                    <span className="rounded-lg bg-green-300 px-3 py-2 text-lg font-bold text-gray-900">
                                        {stay.rating}
                                    </span>

                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Excellent
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {stay.reviews} reviews
                                        </p>
                                    </div>
                                </div>

                                <div className="my-5 border-t border-gray-100" />

                                <p className="text-sm font-semibold text-gray-900">
                                    Quick details
                                </p>

                                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                                    <li>✓ {stay.category}</li>
                                    <li>✓ {stay.nights}</li>
                                    <li>✓ {stay.features.length} amenities</li>
                                    <li>✓ {stay.tag}</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>
        </>
    );
}

