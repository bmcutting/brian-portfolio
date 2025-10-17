import { Toggle } from "./Toggle";
import { useContext } from "react";
import { ActiveSectionContext } from "../../contexts/ActiveSection/ActiveSectionContext";

export const Header = () => {
  const context = useContext(ActiveSectionContext);

  // Manejar el caso donde el contexto no esté disponible
  if (!context) {
    return (
      <header>
        <nav>Navegación no disponible</nav>
      </header>
    );
  }

  const { activeSection } = context;

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`[data-section="${sectionId}"]`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed top-2 right-4 w-1/2 lg:w-1/3 h-[8vh]
      bg-white/20 dark:bg-black/20 backdrop-blur-lg
      rounded-xl shadow-md flex justify-around items-center
      text-sm text-black/80 dark:text-white/50 font-medium transition-all duration-300 z-50
      max-sm:hidden"
    >
      <button
        className={`hover:dark:text-white transition-colors cursor-pointer hover:dark:bg-black/30 p-4 rounded-xl
        ${
          activeSection === "intro"
            ? "dark:text-white font-extrabold transition-all duration-500"
            : ""
        }`}
        onClick={() => scrollToSection("intro")}
      >
        Inicio
      </button>
      <button
        className={`hover:dark:text-white transition-colors cursor-pointer hover:dark:bg-black/30 p-4 rounded-xl
        ${
          activeSection === "about-me"
            ? "dark:text-white font-extrabold transition-all duration-500"
            : ""
        }`}
        onClick={() => scrollToSection("about-me")}
      >
        Acerca de mí
      </button>
      <button
        className={`hover:dark:text-white transition-colors cursor-pointer hover:dark:bg-black/30 p-4 rounded-xl
        ${
          activeSection === "projects"
            ? "dark:text-white font-extrabold transition-all duration-500"
            : ""
        }`}
        onClick={() => scrollToSection("projects")}
      >
        Proyectos
      </button>
      <button
        className={`hover:dark:text-white transition-colors cursor-pointer hover:dark:bg-black/30 p-4 rounded-xl
        ${
          activeSection === "contact"
            ? "dark:text-white font-extrabold transition-all duration-500"
            : ""
        }`}
        onClick={() => scrollToSection("contact")}
      >
        Contacto
      </button>
    </div>
  );
};
