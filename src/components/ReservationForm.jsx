import { FaWhatsapp } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function ReservationForm() {
  const serviceAreas = [
    "İzmir Havalimanı (ADB)",
    "Alaçatı",
    "Selçuk / Efes",
    "Urla",
    "Çeşme",
    "Kuşadası",
    "Foça",
    "Seferihisar",
  ];

  const [form, setForm] = useState({
    name: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1 Kişi",
    notes: "",
  });

  const [showPickupOptions, setShowPickupOptions] = useState(false);
  const [showDropoffOptions, setShowDropoffOptions] = useState(false);

  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickupRef.current && !pickupRef.current.contains(e.target)) {
        setShowPickupOptions(false);
      }
      if (dropoffRef.current && !dropoffRef.current.contains(e.target)) {
        setShowDropoffOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const filterAreas = (value) =>
    serviceAreas.filter((area) =>
      area.toLowerCase().includes(value.toLowerCase())
    );

  const submit = (e) => {
    e.preventDefault();
    const msg = `
🚖 Yeni Rezervasyon
👤 İsim: ${form.name}
🧭 Alış: ${form.pickup}
📍 Varış: ${form.dropoff}
📅 Tarih: ${form.date}
⏰ Saat: ${form.time}
👥 Yolcu: ${form.passengers}
📝 Notlar: ${form.notes || "Yok"}
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
        className="max-w-3xl mx-auto bg-[#1c1d21] p-8 rounded-xl space-y-5 shadow-lg"
      >
        {/* Name */}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="👤 Ad Soyad"
          className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400
                     transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
          required
        />

        {/* Pickup */}
        <div className="relative" ref={pickupRef}>
          <input
            name="pickup"
            value={form.pickup}
            onChange={(e) => {
              handleChange(e);
              setShowPickupOptions(true);
            }}
            onFocus={() => setShowPickupOptions(true)}
            placeholder="🧭 Alış Noktası"
            autoComplete="off"
            className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400
                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
          {showPickupOptions && (
            <ul
              className="absolute top-full left-0 right-0 bg-[#2a2b2e] rounded-lg
                           max-h-40 overflow-auto z-20 text-left text-sm"
            >
              {filterAreas(form.pickup).map((area) => (
                <li
                  key={area}
                  className="px-3 py-2 hover:bg-[#3a3b3e] cursor-pointer
                             transition-all duration-300"
                  onClick={() => {
                    setForm((p) => ({ ...p, pickup: area }));
                    setShowPickupOptions(false);
                  }}
                >
                  {area}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Dropoff */}
        <div className="relative" ref={dropoffRef}>
          <input
            name="dropoff"
            value={form.dropoff}
            onChange={(e) => {
              handleChange(e);
              setShowDropoffOptions(true);
            }}
            onFocus={() => setShowDropoffOptions(true)}
            placeholder="📍 Varış Noktası"
            autoComplete="off"
            className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400
                       transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            required
          />
          {showDropoffOptions && (
            <ul
              className="absolute top-full left-0 right-0 bg-[#2a2b2e] rounded-lg
                           max-h-40 overflow-auto z-20 text-left text-sm"
            >
              {filterAreas(form.dropoff).map((area) => (
                <li
                  key={area}
                  className="px-3 py-2 hover:bg-[#3a3b3e] cursor-pointer
                             transition-all duration-300"
                  onClick={() => {
                    setForm((p) => ({ ...p, dropoff: area }));
                    setShowDropoffOptions(false);
                  }}
                >
                  {area}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date / Time / Passengers */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full text-left">
            <label className="text-sm text-gray-400 mb-1 block">📅 Tarih</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#2a2b2e] text-white
                         transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <div className="w-full text-left">
            <label className="text-sm text-gray-400 mb-1 block">⏰ Saat</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#2a2b2e] text-white
                         transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              required
            />
          </div>

          <div className="w-full text-left">
            <label className="text-sm text-gray-400 mb-1 block">
              👥 Yolcu Sayısı
            </label>
            <select
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#2a2b2e] text-white
                         transition duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option>1 Kişi</option>
              <option>2 Kişi</option>
              <option>3 Kişi</option>
              <option>4 Kişi</option>
              <option>5+ Kişi</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="📝 Bebek koltuğu, ekstra bagaj, özel talepler..."
          className="w-full p-3 rounded bg-[#2a2b2e] text-white placeholder-gray-400
                     resize-none min-h-[100px] transition duration-300
                     focus:outline-none focus:ring-2 focus:ring-white/20"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg flex items-center
                     justify-center gap-2 font-medium shadow
                     transition-all duration-500 ease-in-out
                     hover:-translate-y-1 hover:scale-105"
        >
          <FaWhatsapp /> WhatsApp ile Gönder
        </button>
      </form>
    </section>
  );
}
