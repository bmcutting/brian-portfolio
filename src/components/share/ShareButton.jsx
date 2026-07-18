import { FiShare2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PORTFOLIO_URL = "https://bmcutting.github.io/brian-portfolio/";
const shareText = encodeURIComponent(
  `Mira mi portfolio como Desarrollador de Software 👉 ${PORTFOLIO_URL}`
);
const whatsappShareUrl = `https://wa.me/?text=${shareText}`;

export const ShareButton = () => {
  return (
    <a
      href={whatsappShareUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Compartir portfolio por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white p-3.5 sm:pl-4 sm:pr-5 sm:py-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
    >
      <span className="relative flex items-center justify-center">
        <FiShare2 className="text-xl" />
        <FaWhatsapp className="absolute -bottom-1.5 -right-1.5 text-sm bg-green-500 group-hover:bg-green-600 rounded-full transition-colors" />
      </span>
      <span className="hidden sm:inline text-sm font-semibold">Compartir</span>
    </a>
  );
};
