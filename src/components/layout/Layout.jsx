import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { ShareButton } from "../share/ShareButton";
import { useActiveSection } from "../../hooks/useActiveSectionObserver";

export const Layout = () => {
  useActiveSection();

  return (
    <div>
      <Header />
      <Outlet />
      <ShareButton />
    </div>
  );
};
