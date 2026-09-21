
import Link from "next/link";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Hotels", href: "/hotels" },
    { name: "Stays", href: "/stays" },
];

const travelLinks = [
    { name: "Flights", href: "/flights" },
    { name: "Trips", href: "/flights" },
    { name: "My Trips", href: "/trips" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-14">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight"
                        >
                            Travel<span className="text-green-300">ly</span>
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
                            Discover beautiful destinations, comfortable stays,
                            exciting trips and memorable travel experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-green-300">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 transition hover:text-green-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Travel */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-green-300">
                            Travel
                        </h3>

                        <ul className="mt-5 space-y-3">
                            {travelLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 transition hover:text-green-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:text-left">

                    <p className="text-sm text-gray-500">
                        © 2026 Travelly. All rights reserved.
                    </p>

                    <p className="text-xs text-gray-600">
                        Demo practice project — portfolio showcase
                    </p>

                </div>
            </div>

        </footer>
    );
}

