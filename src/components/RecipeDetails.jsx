import { useEffect, useState } from "react";

// Spoonacular API key from Vite environment variables.
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

// Modal component to display full recipe information.
function RecipeDetails({ recipeId, onClose }) {
  // Stores full recipe data for the selected recipe ID.
  const [details, setDetails] = useState(null);

  // Load recipe details when modal opens or recipeId changes.
  useEffect(() => {
    async function loadDetails() {
      const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
    }

    loadDetails();
  }, [recipeId]);

  // Loading state while waiting for API response.
  if (!details) {
    return (
      <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
        <div className="rounded-xl bg-white p-6 text-slate-600 shadow-card">Loading...</div>
      </div>
    );
  }

  return (
    // Full-screen overlay + centered modal content.
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-6 shadow-card sm:p-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-2xl font-bold text-brand-dark">{details.title}</h2>
          <button
            className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {/* Recipe image */}
        <img
          src={details.image}
          alt={details.title}
          className="mb-6 h-64 w-full rounded-xl object-cover"
        />

        {/* Ingredients list */}
        <h3 className="mb-3 text-xl font-semibold text-brand-dark">Ingredients</h3>
        <ul className="mb-6 space-y-2 text-slate-700">
          {details.extendedIngredients.map((ing, index) => (
            <li
              key={`${ing.id}-${index}`}
              className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
            >
              {ing.original}
            </li>
          ))}
        </ul>

        {/* Instructions rendered from API-provided HTML */}
        <h3 className="mb-3 text-xl font-semibold text-brand-dark">Instructions</h3>
        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{
            __html: details.instructions || "No instructions available.",
          }}
        />
      </div>
    </div>
  );
}

export default RecipeDetails;