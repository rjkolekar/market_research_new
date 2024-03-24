import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md'; // Import icons from Material Design Icons
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("userData");

    // Redirect the user to the login page
    window.location.href = "/login";
  };
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white ${
          showSidebar ? 'w-64' : 'w-16'
        } transition-all duration-300 ease-in-out`}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-6">
            <span className="text-xl font-semibold">Dashboard</span>
            <button
              className="text-white focus:outline-none lg:hidden"
              onClick={toggleSidebar}
            >
              {showSidebar ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <MdMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Sidebar Links */}
          {showSidebar && (
             <nav className="flex-1 px-2 py-4">
             <ul>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <Link to="/add-reports">Add Report</Link>
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <Link to="/list-reports">All Reports</Link>
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <Link to="/analytics">Analytics</Link>
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <Link to="/payments">Payments</Link>
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <Link to="/profile">Profile</Link>
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                 <Link to="/settings">Settings</Link>
               </li>
               <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
               <button onClick={handleLogout}>Logout</button>
               </li>
             </ul>
           </nav>
          )}
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 overflow-auto">
        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome to Dashboard</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            arcu at justo convallis, ac vehicula nunc sodales. Nulla facilisi.
            Integer tristique magna at ipsum efficitur consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
