
import {
    BadgeCheck,
    ShieldCheck,
    Headphones,
    MapPinned,
} from "lucide-react";

const features = [
    {
        icon: BadgeCheck,
        title: "Best Price Guarantee",
        description:
            "Find great stays and trips at competitive prices for your journey.",
    },
    {
        icon: MapPinned,
        title: "Wide Range of Choices",
        description:
            "Explore hotels, stays, destinations, and flight trips in one place.",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Easy Booking",
        description:
            "Enjoy a simple and secure booking experience from start to finish.",
    },
    {
        icon: Headphones,
        title: "24/7 Travel Support",
        description:
            "Get helpful support whenever you need assistance during your trip.",
    },
];

export default function WhyTrustUs() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">

            {/* Section Title */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-300">
                    Travel With Confidence
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Why Travellers{" "}
                    <span className="text-green-300">Trust Us</span>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                    Everything you need for a simple, comfortable and enjoyable
                    travel experience.
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-300 transition duration-300 group-hover:bg-green-300 group-hover:text-gray-900">
                                <Icon size={28} strokeWidth={1.8} />
                            </div>

                            {/* Title */}
                            <h3 className="mt-5 text-lg font-bold text-gray-900">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

