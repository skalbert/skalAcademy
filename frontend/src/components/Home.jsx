/* eslint-disable */
import React from "react";
import Logo from "./Logo"; // Import the Logo component
import TopNav from "./TopNav"; // Import the TopNav component
import ThemeModeToggle from "./ThemeModeToggle"; // Import the ThemeModeToggle component
import { BookOpen, Laptop, GraduationCap } from "lucide-react"; // Importing related SVG icons

const Home = () => {
  return (
    <>
      <TopNav /> {/* Keep Navbar separate from content */}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-blue-500 to-pink-400 text-white p-6 mt-20">

        <ThemeModeToggle /> {/* Theme Toggle Button */}
        <Logo /> {/* Logo */}

        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 text-center">
          Welcome to &nbsp;
          <span className="bg-gradient-to-r from-green-400 to-orange-200 text-transparent bg-clip-text">
            skal.io
          </span>!
        </h1>

        <p className="text-lg text-gray-200 mb-6 text-center max-w-2xl">
          Empowering you with the best IT courses to boost your career. Learn, grow, and succeed with us!
        </p>

        <button className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold rounded-xl shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105 focus:outline-none">
          Get Started
        </button>

        {/* SVG Section for Course Topics */}
        <div className="flex flex-wrap justify-center mt-12 gap-8 px-4">
          <div className="flex flex-col items-center">
            <BookOpen size={80} className="text-white mb-4" />
            <p className="text-lg font-semibold">Learn New Skills</p>
          </div>
          <div className="flex flex-col items-center">
            <Laptop size={80} className="text-white mb-4" />
            <p className="text-lg font-semibold">Hands-on IT Training</p>
          </div>
          <div className="flex flex-col items-center">
            <GraduationCap size={80} className="text-white mb-4" />
            <p className="text-lg font-semibold">Career Growth</p>
          </div>
        </div>

        {/* Responsive Cards Section */}
        <div className="flex flex-wrap justify-center mt-16 gap-8 px-4">
          <div className="card h-80 w-72 bg-gradient-to-b from-orange-600 via-orange-400 to-orange-300 p-1 border-4 border-green-800 shadow-2xl rounded-2xl flex flex-col items-center justify-center text-xl font-bold">
            <BookOpen size={50} className="mb-4 text-white" />
            Web Development
          </div>
          <div className="card h-80 w-72 bg-gradient-to-b from-orange-600 via-orange-400 to-orange-300 p-1 border-4 border-blue-800 shadow-2xl rounded-2xl flex flex-col items-center justify-center text-xl font-bold">
            <Laptop size={50} className="mb-4 text-white" />
            Software Engineering
          </div>
          <div className="card h-80 w-72 bg-gradient-to-b from-orange-600 via-orange-400 to-orange-300 p-1 border-4 border-pink-400 shadow-2xl rounded-2xl flex flex-col items-center justify-center text-xl font-bold">
            <GraduationCap size={50} className="mb-4 text-white" />
            Certification Programs
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
