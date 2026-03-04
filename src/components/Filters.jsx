// Dietary filter selector.
// Lets users include/exclude diet tags that are used during recipe search.
export default function Filters({ filters, setFilters }) {
  // Supported diet filter options shown as checkboxes.
  const options = ["vegan", "vegetarian", "gluten free", "dairy free"];

  // Add a filter if missing, or remove it if already selected.
  const toggleFilter = (filter) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Dietary filters section header.
  return (
    <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
        Dietary Filters
      </h2>
{/* // Checkbox list of filter options. */}
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
          >
            <input
              type="checkbox"
              checked={filters.includes(opt)}
              onChange={() => toggleFilter(opt)}
              className="w-4 h-4 accent-brand-green"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}