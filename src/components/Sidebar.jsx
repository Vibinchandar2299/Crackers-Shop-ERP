import { NavLink } from "react-router-dom";
import logo from '../assets/images/Company Logo.png'; // Your company logo image

const Sidebar = () => {
  const mainMenu = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "Stocks", path: "/stocks", icon: "📦" },
    { label: "Customer", path: "/customer", icon: "👥" },
    { label: "History", path: "/history", icon: "📜" },
    { label: "Gift", path: "/gift", icon: "🎁" },
  ];

  const bottomMenu = [
    { label: "Settings", path: "/settings", icon: "⚙️" },
    { label: "Log Out", path: "/logout", icon: "🚪" },
  ];

  return (
    <div className="bg-black text-white w-64 min-h-screen p-4 flex flex-col justify-between fixed">
      <div>
        {/* Company Profile Section */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="w-20 h-20 rounded-full object-cover border-2 border-white shadow mb-2"
          />
          <h2 className="text-lg font-bold text-white text-center">Vibin Crackers</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-4">
          {mainMenu.map(({ label, path, icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 ${
                  isActive ? "bg-gray-800" : ""
                }`
              }
            >
              <span>{icon}</span> {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Menu */}
      <div className="space-y-4 mt-10">
        {bottomMenu.map(({ label, path, icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 ${
                isActive ? "bg-gray-800" : ""
              }`
            }
          >
            <span>{icon}</span> {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
