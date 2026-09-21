import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Banner from '@/components/home/OfferBanner';
import Destinations from '@/components/home/PopularDestinations';
import HotelSection from '@/components/home/HotelSection';
import StaySection from '@/components/home/StaySection';
import FlightSection from '@/components/home/FlightPackages';
import WhyTrustUs from '@/components/home/Feature';
import Reviews from '@/components/home/Reviews';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Banner/>
        <Destinations/>
        <HotelSection/>
        <StaySection />
        <FlightSection />
        <WhyTrustUs />
       <Reviews/>
       <Footer/>
       

      </main>
    </>
  );
}