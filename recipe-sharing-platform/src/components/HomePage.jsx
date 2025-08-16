import { useState, useEffect } from "react";
import { Link } from "react-router-dom";   // ✅ import Link

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
        Recipe Sharing Platform
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>

            {/* ✅ Use Link instead of <a> */}
            <Link
              to={`/recipe/${recipe.id}`}
              className="text-green-600 hover:text-green-800 mt-3 inline-block font-medium"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;