import { FaCheckCircle } from "react-icons/fa";

export default function ServiceAreas() {
  const areas = [
    "İzmir Havalimanı (ADB)",
    "Alaçatı",
    "Selçuk / Efes",
    "Urla",
    "Çeşme",
    "Kuşadası",
    "Foça",
    "Seferihisar",
  ];

  return (
    <section className="py-20 bg-[#1b1c1f]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10">
        Hizmet Bölgelerimiz
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <iframe
          className="w-full h-[400px] rounded-xl"
          src="https://www.google.com/maps?q=izmir&output=embed"
        />

        <div>
          <ul className="grid grid-cols-2 gap-3 mb-6">
            {areas.map((a) => (
              <li
                key={a}
                className="flex items-center gap-2 text-gray-400
                           transition-all duration-500 ease-in-out hover:text-white"
              >
                <FaCheckCircle className="text-[#fff6e0]" /> {a}
              </li>
            ))}
          </ul>

          <p className="bg-[#2a2b2e] p-4 rounded-md text-sm text-gray-400">
            <strong className="text-white">
              Listede olmayan bir destinasyon mu arıyorsunuz?
            </strong>{" "}
            Bize ulaşın, çözüm bulalım.
          </p>
        </div>
      </div>
    </section>
  );
}
