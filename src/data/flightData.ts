export interface FlightDataObj {
  id: number;
  airline: string;
  flightNumber: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: number;
  rating: number;
  baggage: string;
  class: string;
  logo: string;
  description: string;
  amenities: string[];
}

export const flights: FlightDataObj[] = [
  {
    id: 1,
    airline: "Emirates",
    flightNumber: "EK527",
    from: "Hyderabad",
    fromCode: "HYD",
    to: "Dubai",
    toCode: "DXB",
    departure: "10:00 PM",
    arrival: "12:30 AM",
    duration: "4h 00m",
    stops: "Non-stop",
    price: 320,
    rating: 4.8,
    baggage: "30kg Baggage",
    class: "Economy",
    logo: "/images/flights/emirates.png",
    description: "Enjoy award-winning in-flight entertainment, multi-course meals, and world-class service on your direct flight to Dubai.",
    amenities: ["In-flight Wi-Fi", "In-seat Power", "Gourmet Meals", "Live TV", "Extra Legroom"]
  },
  {
    id: 2,
    airline: "Air India",
    flightNumber: "AI127",
    from: "Delhi",
    fromCode: "DEL",
    to: "London",
    toCode: "LHR",
    departure: "02:15 AM",
    arrival: "07:30 AM",
    duration: "9h 45m",
    stops: "Non-stop",
    price: 650,
    rating: 4.3,
    baggage: "2 x 23kg Baggage",
    class: "Economy",
    logo: "/images/flights/airindia.jpg",
    description: "Direct long-haul connection from Delhi to London Heathrow onboard the Boeing 787 Dreamliner.",
    amenities: ["Complimentary Drinks", "Hot Meals", "USB Outlets", "Blanket & Pillow"]
  },
  {
    id: 3,
    airline: "Qatar Airways",
    flightNumber: "QR571",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Doha",
    toCode: "DOH",
    departure: "04:10 AM",
    arrival: "05:40 AM",
    duration: "3h 00m",
    stops: "Non-stop",
    price: 380,
    rating: 4.9,
    baggage: "35kg Baggage",
    class: "Business Class",
    logo: "/images/flights/qatar.png",
    description: "Experience premium hospitality and spacious lie-flat luxury on one of the world's best rated airlines.",
    amenities: ["Lie-flat Seats", "Lounge Access", "Oryx One Entertainment", "À la Carte Dining", "Priority Boarding"]
  },
  {
    id: 4,
    airline: "Singapore Airlines",
    flightNumber: "SQ423",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Singapore",
    toCode: "SIN",
    departure: "11:45 PM",
    arrival: "07:40 AM",
    duration: "5h 25m",
    stops: "Non-stop",
    price: 410,
    rating: 4.9,
    baggage: "25kg Baggage",
    class: "Economy",
    logo: "/images/flights/singapore.png",
    description: "Fly seamlessly to Changi Airport with top-tier cabin comfort and legendary Asian hospitality.",
    amenities: ["In-flight Wi-Fi", "KrisWorld Entertainment", "Complimentary Snacks", "USB Ports"]
  },
  {
    id: 5,
    airline: "IndiGo",
    flightNumber: "6E63",
    from: "Bengaluru",
    fromCode: "BLR",
    to: "Bangkok",
    toCode: "BKK",
    departure: "09:30 PM",
    arrival: "02:45 AM",
    duration: "3h 45m",
    stops: "Non-stop",
    price: 210,
    rating: 4.2,
    baggage: "20kg Baggage",
    class: "Economy",
    logo: "/images/flights/indigo.png",
    description: "Affordable and reliable direct flight service connecting South India directly to Thailand.",
    amenities: ["Pre-booked Meals", "Standard Seat Selection", "On-time Service"]
  },
  {
    id: 6,
    airline: "Etihad Airways",
    flightNumber: "EY205",
    from: "Ahmedabad",
    fromCode: "AMD",
    to: "Abu Dhabi",
    toCode: "AUH",
    departure: "05:20 PM",
    arrival: "07:10 PM",
    duration: "3h 20m",
    stops: "Non-stop",
    price: 290,
    rating: 4.6,
    baggage: "30kg Baggage",
    class: "Economy",
    logo: "/images/flights/etihad.png",
    description: "Relaxed non-stop journey to Abu Dhabi with personalized entertainment and ergonomic seating.",
    amenities: ["E-BOX On Demand", "Power Outlets", "Kid-Friendly Meals", "Free Beverage Service"]
  },
  {
    id: 7,
    airline: "Lufthansa",
    flightNumber: "LH755",
    from: "Bengaluru",
    fromCode: "BLR",
    to: "Frankfurt",
    toCode: "FRA",
    departure: "03:30 AM",
    arrival: "09:30 AM",
    duration: "8h 30m",
    stops: "Non-stop",
    price: 720,
    rating: 4.5,
    baggage: "23kg Baggage",
    class: "Premium Economy",
    logo: "/images/flights/lufthansa.png",
    description: "Premium overnight flight to Germany with extra room, upgraded meals, and seamless European connections.",
    amenities: ["Wider Seats", "Noise-Canceling Headphones", "Welcome Drinks", "In-flight Portal"]
  },
  {
    id: 8,
    airline: "British Airways",
    flightNumber: "BA276",
    from: "Hyderabad",
    fromCode: "HYD",
    to: "London",
    toCode: "LHR",
    departure: "07:00 AM",
    arrival: "01:15 PM",
    duration: "10h 45m",
    stops: "Non-stop",
    price: 680,
    rating: 4.4,
    baggage: "23kg Baggage",
    class: "Economy",
    logo: "/images/flights/british.png",
    description: "Morning departure from Hyderabad landing in London Heathrow right in time for early afternoon check-ins.",
    amenities: ["High-speed Wi-Fi", "HD Touchscreens", "Full Bar Service", "Adjustable Headrests"]
  },
  {
    id: 9,
    airline: "Turkish Airlines",
    flightNumber: "TK717",
    from: "Delhi",
    fromCode: "DEL",
    to: "Istanbul",
    toCode: "IST",
    departure: "06:15 AM",
    arrival: "10:40 AM",
    duration: "6h 55m",
    stops: "Non-stop",
    price: 510,
    rating: 4.7,
    baggage: "30kg Baggage",
    class: "Economy",
    logo: "/images/flights/turkish.png",
    description: "Fly directly to the hub of Europe & Asia with famous Turkish culinary options on board.",
    amenities: ["Flying Chef Meals", "Amenity Kit", "Live TV", "In-seat USB"]
  },
  {
    id: 10,
    airline: "Vistara",
    flightNumber: "UK821",
    from: "Chennai",
    fromCode: "MAA",
    to: "Malé",
    toCode: "MLE",
    departure: "11:10 AM",
    arrival: "01:00 PM",
    duration: "2h 20m",
    stops: "Non-stop",
    price: 240,
    rating: 4.6,
    baggage: "20kg Baggage",
    class: "Economy",
    logo: "/images/flights/vistara.jpg",
    description: "Quick tropical getaway flight connecting Chennai straight to the sun-soaked island capital of the Maldives.",
    amenities: ["Vistara World Streaming", "Gourmet Hot Meals", "Mood Lighting", "Extra Legroom Options"]
  }
];