
import Image from 'next/image'

export default function Banner() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">

            {/* Section Heading */}
            <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-300">
                    Special Offer
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Travel More, <span className="text-green-300">Save More</span>
                </h2>
            </div>

            {/* Banner */}
            <div className="group grid overflow-hidden rounded-3xl border border-green-300/30 bg-gray-950 shadow-xl md:grid-cols-2">

                {/* Image */}
                <div className="relative min-h-[280px] overflow-hidden md:min-h-[360px]">
                    <Image
                        src="/images/banner1.png"
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        alt="Special travel offer"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-12">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-300">
                        Limited Time Offer
                    </p>

                    <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                        Best Discount
                        <span className="block text-green-300">
                            Offers
                        </span>
                    </h3>

                    <p className="mt-4 max-w-md leading-relaxed text-gray-300">
                        Discover amazing stays and exciting destinations with
                        exclusive offers made for your next journey.
                    </p>

                    {/* Button */}
                    <button
                        className="mt-7 w-fit rounded-full border border-green-300 bg-green-300 px-6 py-3
                        font-semibold text-gray-950 transition-all duration-300
                        hover:bg-transparent hover:text-green-300
                        hover:shadow-[0_0_20px_rgba(134,239,172,0.25)]"
                    >
                        View Offer
                    </button>

                </div>
            </div>

        </section>
    );
}

