import { useState } from "react";
import { projects } from "./projects";
import { CertificationsPage } from "./CertificationsPage";
import { ViewMore } from "./ViewMore";

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
      <CertificationsPage />

      {selectedProject && (
        <ViewMore
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </section>
  );
};
