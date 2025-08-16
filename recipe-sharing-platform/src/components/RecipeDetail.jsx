import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg w-full h-64 object-cover mb-6"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            )) || <li>No ingredients listed</li>}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            )) || <li>No instructions available</li>}
          </ol>
        </div>

        <Link
          to="/"
          className="mt-6 inline-block text-green-600 hover:text-green-800 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;