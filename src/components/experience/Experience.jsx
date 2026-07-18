import { experience } from "./experienceData";

export const Experience = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background dark:bg-backgroundDark"
      id="experience"
      data-section="experience"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-200">
          Experiencia profesional
        </h1>

        <ol className="relative border-s-2 border-gray-200 dark:border-gray-700">
          {experience.map((item) => (
            <li key={item.role + item.period} className="mb-10 ms-6">
              <div className="absolute w-5 h-5 bg-primary rounded-full mt-1.5 -start-2.75 border-5 border-white dark:border-backgroundDark dark:bg-primaryDark"></div>

              <span className="text-sm font-medium text-primary dark:text-primaryDark">
                {item.period}
              </span>

              <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                {item.role}
                {item.company && (
                  <span className="text-gray-500 dark:text-gray-400 font-normal">
                    {" "}
                    · {item.company}
                  </span>
                )}
              </h3>

              {item.location && (
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
                  {item.location}
                </p>
              )}

              <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-violet-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
