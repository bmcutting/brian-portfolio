import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
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
          setFormData({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });
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
    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>
      {done && (
        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 
        dark:border-green-600 text-green-800 dark:text-green-200 rounded-lg">
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
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300
             dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition-all duration-300"
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
            value={formData.user_subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2
             focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Asunto del menssaje"
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
            value={formData.user_email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600
             rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
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
  );
};
