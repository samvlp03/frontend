import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-5xl font-bold mb-4 text-blue-800">EquinoxMind</h1>
      <p className="text-lg max-w-xl mb-6 text-gray-700">
        Diagnose mental health conditions using AI models powered by voice, text, and facial recognition.
        Start your journey toward better mental well-being.
      </p>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Login</button>
        </Link>
        <Link to="/login">
          <button className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
