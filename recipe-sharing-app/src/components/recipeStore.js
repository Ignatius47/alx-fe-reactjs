import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    return set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm),
    });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    return set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm),
      favorites: get().favorites.filter((favId) => favId !== id),
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return set({
      recipes: updatedRecipes,
      filteredRecipes: filterByTerm(updatedRecipes, get().searchTerm),
    });
  },

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterByTerm(state.recipes, term),
    })),

  addFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? state
        : { favorites: [...state.favorites, id] }
    ),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => !favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

function filterByTerm(recipes, term) {
  return recipes.filter((r) =>
    r.title.toLowerCase().includes(term.toLowerCase())
  );
}