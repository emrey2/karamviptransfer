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
    <section
      className="py-20 sm:py-24 px-4 sm:px-6 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        Neden Bizi Tercih Etmelisiniz?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {items.map(([Icon, title, desc], i) => (
          <div
            key={title}
            className="bg-[#1c1d21] border border-[#2b2c2e] p-6 sm:p-8 rounded-lg
                       transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <Icon className="text-2xl sm:text-3xl text-[#fff6e0] mb-4 mx-auto" />
            <h3 className="text-base font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
