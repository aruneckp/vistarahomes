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
import WhatsAppButton from "./components/WhatsAppButton";
import StickyMobileBar from "./components/StickyMobileBar";

export default function App() {
  return (
    <>
      <Navbar />
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
      <WhatsAppButton />
      <StickyMobileBar />
    </>
  );
}
