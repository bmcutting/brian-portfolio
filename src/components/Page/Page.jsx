import { Intro } from "../intro/Intro";
import { About } from "../about/About";
import { ProjectPage } from "../projects/projectPage";
import { ContactPage } from "../contact/ContactPage";

export const Page = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProjectPage />
      <ContactPage />
    </div>
  );
};
