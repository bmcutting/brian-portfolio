import Sun from "../../assets/icons/sun.svg";
import Moon from "../../assets/icons/moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme/ThemeContext";

export const Toggle = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    handleChangeTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <img
        src={Sun}
        alt="sun"
        className={`w-6 transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`}
      />
      <img
        src={Moon}
        alt="moon"
        className={`w-6 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`}
      />
    </button>
  );
};
