import { FaWhatsapp, FaCalendarCheck, FaAngleDown } from "react-icons/fa";
import heroBg from "../assets/hero-vito.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroBg})` }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-xl px-6">
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-3">
          İzmir & Ege Bölgesi
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Premium VIP Transfer <br /> Havalimanı Transfer
        </h1>

        <p className="text-gray-300 mb-8">
          Mercedes Vito ile konforlu, güvenilir ve lüks transfer hizmeti.
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce">
        <FaAngleDown />
      </div>
    </section>
  );
}
