import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validation
    let formErrors = {};
    if (!title.trim()) formErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      formErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split(",").length < 2) {
      formErrors.ingredients = "Please list at least 2 ingredients (comma separated).";
    }
    if (!instructions.trim()) formErrors.instructions = "Instructions are required.";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        instructions: instructions.split(".").map((step) => step.trim()).filter(Boolean),
      };

      console.log("Recipe submitted:", newRecipe);
      alert("Recipe submitted successfully!");

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Add New Recipe
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="e.g. Chocolate Cake"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Ingredients</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Enter ingredients separated by commas"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">Instructions</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="5"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
              placeholder="Enter steps separated by periods"
            />
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Submit Recipe
          </button>
        </form>

        <Link
          to="/"
          className="block text-center text-green-600 hover:text-green-800 mt-6"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default AddRecipeForm;