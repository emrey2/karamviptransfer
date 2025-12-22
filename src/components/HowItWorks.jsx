export default function HowItWorks() {
  const steps = [
    [
      "01",
      "Bilgi Gönderin",
      "WhatsApp üzerinden transfer detaylarınızı iletin",
    ],
    ["02", "Onay Alın", "Fiyat teklifimizi alın ve onaylayın"],
    ["03", "Yolculuk Başlasın", "Şoförünüz sizi zamanında karşılasın"],
  ];

  return (
    <section className="py-20 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-2">Nasıl Çalışır?</h2>
      <p className="text-gray-400 mb-10">3 kolay adımda transfer</p>

      <div className="flex flex-wrap justify-center gap-10">
        {steps.map(([num, title, text], i) => (
          <div
            key={num}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="max-w-xs bg-[#1c1d21] p-6 rounded-lg shadow transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl will-change-transform"
          >
            <div className="text-3xl text-gray-500 mb-2">{num}</div>
            <h3 className="text-lg font-semibold text-[#fff6e0] mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
