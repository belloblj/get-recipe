// Read API key from Vite environment variables.
const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

// Fetch recipes by search text and optional dietary filters.
export async function fetchRecipes(query, filters) {
  // Fail early if .env key is missing.
  if (!API_KEY) {
    throw new Error("Missing VITE_SPOONACULAR_KEY. Add it to your .env file.");
  }

  // Convert selected filters into Spoonacular diet query format.
  const dietQuery = filters.length > 0 ? `&diet=${filters.join(",")}` : "";

  // Encode user input so spaces/special characters are URL-safe.
  const safeQuery = encodeURIComponent(query.trim());

  // Build search endpoint with recipe details included.
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${safeQuery}&number=12&addRecipeInformation=true${dietQuery}`;

  // Execute request and parse JSON response.
  const response = await fetch(url);
  const data = await response.json();

  // Return only the results array used by the UI.
  return data.results || [];
}
