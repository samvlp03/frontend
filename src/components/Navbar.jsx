import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaHome, FaBlog, FaHeartbeat, FaDumbbell, FaChartLine } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".profile-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <nav className="mb-0 rounded-sm custom-gradient px-4 py-3 flex items-center justify-between text-white shadow-lg">
      {/* Left: Logo */}
      <div className="text-2xl font-bold flex gap-2 items-center">
        <img src="./logo.png" height="64px" width="64px" alt="logo" />
        <div>
          Equinox <span>Mind</span>
        </div>
      </div>

      {/* Center: NavLinks */}
      {user && (
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="NavLinks hidden md:flex gap-6 text-sm items-center">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex flex-col items-center transition ${
                  isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
                }`
              }
            >
              <FaHome size={18} />
              Home
            </NavLink>

            <NavLink
              to="/diagnose"
              className={({ isActive }) =>
                `flex flex-col items-center transition ${
                  isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
                }`
              }
            >
              <FaHeartbeat size={18} />
              Diagnose
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex flex-col items-center transition ${
                  isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
                }`
              }
            >
              <FaChartLine size={18} />
              Reports
            </NavLink>

            <NavLink
              to="/exercise"
              className={({ isActive }) =>
                `flex flex-col items-center transition ${
                  isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
                }`
              }
            >
              <FaDumbbell size={18} />
              Exercise
            </NavLink>

            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `flex flex-col items-center transition ${
                  isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-200"
                }`
              }
            >
              <FaBlog size={18} />
              Blogs
            </NavLink>
          </div>
        </div>
      )}

      {/* Right: Profile or Login */}
      <div>
        {user ? (
          <div
            className="relative profile-container flex items-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"
              alt="User Profile"
            />
            <p>{user.name || "User"}</p>
            <BiSolidDownArrow />
            {isOpen && (
              <div className="absolute top-11 right-0 mt-2 w-48 bg-white rounded shadow-lg text-black z-50">
                <NavLink className="px-4 py-2 hover:bg-gray-100 block" to="/user-profile">
                  View Profile
                </NavLink>
                <button
                  className="px-4 py-2 hover:bg-gray-100 text-red-600 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-[#36247e] px-4 py-2 rounded cursor-pointer font-medium hover:bg-gray-200 transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
