import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Recipe details page for route: /recipe/:id
export default function RecipePage() {
  // Read recipe ID from the URL.
  const { id } = useParams();

  // Store full recipe details returned by Spoonacular.
  const [recipe, setRecipe] = useState(null);

  // Fetch details when page first loads or when route id changes.
  useEffect(() => {
    const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

    async function loadRecipe() {
      // Request full information for a single recipe.
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setRecipe(data);
    }

    loadRecipe();
  }, [id]);

  // Loading state while waiting for API response.
  if (!recipe) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 shadow-card">
          Loading recipe details...
        </p>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-4xl animate-fadeIn px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      {/* Navigate back to the search/results page */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition hover:text-green-700"
      >
        ← Back to results
      </Link>

      {/* Main recipe content card */}
      <section className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
        <img src={recipe.image} alt={recipe.title} className="h-72 w-full object-cover" />

        <div className="space-y-6 p-6 sm:p-8">
          {/* Recipe title + metadata */}
          <div>
            <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl">{recipe.title}</h1>
            <p className="mt-2 text-sm text-slate-500">
              Ready in {recipe.readyInMinutes ?? "N/A"} minutes • Servings {recipe.servings ?? "N/A"}
            </p>
          </div>

          {/* Ingredient list */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-brand-dark">Ingredients</h2>
            <ul className="space-y-2 text-slate-700">
              {recipe.extendedIngredients?.map((ing, index) => (
                <li
                  key={`${ing.id}-${index}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  {ing.original}
                </li>
              ))}
            </ul>
          </div>

          {/* HTML instructions from API */}
          <div>
            <h2 className="mb-3 text-xl font-semibold text-brand-dark">Instructions</h2>
            <div
              className="prose prose-slate max-w-none leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: recipe.instructions || "No instructions provided for this recipe.",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}