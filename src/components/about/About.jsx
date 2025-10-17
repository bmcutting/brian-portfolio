import { SkillsGrid } from "./SkillsGrid";
import { Timeline } from "./Timeline";

export const About = () => {


  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-8 bg-background dark:bg-backgroundDark"
      id="about-me"
      data-section="about-me"
    >
      <div className="max-w-4/5 md:max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-gray-200">
              Acerca de mí
            </h1>
            <Timeline />
          </div>
          <div className="flex flex-col h-full w-full">
            <h1 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-gray-200">
              Habilidades
            </h1>
            <div className="flex-1 min-h-0">
              <SkillsGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
