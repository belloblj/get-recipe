import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

// Single recipe preview card shown in the search results grid.
export default function RecipeCard({ recipe }) {
  return (
    // Entry animation for smoother card appearance.
    <Motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card links to the recipe detail route */}
      <Link
        to={`/recipe/${recipe.id}`}
        className="block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          {/* Recipe title */}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-brand-dark">
            {recipe.title}
          </h3>

          {/* Estimated ready time */}
          <p className="mb-3 text-sm text-slate-500">
            ⏱ {recipe.readyInMinutes} mins
          </p>

          {/* Short summary preview (API returns HTML) */}
          <p
            className="text-sm leading-relaxed text-slate-600"
            dangerouslySetInnerHTML={{
              __html: recipe.summary.slice(0, 120) + "...",
            }}
          />
        </div>
      </Link>
    </Motion.div>
  );
}