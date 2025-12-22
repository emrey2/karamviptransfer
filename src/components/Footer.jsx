import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e0f10] text-[#ccc] text-sm pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-10 justify-between text-left mb-6">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-[#fff6e0] mb-3">VIP Transfer İzmir</h3>
            <p>Mercedes Vito ile premium transfer hizmeti.</p>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-[#fff6e0] mb-3">İletişim</h3>
            <p className="flex items-center gap-2 transition-all duration-500 hover:text-white">
              <FaPhone /> +90 552 819 42 76
            </p>
            <a
              href="https://wa.me/905528194276"
              className="flex items-center gap-2 mt-2 transition-all duration-500 hover:text-[#fff6e0]"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-[#fff6e0] mb-3">Hizmet Bölgeleri</h3>
            <p>İzmir, Çeşme, Alaçatı, Kuşadası, Urla, Foça</p>
          </div>
        </div>

        <hr className="border-[#333] mb-4" />
        <p className="text-center text-xs text-[#666]">
          © 2025 VIP Transfer İzmir. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
