import { FaCheckCircle } from "react-icons/fa";

export default function ServiceAreas() {
  const areasLeft = [
    "İzmir Havalimanı (ADB)",
    "Alaçatı",
    "Selçuk / Efes",
    "Urla",
  ];

  const areasRight = ["Çeşme", "Kuşadası", "Foça", "Seferihisar"];

  return (
    <section
      className="py-16 sm:py-20 bg-[#1b1c1f] px-4 sm:px-6"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Hizmet Bölgelerimiz
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[300px] sm:h-[400px] border-none"
            src="https://www.google.com/maps?q=izmir&output=embed"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
            {[areasLeft, areasRight].map((group, index) => (
              <ul key={index} className="space-y-3">
                {group.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-gray-400
                               transition-all duration-500 ease-in-out hover:text-white"
                  >
                    <FaCheckCircle className="text-[#fff6e0]" /> {area}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <p className="bg-[#2a2b2e] p-4 rounded-md text-sm text-gray-400">
            <strong className="text-white block mb-1">
              Listede olmayan bir destinasyon mu arıyorsunuz?
            </strong>
            Bize ulaşın, çözüm bulalım.
          </p>
        </div>
      </div>
    </section>
  );
}
