import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g9hv03q",
        "template_sa8ple7",
        formRef.current,
        "F7M9IZfavEec8egYK"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });

          // Resetear el estado de "done" después de 5 segundos
          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
        }
      );
  };

  return (
    <section
      className="min-h-screen bg-white dark:bg-backgroundDark text-black dark:text-white px-6 py-12"
      id="contact"
      data-section="contact"
    >
      <h1 className="text-5xl font-bold text-center mb-12 tracking-tight">
        Contacto
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Columna Izquierda - Información de contacto */}
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
                  <p className="text-gray-600 dark:text-gray-300">
                    +53 54411276
                  </p>
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
                Estoy abierto a oportunidades y proyectos interesantes. ¡No
                dudes en contactarme!
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

        {/* Columna Derecha - Formulario de contacto */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>

          {/* Mensaje de éxito */}
          {done && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-800 dark:text-green-200 rounded-lg">
              ✅ ¡Mensaje enviado con éxito! Te contactaré pronto.
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Tu nombre"
              />
            </div>

             <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="user_subject"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-gray-200"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
