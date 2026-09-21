
const reviews = [
    {
        name: "Alex Morgan",
        role: "Travel Enthusiast",
        rating: 5,
        feedback:
            "The booking experience feels simple and smooth. I really liked how easy it was to explore different stays and destinations.",
        size: "md:col-span-2",
    },
    {
        name: "Sophia Williams",
        role: "Frequent Traveller",
        rating: 5,
        feedback:
            "Clean design, beautiful destination cards and a very easy-to-use interface.",
        size: "md:col-span-1",
    },
    {
        name: "Daniel Smith",
        role: "Business Traveller",
        rating: 4,
        feedback:
            "The layout is clean and the information is easy to find. The overall experience feels modern.",
        size: "md:col-span-1",
    },
    {
        name: "Emma Johnson",
        role: "Holiday Traveller",
        rating: 5,
        feedback:
            "I enjoyed browsing the stays and travel destinations. Everything feels organized without making the page complicated.",
        size: "md:col-span-2",
    },
    {
        name: "Michael Brown",
        role: "Adventure Traveller",
        rating: 5,
        feedback:
            "A beautiful travel platform concept with a simple booking flow and attractive visuals.",
        size: "md:col-span-1",
    },
    {
        name: "Olivia Davis",
        role: "Travel Blogger",
        rating: 4,
        feedback:
            "The interface is easy to understand and the destination sections make exploring new places enjoyable.",
        size: "md:col-span-1",
    },
];

export default function Reviews() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">

            {/* Section Title */}
            <div className="mb-10 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-300">
                    Traveller Feedback
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    What Travellers{" "}
                    <span className="text-green-300">Say</span>
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                    Demo reviews created for this practice project and portfolio
                    showcase.
                </p>

                {/* Demo Notice */}
                <p className="mx-auto mt-3 max-w-xl rounded-full bg-green-50 px-4 py-2 text-xs font-medium text-gray-600">
                    Demo content — these are not real client or customer reviews.
                </p>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:items-start">

                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className={`${review.size} rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg`}
                    >
                        {/* Profile */}
                        <div className="flex items-center gap-4">

                            {/* Profile Placeholder */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-gray-900">
                                {review.name.charAt(0)}
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900">
                                    {review.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {review.role}
                                </p>
                            </div>
                        </div>

                        {/* Stars */}
                        <div className="mt-5 flex gap-1 text-lg text-green-300">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index}>
                                    {index < review.rating ? "★" : "☆"}
                                </span>
                            ))}
                        </div>

                        {/* Feedback */}
                        <p className="mt-4 text-sm leading-7 text-gray-600">
                            "{review.feedback}"
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}

