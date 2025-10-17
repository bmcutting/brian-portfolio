import Brian from "../../assets/images/BrianPic.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Intro = () => {

  return (
    <section
      className="min-h-screen w-full grid lg:grid-cols-2 grid-cols-1 pt-[6vh] md:pt-[10vh] px-4 sm:px-6 lg:px-8
    bg-background dark:bg-backgroundDark dark:text-gray-200"
      id="intro"
      data-section="intro"
    >
      <div className="h-full flex items-center justify-center max-sm:items-start py-8 order-2 lg:order-1 lg:py-0">
        <div className="max-w-2xl mx-auto lg:ml-5 text-center lg:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 md:mb-6">
            Hola mi nombre es{" "}
            <span className="text-primary dark:text-primaryDark text-3xl sm:text-5xl md:text-6xl lg:text-7xl border-b-2 inline-block pb-1">
              Brian Michel
            </span>
          </h1>
          <p className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide sm:tracking-wider font-bold">
            Desarrollador de Software
          </p>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-justify text-gray-600 dark:text-gray-400 md:leading-relaxed">
            Desarrollador con experiencia en software industrial y programación
            en{" "}
            <strong className="text-[#7c5cff] animate-pulse drop-shadow-md">
              .NET (C#)
            </strong>
            . Actualmente enfocado en frontend, creando interfaces modernas con{" "}
            <strong className="text-[#61dafb] animate-pulse drop-shadow-md">
              React
            </strong>
            ,{" "}
            <strong className="text-[#38bdf8] animate-pulse drop-shadow-md">
              Tailwind CSS
            </strong>
            ,{" "}
            <strong className="text-[#e34c26] animate-pulse drop-shadow-md">
              HTML
            </strong>{" "}
            y{" "}
            <strong className="text-[#264de4] animate-pulse drop-shadow-md">
              CSS
            </strong>
            .
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center order-1 lg:order-2 flex-col">
        <div
          className="aspect-square w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] 
          rounded-full overflow-hidden flex items-center justify-center
        bg-primary dark:bg-primaryDark dark:shadow-gray-800/30 shadow-xl
          border-4 border-white dark:border-black"
        >
          <img
            src={Brian}
            alt="Imagen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/bmcutting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 duration-400 hover:scale-130 transition-transform"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-michel-morales-cutting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 duration-400 hover:scale-130 transition-transform"
          >
            <FaLinkedinIn className="text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
};
