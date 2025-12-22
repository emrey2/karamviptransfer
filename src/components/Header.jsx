import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full px-10 py-5 flex justify-between items-center z-20">
      <div className="text-lg font-bold text-white">VIP Transfer İzmir</div>

      <a
        href="https://wa.me/905528194276"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow
                   transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </header>
  );
}
