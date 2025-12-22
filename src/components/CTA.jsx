import { FaWhatsapp } from "react-icons/fa";

export default function CTAMessage() {
  return (
    <section className="py-16 text-center bg-[#1b1c1f]" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-[#fff6e0] mb-4">
        Konforlu Yolculuğunuz Bir Mesaj Uzağınızda
      </h2>

      <p className="text-gray-400 mb-6">
        Bebek koltuğu, karşılama tabelası veya özel talepleriniz mi var? Mesaj
        atın, her şeyi ayarlayalım.
      </p>

      <a
        href="https://wa.me/905528194276"
        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg text-sm
                    transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-out"
      >
        <FaWhatsapp /> Hemen WhatsApp’tan Yazın
      </a>
    </section>
  );
}
