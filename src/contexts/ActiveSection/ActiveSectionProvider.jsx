import { useState } from "react";
import { ActiveSectionContext } from "./ActiveSectionContext";

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("intro");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
