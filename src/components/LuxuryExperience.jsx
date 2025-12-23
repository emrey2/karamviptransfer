import { useEffect, useRef, useState } from "react";
import {
  FaExpandArrowsAlt,
  FaChair,
  FaThermometerHalf,
  FaChargingStation,
  FaWifi,
  FaBabyCarriage,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import car from "../assets/car.webp";
import i1 from "../assets/interior-1.webp";
import i2 from "../assets/interior-2.webp";
import i3 from "../assets/interior-3.webp";

export default function LuxuryExperience() {
  const images = [car, i1, i2, i3];
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCurrent((p) => (p + 1) % images.length),
      4000
    );
    return () => clearInterval(intervalRef.current);
  }, []);

  const features = [
    [FaExpandArrowsAlt, "Ferah Alan", "Geniş bacak mesafesi"],
    [FaChair, "Premium Koltuklar", "Ergonomik deri koltuklar"],
    [FaThermometerHalf, "Kişisel Klima", "Çift bölgeli klima"],
    [FaChargingStation, "Şarj İmkanı", "USB şarj noktaları"],
    [FaWifi, "Ücretsiz WiFi", "Kesintisiz internet"],
    [FaBabyCarriage, "Aile Dostu", "Bebek koltuğu uyumlu"],
  ];

  return (
    <section
      className="bg-[#1b1c1f] py-16 sm:py-20 px-4 sm:px-0 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-4 sm:mb-6">
        Lüks Yolculuk Deneyimi
      </h2>

      <div className="relative max-w-5xl mx-auto h-[220px] sm:h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-10 sm:mb-12">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            loading="lazy"
            alt={`carousel-${i}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={() =>
            setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full
                     transition-all duration-500 ease-in-out hover:scale-110 z-10"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => setCurrent((p) => (p + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full
                     transition-all duration-500 ease-in-out hover:scale-110 z-10"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-4 left-4 bg-black/60 px-6 py-3 rounded-lg flex gap-6 sm:gap-8 text-sm z-10">
          <div>
            <strong>8</strong>
            <span className="block text-gray-300">Yolcu</span>
          </div>
          <div>
            <strong>6</strong>
            <span className="block text-gray-300">Valiz</span>
          </div>
          <div>
            <strong>1.90m</strong>
            <span className="block text-gray-300">Tavan</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {features.map(([Icon, title, desc]) => (
          <div
            key={title}
            className="bg-[#131417] border border-[#2c2d2f] p-6 rounded-lg
                       transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            <Icon className="text-2xl mb-4 mx-auto text-[#fff6e0]" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
