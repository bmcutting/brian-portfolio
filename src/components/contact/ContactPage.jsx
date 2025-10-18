import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const ContactPage = () => {
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
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
