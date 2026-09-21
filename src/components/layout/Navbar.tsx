'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";
import WishlistPanel from "@/components/wishlist/WishlistPanel";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [showWishlist, setShowWishlist] = useState(false);

  const wishlist = useWishlistStore((state) => state.wishlist);

  const links = [
    { id: 1, name: 'Home', path: '#home', image: '/svgs/home.svg' },
    { id: 2, name: 'Stays', path: '#stays', image: '/svgs/bed.svg' },
    { id: 3, name: 'Hotels', path: '#hotels', image: '/svgs/hotel.svg' },
    {
      id: 4,
      name: 'Flights/Packages',
      path: '#flights',
      image: '/svgs/flight.svg',
    },
    {
      id: 5,
      name: 'Destinations',
      path: '#destinations',
      image: '/svgs/location.svg',
    },
    {
      id: 6,
      name: 'Booking Info',
      path: '#info',
      image: '/svgs/info.svg',
    },
  ];

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-white"
          >
            <span className='text-2xl text-green-300 font-bold'>Travel</span>Logo
          </Link>

          {/* ================= DESKTOP LINKS ================= */}
          <div className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="group flex flex-col items-center gap-2  text-sm font-medium text-white transition hover:text-gray-300"
              >
                <Image
                  src={link.image}
                  alt=""
                  width={25}
                  height={25}
                  className="h-[25px] w-[25px]"
                />

                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* ================= DESKTOP LOGIN ================= */}
         
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowWishlist(!showWishlist)}
              className="relative flex items-center justify-center text-white"
            >
              <Heart size={22} />

              {wishlist.length > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-300 text-xs font-bold text-gray-900">
                  {wishlist.length}
                </span>
              )}
            </button>

            {showWishlist && <WishlistPanel />}
          </div>
         


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={toggleMenu}
            type="button"
            className="rounded-md p-2 text-white lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              /* X Icon */
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
          }`}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 z-[60] flex h-screen w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between border-b px-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold text-black"
          >
            TravelLogo
          </Link>

          <button
            onClick={closeMenu}
            type="button"
            className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              onClick={closeMenu}
              className="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-700 transition hover:bg-gray-100 hover:text-black"
            >
              <Image
                src={link.image}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />

              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Login */}
        <div className="border-t p-5">
          <button
            type="button"
            className="w-full rounded-full bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Login
          </button>
          <button
            type="button"
            className="relative flex items-center justify-center"
          >
            <Heart size={22} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-300 text-xs font-bold text-gray-900">
              0
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

