import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1 Kişi",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    const msg = `
🚖 Yeni Rezervasyon
🧭 ${form.pickup}
📍 ${form.dropoff}
📅 ${form.date} ${form.time}
👥 ${form.passengers}
📝 ${form.notes || "Yok"}
    `;
    window.open(
      `https://wa.me/905528194276?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="rezervasyon" className="py-20 text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6">Hızlı Rezervasyon</h2>
      <p className="text-gray-400 mb-8">
        Bilgilerinizi girin, WhatsApp üzerinden anında iletişime geçelim.
      </p>

      <form
        onSubmit={submit}
        className="max-w-3xl mx-auto bg-[#1c1d21] p-8 rounded-xl space-y-4 shadow-lg"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            name="pickup"
            value={form.pickup}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="🧭 Örn: İzmir Havalimanı"
            required
          />
          <input
            name="dropoff"
            value={form.dropoff}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            placeholder="📍 Örn: Çeşme, Alaçatı"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
          <select
            name="passengers"
            value={form.passengers}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#2a2b2e] text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <option>1 Kişi</option>
            <option>2 Kişi</option>
            <option>3 Kişi</option>
            <option>4 Kişi</option>
            <option>5+ Kişi</option>
          </select>
        </div>

        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400 resize-none min-h-[100px] transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          placeholder="📝 Bebek koltuğu, ekstra bagaj, özel talepler..."
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 shadow"
        >
          <FaWhatsapp /> WhatsApp ile Gönder
        </button>
      </form>
    </section>
  );
}
