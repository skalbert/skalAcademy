import { useState, useEffect } from "react";
import { Sun, Moon, Eye, EyeOff } from "lucide-react";

const Settings = () => {
  const [brightness, setBrightness] = useState(100); // Default full brightness
  const [fontSize, setFontSize] = useState(16); // Default font size
  const [theme, setTheme] = useState("auto"); // Auto theme detection
  const [sidebarExpanded, setSidebarExpanded] = useState(true); // Sidebar default expanded

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedBrightness = localStorage.getItem("brightness");
    const savedFontSize = localStorage.getItem("fontSize");
    const savedTheme = localStorage.getItem("theme");
    const savedSidebar = localStorage.getItem("sidebarExpanded");

    if (savedBrightness) setBrightness(parseInt(savedBrightness));
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedTheme) setTheme(savedTheme);
    if (savedSidebar) setSidebarExpanded(savedSidebar === "true");
  }, []);

  // Save settings to localStorage when changed
  useEffect(() => {
    localStorage.setItem("brightness", brightness);
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("theme", theme);
    localStorage.setItem("sidebarExpanded", sidebarExpanded);
    
    // Apply settings to the document
    document.documentElement.style.setProperty("--brightness", brightness + "%");
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [brightness, fontSize, theme, sidebarExpanded]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h2>

      {/* Brightness Control */}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300">Brightness</label>
        <input
          type="range"
          min="50"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(e.target.value)}
          className="w-full mt-2 cursor-pointer"
        />
      </div>

      {/* Font Size Control */}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300">Font Size</label>
        <div className="flex items-center space-x-3 mt-2">
          <button
            onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
            className="p-2 bg-gray-300 dark:bg-gray-600 rounded-md"
          >
            A-
          </button>
          <span className="text-lg">{fontSize}px</span>
          <button
            onClick={() => setFontSize((prev) => Math.min(prev + 2, 24))}
            className="p-2 bg-gray-300 dark:bg-gray-600 rounded-md"
          >
            A+
          </button>
        </div>
      </div>

      {/* Theme Control */}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300">Theme</label>
        <div className="flex items-center space-x-4 mt-2">
          <button
            onClick={() => setTheme("light")}
            className={`p-2 rounded-md ${
              theme === "light" ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <Sun size={20} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`p-2 rounded-md ${
              theme === "dark" ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <Moon size={20} />
          </button>
          <button
            onClick={() => setTheme("auto")}
            className={`p-2 rounded-md ${
              theme === "auto" ? "bg-blue-500 text-white" : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            Auto
          </button>
        </div>
      </div>

      {/* Sidebar Toggle */}
      <div className="mt-4">
        <label className="block text-gray-700 dark:text-gray-300">Sidebar</label>
        <button
          onClick={() => setSidebarExpanded((prev) => !prev)}
          className="flex items-center justify-between p-2 w-full bg-gray-300 dark:bg-gray-600 rounded-md mt-2"
        >
          <span>{sidebarExpanded ? "Expanded" : "Collapsed"}</span>
          {sidebarExpanded ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Settings;
