import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecipePage from "./pages/RecipePage";

// Root app component.
// Holds shared state (recipes + selected filters) and route definitions.
export default function App() {
  // Recipes returned by the API search.
  const [recipes, setRecipes] = useState([]);

  // Dietary filters selected in the sidebar.
  const [filters, setFilters] = useState([]);

  return (
    // Global page background shell.
    <div className="min-h-screen bg-linear-to-b from-brand-light via-white to-emerald-50">
      <Routes>

        {/* Home route: search/filter UI + recipe grid */}
        <Route
          path="/"
          element={
            <Home
              recipes={recipes}
              setRecipes={setRecipes}
              filters={filters}
              setFilters={setFilters}
            />
          }
        />

        {/* Details route: single recipe view */}
        <Route path="/recipe/:id" element={<RecipePage />} />

      </Routes>
    </div>
  );
}