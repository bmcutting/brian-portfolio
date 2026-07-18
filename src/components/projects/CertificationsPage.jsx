import { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { certifications } from "./certifications";

const categoryStyles = {
  Frontend:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  Backend:
    "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300",
  Idioma:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
};

export const CertificationsPage = () => {
  const [zoomed, setZoomed] = useState(null);

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setZoomed(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  return (
    <section
      id="certifications"
      data-section="certifications"
      className="bg-white dark:bg-backgroundDark text-black dark:text-white px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
        Mis Certificaciones
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch max-w-6xl mx-auto">
        {certifications.map((certification) => (
          <div
            key={certification.id}
            onClick={() => setZoomed(certification)}
            className="group flex flex-col cursor-pointer bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-center bg-white dark:bg-gray-900 h-44 p-2 border-b border-gray-100 dark:border-gray-700">
              <img
                src={certification.img}
                alt={`Certificación ${certification.title} — ${certification.issuer}`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <span
                className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
                  categoryStyles[certification.category] ??
                  "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {certification.category}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                {certification.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {certification.issuer} · {certification.date}
              </p>

              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center self-start gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 mt-4 hover:gap-2.5 hover:underline transition-all"
              >
                Ver certificación
                <FiExternalLink className="text-base" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {zoomed && (
        <div
          onClick={() => setZoomed(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setZoomed(null)}
              aria-label="Cerrar"
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
            >
              ×
            </button>
            <img
              src={zoomed.img}
              alt={`Certificación ${zoomed.title} — ${zoomed.issuer}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl cursor-default"
            />
          </div>
        </div>
      )}
    </section>
  );
};
