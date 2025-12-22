import {
  FaCouch,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaClock,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    [FaCouch, "Premium Konfor", "Lüks araçlarla üst düzey seyahat konforu."],
    [
      FaShieldAlt,
      "Profesyonel Şoför",
      "Deneyimli ve lisanslı şoförlerimizle güvenli yolculuk.",
    ],
    [
      FaFileInvoiceDollar,
      "Sabit Fiyat",
      "Sürpriz ek ücret yok, şeffaf fiyat garantisi.",
    ],
    [FaClock, "7/24 Hizmet", "Gün boyu her an yanınızdayız."],
  ];

  return (
    <section className="py-20 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-10">
        Neden Bizi Tercih Etmelisiniz?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {items.map(([Icon, title, desc], i) => (
          <div
            key={title}
            className="bg-[#1c1d21] border border-[#2b2c2e] p-6 rounded-lg
                       transition transform hover:-translate-y-2 hover:shadow-xl duration-300 ease-out"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <Icon className="text-2xl text-[#fff6e0] mb-3 mx-auto" />
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
