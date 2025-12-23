import { FaWhatsapp, FaCalendarCheck, FaAngleDown } from "react-icons/fa";
import heroBg from "../assets/hero-vito.webp";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-16 sm:py-0"
      data-aos="fade-up"
    >
      {/* Responsive lazy-loaded background image */}
      <img
        src={heroBg}
        alt="Mercedes Vito Transfer"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-[center_40%] sm:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-xl px-6">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-300 mb-3">
          İzmir & Ege Bölgesi
        </p>

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          Premium VIP Transfer <br /> Havalimanı Transfer
        </h1>

        <p className="text-gray-300 mb-8 text-sm sm:text-base">
          Mercedes Vito ile konforlu, güvenilir ve lüks transfer hizmeti. İzmir
          Havalimanı, Alaçatı, Çeşme ve Ege’nin dört bir yanına profesyonel VIP
          ulaşım deneyimini bizimle yaşayın.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/905528194276"
            className="bg-white text-black px-5 py-3 rounded-lg flex items-center gap-2 text-sm
                       transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <FaWhatsapp /> WhatsApp ile İletişim
          </a>

          <a
            href="#rezervasyon"
            className="border border-white px-5 py-3 rounded-lg flex items-center gap-2 text-sm
                       transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <FaCalendarCheck /> Rezervasyon Yap
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce z-10">
        <FaAngleDown />
      </div>
    </section>
  );
}
