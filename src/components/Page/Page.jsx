import { Intro } from "../intro/Intro";
import { About } from "../about/About";
import { Experience } from "../experience/Experience";
import { ProjectPage } from "../projects/ProjectPage";
import { ContactPage } from "../contact/ContactPage";

export const Page = () => {
  return (
    <div>
      <Intro />
      <About />
      <Experience />
      <ProjectPage />
      <ContactPage />
    </div>
  );
};
