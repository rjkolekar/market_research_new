import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



const menuItems = [
  { to: "/dashboard", text: "Dashboard" },
  { to: "/add-reports", text: "Add Report"},
  { to: "/payments", text: "Payments" },
  { to: "/profile", text: "Profile" },
  { to: "/dashboard-reports", text: "Reports" },
 
];

const Sidebar = () => {
  
 
  const navigate = useNavigate()
  // // }
  // useEffect(() => {
  //   if (auth) {
  //     // userProfile exists and has data, no need to fetch again
  //     return;
  //   }

  
  // }, [auth ]);
  const logout = () => {
    localStorage.clear();
    alert("Successfully logged out");
    navigate("/"); // Use absolute path
  };
  

  
  return (
    <div className="bg-gray-900 text-white md:w-64 md:block hidden h-screen fixed top-0 left-0">
      {/* Top Section: Company Logo/Name */}
      <div className="flex items-center justify-center h-16 px-4 fixed w-64">
        <h1 className="text-4xl font-bold text-indigo-500">
         Infinity 
        </h1>
   
      </div>

      {/* Middle Section: Scrollable Menu Items */}
      <div className="mt-16 overflow-y-auto max-h-96">
      <hr className="my-2 border-gray-700 mt-6" />
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative px-3 py-2 hover:text-indigo-500"
              >
                <Link to={item.to} className="text-sm flex items-center">
                  {" "}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        
        
      </div>

      {/* Bottom Section: User Settings/Profile */}

      <hr className="my-2 border-gray-700" />
      <div className="absolute bottom-4 p-2 w-64">

          <>
            <Link
              to="/settings"
              className=" text-sm hover:text-indigo-500 flex"
            >
              
              <span>Settings</span>
            </Link>

            <hr className="my-2 border-gray-700" />
            <button
              onClick={logout}
              className="mt-4 text-sm hover:text-indigo-500 flex"
            >
              {/* <LogoutIcon className="w-6 h-6 mr-2 " /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>

              <span className="ml-2">Logout</span>
            </button>
          </>
     
      </div>
    </div>
  );
};

export default Sidebar;