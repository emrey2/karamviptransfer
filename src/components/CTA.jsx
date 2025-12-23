import { FaWhatsapp } from "react-icons/fa";

export default function CTAMessage() {
  return (
    <section
      className="py-20 sm:py-24 text-center bg-[#1b1c1f] px-4 sm:px-6"
      data-aos="fade-up"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-[#fff6e0] mb-5 sm:mb-6">
        Konforlu Yolculuğunuz Bir Mesaj Uzağınızda
      </h2>

      <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
        Bebek koltuğu, karşılama tabelası veya özel talepleriniz mi var? Mesaj
        atın, her şeyi sizin için eksiksiz şekilde ayarlayalım.
      </p>

      <a
        href="https://wa.me/905528194276"
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg text-sm
                   transition-transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-md"
      >
        <FaWhatsapp /> Hemen WhatsApp’tan Yazın
      </a>
    </section>
  );
}
