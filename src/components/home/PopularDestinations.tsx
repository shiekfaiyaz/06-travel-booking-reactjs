
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
    {
        name: 'Hyderabad',
        image: '/images/hyderabad.jpg',
        className: 'md:col-span-2 md:row-span-2',
    },
    {
        name: 'New Delhi',
        image: '/images/newdelhi.jpg',
        className: 'md:col-span-1',
    },
    {
        name: 'Goa',
        image: '/images/goa.jpg',
        className: 'md:col-span-1',
    },
    {
        name: 'Mumbai',
        image: '/images/mumbai.jpg',
        className: 'md:col-span-1',
    },
    {
        name: 'Bangalore',
        image: '/images/bangalore.jpg',
        className: 'md:col-span-1',
    },
];

export default function Destinations() {
    return (
        <section id='destinations' className="mx-auto max-w-7xl px-4 py-16">

            {/* Section Title */}
            <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-300">
                    Explore Places
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Popular <span className="text-green-300">Destinations</span>
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-gray-600">
                    Explore beautiful destinations and find the perfect stay
                    for your next journey.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[550px]">

                {destinations.map((destination) => (
                    <Link
                        key={destination.name}
                        href="/stays"
                        className={`group relative min-h-[250px] overflow-hidden rounded-3xl ${destination.className}`}
                    >
                        {/* Image */}
                        <Image
                            src={destination.image}
                            fill
                            alt={`${destination.name} destination`}
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        {/* Title */}
                        <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white transition group-hover:text-green-300">
                            {destination.name}
                        </h3>
                    </Link>
                ))}

            </div>
        </section>
    );
}

