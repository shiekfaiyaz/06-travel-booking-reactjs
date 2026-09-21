

export interface StayDataObj {
    id: number;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    category: string;
    tag: string;
    nights: string;
    dates: string;
    price: number;
    description: string;
    image: string;
    gallery: string[];
    features: string[];
}

export const stays: StayDataObj[] = [
  {
    id: 1,
    name: "Luxury Beach Villa",
    location: "Goa, India",
    rating: 4.8,
    reviews: "1.2K+",
    category: "Villa",
    tag: "20% OFF",
    nights: "2 Nights",
    dates: "12 - 14 Oct",
    price: 180,
    description: "A private beachfront retreat offering direct sand access, an infinity pool, and open-air lounge spaces designed for ultimate relaxation.",
    image: "/images/stays/stay1.jpg",
    gallery: ["/images/stays/stay1.jpg", "/images/stays/stay1-2.jpg", "/images/stays/stay1-3.jpg"],
    features: ["Free Wi-Fi", "Private Pool", "Beachfront", "Air Conditioning", "Breakfast Included"]
  },
  {
    id: 2,
    name: "Mountain Alpine Resort",
    location: "Manali, India",
    rating: 4.9,
    reviews: "850+",
    category: "Resort",
    tag: "POPULAR",
    nights: "3 Nights",
    dates: "18 - 21 Oct",
    price: 240,
    description: "Nestled amidst snow-capped peaks, this cozy wooden resort offers panoramic valley views, private fireplaces, and authentic Himalayan hospitality.",
    image: "/images/stays/stay2.jpg",
    gallery: ["/images/stays/stay2.jpg", "/images/stays/stay2-2.jpg", "/images/stays/stay2-3.jpg"],
    features: ["Free Wi-Fi", "Mountain View", "Fireplace", "Heated Pool", "Spa & Wellness"]
  },
  {
    id: 3,
    name: "Heritage Palace Hotel",
    location: "Udaipur, India",
    rating: 4.7,
    reviews: "2.1K+",
    category: "Hotel",
    tag: "BESTSELLER",
    nights: "2 Nights",
    dates: "22 - 24 Oct",
    price: 310,
    description: "Experience royal living in a restored 18th-century lakeside palace with grand courtyards, traditional architecture, and fine dining.",
    image: "/images/stays/stay3.jpg",
    gallery: ["/images/stays/stay3.jpg", "/images/stays/stay3-2.jpg", "/images/stays/stay3-3.jpg"],
    features: ["Free Wi-Fi", "Lake View", "Valet Parking", "Rooftop Dining", "Cultural Shows"]
  },
  {
    id: 4,
    name: "Eco Treehouse Loft",
    location: "Wayanad, India",
    rating: 4.6,
    reviews: "420+",
    category: "Treehouse",
    tag: "ECO FRIENDLY",
    nights: "1 Night",
    dates: "25 - 26 Oct",
    price: 120,
    description: "Surrounded by dense rainforest canopy, this sustainable luxury treehouse provides an immersive nature experience with modern comforts.",
    image: "/images/stays/stay4.jpg",
    gallery: ["/images/stays/stay4.jpg", "/images/stays/stay4-2.jpg", "/images/stays/stay4-3.jpg"],
    features: ["Free Wi-Fi", "Jungle View", "Nature Trails", "Organic Meals", "Balcony"]
  },
  {
    id: 5,
    name: "Cliffside Sunset Suites",
    location: "Santorini, Greece",
    rating: 4.9,
    reviews: "3.4K+",
    category: "Suites",
    tag: "FEATURED",
    nights: "3 Nights",
    dates: "02 - 05 Nov",
    price: 450,
    description: "Iconic whitewashed suite carved into Aegean cliffs, featuring a private plunge pool and uninterrupted views of famous Caldera sunsets.",
    image: "/images/stays/stay5.jpg",
    gallery: ["/images/stays/stay5.jpg", "/images/stays/stay5-2.jpg", "/images/stays/stay5-3.jpg"],
    features: ["Free Wi-Fi", "Sea View", "Private Hot Tub", "Room Service", "Airport Shuttle"]
  },
  {
    id: 6,
    name: "Overwater Coral Bungalow",
    location: "Maldives",
    rating: 5.0,
    reviews: "1.8K+",
    category: "Bungalow",
    tag: "LUXURY",
    nights: "4 Nights",
    dates: "10 - 14 Nov",
    price: 680,
    description: "Stilts over crystal turquoise lagoon with glass floor viewing panels, direct ocean stairs, and dedicated personal butler service.",
    image: "/images/stays/stay6.jpg",
    gallery: ["/images/stays/stay6.jpg", "/images/stays/stay6-2.jpg", "/images/stays/stay6-3.jpg"],
    features: ["Free Wi-Fi", "Overwater Deck", "Snorkeling Gear", "Butler Service", "All-Inclusive"]
  },
  {
    id: 7,
    name: "Urban Skyline Penthouse",
    location: "Dubai, UAE",
    rating: 4.8,
    reviews: "950+",
    category: "Apartment",
    tag: "15% OFF",
    nights: "2 Nights",
    dates: "15 - 17 Nov",
    price: 290,
    description: "Ultra-modern glass penthouse high above the city center, featuring minimalist decor, floor-to-ceiling windows, and access to a rooftop pool.",
    image: "/images/stays/stay7.jpg",
    gallery: ["/images/stays/stay7.jpg", "/images/stays/stay7-2.jpg", "/images/stays/stay7-3.jpg"],
    features: ["Free Wi-Fi", "Skyline View", "Gym & Sauna", "Infinity Pool", "24/7 Security"]
  },
  {
    id: 8,
    name: "Cozy Pines Log Cabin",
    location: "Shimla, India",
    rating: 4.5,
    reviews: "610+",
    category: "Cabin",
    tag: "Cozy Choice",
    nights: "2 Nights",
    dates: "20 - 22 Nov",
    price: 110,
    description: "Rustic cedar cabin hidden within pine forests, equipped with a stone fireplace, outdoor firepit, and cozy wooden interiors.",
    image: "/images/stays/stay8.jpg",
    gallery: ["/images/stays/stay8.jpg", "/images/stays/stay8-2.jpg", "/images/stays/stay8-3.jpg"],
    features: ["Free Wi-Fi", "Pet Friendly", "Fire Pit", "Kitchenette", "Free Parking"]
  },
  {
    id: 9,
    name: "Desert Oasis Glamping Camp",
    location: "Jaisalmer, India",
    rating: 4.7,
    reviews: "1.1K+",
    category: "Glamping",
    tag: "TOP RATED",
    nights: "1 Night",
    dates: "27 - 28 Nov",
    price: 150,
    description: "Luxury Swiss canvas tents under starry desert skies, complete with plush bedding, folk music performances, and dune safari tours.",
    image: "/images/stays/stay9.jpg",
    gallery: ["/images/stays/stay9.jpg", "/images/stays/stay9-2.jpg", "/images/stays/stay9-3.jpg"],
    features: ["Desert Safari", "Folk Dance Show", "Traditional Dinner", "Attached Bathroom", "Campfire"]
  },
  {
    id: 10,
    name: "Tea Garden Estate Cottage",
    location: "Munnar, India",
    rating: 4.8,
    reviews: "780+",
    category: "Cottage",
    tag: "NEW",
    nights: "2 Nights",
    dates: "01 - 03 Dec",
    price: 165,
    description: "Colonial-style cottage sitting in the center of rolling emerald tea plantations, perfect for misty morning walks and serene retreats.",
    image: "/images/stays/stay10.jpg",
    gallery: ["/images/stays/stay10.jpg", "/images/stays/stay10-2.jpg", "/images/stays/stay10-3.jpg"],
    features: ["Free Wi-Fi", "Garden View", "Tea Tasting Tour", "Hot Water", "Home-cooked Meals"]
  }
];
