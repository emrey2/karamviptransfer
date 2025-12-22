import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LuxuryExperience from "./components/LuxuryExperience";
import ServiceAreas from "./components/ServiceAreas";
import CTAMessage from "./components/CTA";
import WhyChooseUs from "./components/WhyChooseUs";
import Reservation from "./components/ReservationForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // smooth animation duration
      easing: "ease-in-out", // natural feel
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="font-inter bg-[#111214] text-white">
      <Header />
      <Hero />
      <HowItWorks />
      <LuxuryExperience />
      <ServiceAreas />
      <CTAMessage />
      <WhyChooseUs />
      <Reservation />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
