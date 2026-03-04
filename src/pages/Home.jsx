import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import RecipeList from "../components/RecipeList";

// Home page: contains the search/filter controls and the recipe results list.
export default function Home({ recipes, setRecipes, filters, setFilters }) {
	return (
		<main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
			{/* Intro banner */}
			<section className="mb-8 rounded-2xl border border-emerald-100 bg-white/80 p-6 shadow-card backdrop-blur sm:p-8">
				<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-green">
					Discover your next meal
				</p>
				<h1 className="font-heading text-3xl font-bold text-brand-dark sm:text-4xl">
					Recipe Finder
				</h1>
				<p className="mt-3 max-w-2xl text-slate-600">
					Search by keyword, apply dietary preferences, and explore complete
					recipe instructions in seconds.
				</p>
			</section>

			{/* Main two-column layout: controls (left) and results (right) */}
			<section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{/* Sidebar with search + dietary filters */}
				<aside className="space-y-6 lg:sticky lg:top-6 lg:h-fit">
					<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
						<h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-700">
							Search
						</h2>
						{/* Sends results back to App state */}
						<SearchBar setRecipes={setRecipes} filters={filters} />
					</div>

					{/* Updates the selected dietary filters in App state */}
					<Filters filters={filters} setFilters={setFilters} />
				</aside>

				{/* Results area */}
				<div className="lg:col-span-2">
					<div className="mb-4 flex items-center justify-between">
						<h2 className="text-xl font-semibold text-brand-dark">Results</h2>
						{/* Live count of currently displayed recipes */}
						<span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
							{recipes.length} found
						</span>
					</div>

					{/* Recipe cards grid or empty state */}
					<RecipeList recipes={recipes} />
				</div>
			</section>
		</main>
	);
}
