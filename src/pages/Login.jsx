// src/components/SlidingAuth.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function SlidingAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    age: "",
    contact: ""
  });

  const { register, login, isLoading } = useAuth();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      name: "",
      gender: "",
      age: "",
      contact: ""
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      username: formData.email,
      email: formData.email,
      password: formData.password,
      name: formData.name,
      gender: formData.gender,
      age: formData.age,
      phone: formData.contact,
      role: "patient",
    });

    try {
      const success = isLogin
        ? await login({ username: formData.email, password: formData.password })
        : await register({
          username: formData.email,
          email: formData.email,
          password: formData.password,
          name: formData.name,
          gender: formData.gender,
          age: formData.age,
          phone: formData.contact,
          role: "patient",
        });

      if (success) {
        toast.success(isLogin ? "Logged in successfully!" : "Registered successfully!");
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error("Authentication failed. Please check your details.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Toaster />
      <div className="relative w-[800px] h-[500px] flex bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-lg shadow-xl overflow-hidden border border-white/30">
        <div
          className={`w-1/2 hidden md:flex items-center justify-center transition-all duration-500 ${isLogin ? "translate-x-full" : ""
            }`}
        >
          <img
            src={
              isLogin
                ? "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=900&auto=format&fit=crop"
                : "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=900&auto=format&fit=crop"
            }
            alt={isLogin ? "Login background" : "Sign-up background"}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`w-full md:w-1/2 flex flex-col items-center justify-center p-10 transition-all duration-500 ${isLogin ? "-translate-x-full" : ""
            }`}
        >
          <h2 className="text-2xl font-bold mb-5 text-white drop-shadow">
            {isLogin ? "Login" : "Sign Up"}
          </h2>


          <form onSubmit={handleSubmit} className="w-full">
            {!isLogin && (
              <div className="w-full mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            )}

            <div className="w-full mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="w-full mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {!isLogin && (
              <>
                <div className="w-full mb-4">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    <option value="" disabled>Select Gender</option>
                    <option className="text-gray-700" value="male">Male</option>
                    <option className="text-gray-700" value="female">Female</option>
                    <option className="text-gray-700" value="others">Others</option>
                  </select>
                </div>

                <div className="w-full mb-4">
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="w-full mb-4">
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </>

            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
            >
              {isLoading ? "Please wait..." : (isLogin ? "Login" : "Sign Up")}
            </button>
          </form>

          <button
            type="button"
            className="mt-4 text-blue-200 hover:text-white transition cursor-pointer"
            onClick={toggleForm}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"
              }
          </button>
        </div>
      </div>
    </div>
  );
}
