export default function HowItWorks() {
  const steps = [
    [
      "01",
      "Bilgi Gönderin",
      "WhatsApp üzerinden nereden nereye, kaç kişi, saat kaçta gibi transfer detaylarınızı bize iletin.",
    ],
    [
      "02",
      "Onay Alın",
      "Sunduğumuz fiyat teklifini inceleyin, sorularınızı sorun ve onayınızı verin.",
    ],
    [
      "03",
      "Yolculuk Başlasın",
      "Belirttiğiniz saatte şoförümüz sizi karşılasın ve güvenli bir şekilde ulaşımınızı sağlasın.",
    ],
  ];

  return (
    <section
      className="py-16 sm:py-20 px-4 sm:px-0 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-4 sm:mb-2">Nasıl Çalışır?</h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        Transfer süreci çok basit. Sadece birkaç bilgiyle rezervasyonunuzu
        oluşturabilir, konforlu ve zamanında bir yolculuk deneyimi
        yaşayabilirsiniz.
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {steps.map(([num, title, text], i) => (
          <div
            key={num}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="max-w-xs bg-[#1c1d21] p-6 rounded-lg shadow transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl will-change-transform"
          >
            <div className="text-3xl text-gray-500 mb-2">{num}</div>
            <h3 className="text-lg font-semibold text-[#fff6e0] mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
