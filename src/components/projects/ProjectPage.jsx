import { useState } from "react";
import { projects } from "./projects";
import { certifications } from "./certifications"; // Importa tus certificaciones

export const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      className="min-h-screen bg-white dark:bg-backgroundDark text-black dark:text-white px-6 py-12"
      id="projects"
      data-section="projects"
    >
      <h1 className="text-5xl font-bold text-center mb-12 tracking-tight">
        Mis Proyectos
      </h1>

      {/* Grid de Proyectos */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-sm w-full bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
                {project.description}
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de Certificaciones */}
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

      {/* Modal para Proyectos */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-8 rounded-2xl max-w-lg w-full shadow-xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            >
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-xl mb-5"
            />
            <h2 className="text-3xl font-bold mb-3">
              {selectedProject.title}
            </h2>
            <p className="text-sm mb-6">{selectedProject.details}</p>

            <div className="flex flex-wrap gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
              )}
              {selectedProject.deploy && (
                <a
                  href={selectedProject.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-200 dark:bg-green-700 rounded-lg hover:bg-green-300 dark:hover:bg-green-600 transition"
                >
                  Ver Deploy
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};