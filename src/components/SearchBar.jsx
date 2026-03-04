import { useState } from "react";
import { fetchRecipes } from "../api/recipes";

// Search input + button component.
// Sends search query and selected filters to API helper, then stores results in parent state.
export default function SearchBar({ setRecipes, filters }) {
  // Local state for the text entered by the user.
  const [query, setQuery] = useState("");

  // Triggered when user clicks Search.
  const handleSearch = async () => {
    // Prevent empty searches.
    if (!query.trim()) return;

    // Fetch recipes and push them to parent state.
    const results = await fetchRecipes(query, filters);
    setRecipes(results);
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-brand-green focus:ring-2 focus:ring-emerald-200"
      />
    {/* // Search button triggers the API call with the current query and filters. Also color changes on hover*/}
      <button
        onClick={handleSearch}
        className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow transition hover:bg-emerald-700 active:scale-[0.98]"
      >
        Search
      </button>

      <p className="text-xs text-slate-500">Tip: Try terms like chicken, pasta, or salad.</p>
    </div>
  );
}