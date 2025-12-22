import { FaChevronDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const refs = useRef([]);

  const faqs = [
    ["Bebek koltuğu talep edebilir miyim?", "Evet, temin ediyoruz."],
    ["Uçuş rötarı olursa?", "Uçuşunuzu takip ediyoruz."],
    ["İptal edebilir miyim?", "6 saat önceden bildirmeniz yeterli."],
    ["Bagaj sınırı var mı?", "Geniş bagaj hacmi mevcuttur."],
  ];

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) el.style.maxHeight = open === i ? el.scrollHeight + "px" : "0px";
    });
  }, [open]);

  return (
    <section className="py-20 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-10">Sıkça Sorulan Sorular</h2>

      <div className="max-w-3xl mx-auto text-left space-y-4">
        {faqs.map(([q, a], i) => (
          <div key={i} className="border border-[#2a2b2e] rounded-lg">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full px-6 py-4 flex justify-between items-center
                         transition-all duration-500 ease-in-out hover:bg-[#2a2b2e]"
            >
              {q}
              <FaChevronDown
                className={`transition-transform duration-500 ${
                  open === i ? "rotate-180 text-[#fff6e0]" : ""
                }`}
              />
            </button>

            <div
              ref={(el) => (refs.current[i] = el)}
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out px-6"
            >
              <p className="py-4 text-gray-400">{a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
