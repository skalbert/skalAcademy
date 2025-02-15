import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeModeToggle = () => {
  const { theme, toggleTheme } = useTheme(); // Ensure toggleTheme is called correctly


  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full
      fixed top-2 right-4 z-50
      bg-gray-200 dark:bg-gray-700 transition"
      aria-label="ToggleModeTheme"
    >
      {theme === 'dark' ? <Moon className="text-blue-400" /> : <Sun className="text-yellow-400" />}
    </button>
  );
};

export default ThemeModeToggle;
