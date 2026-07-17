import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Policies from "./components/Policies";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import StickyMobileBar from "./components/StickyMobileBar";

export default function App() {
  const [announcementOpen, setAnnouncementOpen] = useState(true);

  return (
    <>
      {announcementOpen && <AnnouncementBar onClose={() => setAnnouncementOpen(false)} />}
      <Navbar withBanner={announcementOpen} />
      <main>
        <Hero />
        <Welcome />
        <Rooms />
        <Gallery />
        <Testimonials />
        <Location />
        <Policies />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
      <ChatWidget />
      <StickyMobileBar />
    </>
  );
}
