import RecipeCard from "./RecipeCard";

// Displays the recipe cards grid and handles empty-search state.
export default function RecipeList({ recipes }) {
  // Empty state before first search or when no matches are returned.
  if (recipes.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
        No recipes yet. Start with a search above.
      </div>
    );
  }

  return (
    // Render one card per recipe result.
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}