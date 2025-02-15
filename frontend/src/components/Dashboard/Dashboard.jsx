import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LogOut, User, BarChart2, LayoutGrid, Home, Menu } from 'lucide-react';
import ThemeModeToggle from '../ThemeModeToggle';
import { useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    navigate('/login'); // Redirect to Login page
  };

  const navItems = [
    { name: 'Overview', path: '/dashboard/overview', icon: <Home size={22} /> },
    { name: 'Profile', path: '/dashboard/profile', icon: <User size={22} /> },
    { name: 'Progress', path: '/dashboard/progress', icon: <BarChart2 size={22} /> },
    { name: 'Project Showcase', path: '/dashboard/project-showcase', icon: <LayoutGrid size={22} /> },
  ];

  return (
    <div className="mt-16 flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeModeToggle />

      {/* Sidebar (Hover to Expand on All Screens) */}
      <aside 
        className={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300
          ${isSidebarOpen ? 'w-64' : 'w-14'} flex flex-col fixed h-full`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        {/* Sidebar Header */}
        <div className="p-4 text-center text-gray-800 dark:text-white text-lg font-semibold">
          {isSidebarOpen ? "Dashboard" : <Menu size={24} className="mx-auto" />}
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col p-2 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-lg transition duration-200 text-sm md:text-base ${
                  isActive ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`
              }
            >
              {/* Icon always visible */}
              <div className="w-12 text-center">{item.icon}</div>
              {/* Text only visible when expanded */}
              {isSidebarOpen && <span className="text-sm md:text-base">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full mt-auto p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 text-sm md:text-base"
        >
          <LogOut size={22} className="w-12 text-center" />
          {isSidebarOpen && <span className="ml-2">Logout</span>}
        </button>
      </aside>

      {/* Main Content - Adjusted for Sidebar Behavior */}
      <main className={`flex-1 p-4 md:p-6 transition-all ${isSidebarOpen ? 'ml-64' : 'ml-14'}`}>
        <Outlet /> {/* Renders nested routes */}
      </main>
    </div>
  );
};

export default Dashboard;
