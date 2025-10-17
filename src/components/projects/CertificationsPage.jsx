import { certifications } from "./Certifications"

export const CertificationsPage = () => {
  return (
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
          Mis Certificaciones
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center max-w-6xl mx-auto">
          {certifications.map((certification) => (
            <a
              key={certification.id}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group max-w-xs w-full bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={certification.img}
                    alt={`Certificación ${certification.id}`}
                    className="h-32 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                    Ver certificación
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
  )
}
