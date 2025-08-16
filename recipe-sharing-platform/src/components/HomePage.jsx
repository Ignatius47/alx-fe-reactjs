import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to Music Player</h1>
      <p className="text-lg mb-8 text-gray-400">
        Search and play your favorite tracks instantly.
      </p>
      <div className="space-x-4">
        <Link
          to="/search"
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition"
        >
          Search Music
        </Link>
        <Link
          to="/library"
          className="px-6 py-3 bg-gray-700 text-white rounded-xl shadow-md hover:bg-gray-800 transition"
        >
          Your Library
        </Link>
      </div>
    </div>
  );
};

export default HomePage;