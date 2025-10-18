import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">¡Hablemos!</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-lg">📍</span>
            </div>
            <div>
              <p className="font-medium">Ubicación</p>
              <p className="text-gray-600 dark:text-gray-300">
                La Habana/Matanzas, Cuba
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <span className="text-lg">📱</span>
            </div>
            <div>
              <p className="font-medium">Teléfono</p>
              <p className="text-gray-600 dark:text-gray-300">+53 54411276</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
              <span className="text-lg">📧</span>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600 dark:text-gray-300">
                bmoralescutting@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Estado de disponibilidad */}
        <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-green-800 dark:text-green-300">
              ✅ Disponible para nuevos proyectos
            </span>
          </div>
          <p className="text-sm text-green-700 dark:text-green-400 mt-2">
            Estoy abierto a oportunidades y proyectos interesantes. ¡No dudes en
            contactarme!
          </p>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Sígueme en</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/brian-michel-morales-cutting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <span className="text-white font-bold">
                <BsLinkedin />
              </span>
            </a>
            <a
              href="https://github.com/bmcutting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <span className="text-white font-bold">
                <BsGithub />
              </span>
            </a>
            <a
              href="mailto:bmoralescutting@gmail.com"
              className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <span className="text-white font-bold">
                <MdEmail />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
