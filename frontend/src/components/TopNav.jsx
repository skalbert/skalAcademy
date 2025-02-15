import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // User Icon
import { Home, BookOpen, FileText, Info, LogOut } from "lucide-react"; // Icons
import Logo from "./Logo";
import ThemeModeToggle from "./ThemeModeToggle";

const TopNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate(); // For redirection after logout

  // Function to handle user logout
  const handleLogout = () => {
    console.log("User logged out"); // Replace with actual logout logic
    setIsUserMenuOpen(false); // Close menu after logout
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-black/60 backdrop-blur-xl shadow-2xl px-4 py-3 fixed w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center: Hamburger Menu for Mobile */}
        <div className="md:hidden flex-1 flex justify-center">
          <button
            className="text-white focus:outline-none hover:animate-pulse"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Centered Navigation Links for Desktop */}
        <div className="hidden md:flex md:space-x-8 text-center">
          {[
            { path: "/", label: "Home", icon: <Home size={20} /> },
            { path: "/exam", label: "Exam", icon: <BookOpen size={20} /> },
            { path: "/courses", label: "Courses", icon: <FileText size={20} /> },
            { path: "/about", label: "About Us", icon: <Info size={20} /> }
          ].map(({ path, label, icon }) => (
            <Link 
              key={path}
              to={path} 
              className="group flex items-center px-3 py-2 text-gray-200 font-medium relative transition-all 
              duration-300 hover:animate-pulse hover:text-orange-400 hover:bg-black/20 rounded-lg"

            >
              {icon}
              <span className="ml-2">{label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-500 transition-all 
              duration-300 group-hover:w-full group-hover:animate-pulse"></span>

            </Link>
          ))}
        </div>

        {/* Right Section: Buttons, User Icon & Theme Toggle */}
        <div className="flex items-center space-x-8">
          {/* Hide Login & Create Account on Small Screens */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-glow animate-pulse"
            >
              Login
            </Link>
            <Link
              to="/create-account"
              className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-glow animate-pulse"
            >
              Create Account
            </Link>
          </div>

          {/* User Icon (Always Visible) */}
          <div 
            className="relative"
            onMouseEnter={() => setIsUserMenuOpen(true)}
            onMouseLeave={() => setIsUserMenuOpen(false)}
          >
            <button className="text-white text-3xl transition-all duration-200 hover:scale-110 hover:text-orange-400 animate-pulse">
              <FaUserCircle />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-0 w-48 bg-gray-900 text-white rounded-xl shadow-lg py-2 transition-all duration-300 origin-top transform scale-95 hover:scale-100 text-center">
                <Link to="/dashboard/profile" className="block px-4 py-2 hover:bg-gray-800 rounded-t-xl hover:text-orange-400">
                  Profile
                </Link>
                <Link to="/dashboard/settings" className="block px-4 py-2 hover:bg-gray-800 hover:text-orange-400">
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center w-full mt-auto p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 cursor-pointer hover:shadow-glow animate-pulse"
                >
                  <LogOut size={20} className="mr-2" /> Logout
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle (Well-Spaced from User Icon) */}
          <div className="ml-2 hover:shadow-glow hover:animate-pulse"> 
            <ThemeModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isNavOpen && (
        <div
          className="md:hidden flex flex-col items-center bg-black/80 w-full py-4 absolute top-full left-0 transition-all duration-300"
          onMouseEnter={() => setIsNavOpen(true)}
          onMouseLeave={() => setIsNavOpen(false)}
        >
          {[
            { path: "/", label: "Home" },
            { path: "/exam", label: "Exam" },
            { path: "/courses", label: "Courses" },
            { path: "/about", label: "About Us" }
          ].map(({ path, label }) => (
            <Link 
              key={path}
              to={path} 
              className="text-gray-200 hover:text-orange-500 font-medium py-2 animate-pulse"
            >
              {label}
            </Link>
          ))}

          {/* Login & Create Account (Visible in Mobile Menu) */}
            <Link to="/login" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-md font-medium my-2 animate-pulse hover:animate-bounce">

            Login
          </Link>
            <Link to="/signup" className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg shadow-md font-medium animate-pulse hover:animate-bounce">

            Create Account
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
