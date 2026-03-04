## Recipe Finder App

A fast, modern recipe search application built with React, Vite, TailwindCSS, React Router, and the Spoonacular API.

![Last Commit](https://img.shields.io/github/last-commit/belloblj/get-recipe?color=brightgreen)
![Repo Size](https://img.shields.io/github/repo-size/belloblj/get-recipe)
![Issues](https://img.shields.io/github/issues/belloblj/get-recipe)
![License](https://img.shields.io/github/license/belloblj/get-recipe)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)

## Overview
Recipe Finder allows users to search for recipes, apply dietary filters, and view detailed recipe pages with ingredients and instructions. The UI is fully responsive, animated, and built with a clean two‑column layout.

### Features
-  Search recipes using the Spoonacular API
-  Dietary filters (vegan, vegetarian, gluten‑free, dairy‑free)
-  Recipe details page with ingredients + instructions
-  Modern UI using TailwindCSS
-  Smooth animations with Framer Motion
-  Fast development powered by Vite
-  Fully responsive layout

### Tech Stack
<img width="697" height="328" alt="image" src="https://github.com/user-attachments/assets/89e01168-131c-42c7-bd1b-610b3f4bedf7" />


## Project Structure
```
|-- public/
|   |-- tab-icon.ico
|   `-- vite.svg
|-- src/
|   |-- api/
|   |   `-- recipes.js
|   |-- assets/
|   |   `-- react.svg
|   |-- components/
|   |   |-- Filters.jsx
|   |   |-- RecipeCard.jsx
|   |   |-- RecipeDetails.jsx
|   |   |-- RecipeList.jsx
|   |   `-- SearchBar.jsx
|   |-- pages/
|   |   |-- Home.jsx
|   |   `-- RecipePage.jsx
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
```


## Installation & Setup
1. Clone the repository
```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies
```
npm install
```

3. Add your Spoonacular API key
Create a .env file:
```
VITE_SPOONACULAR_KEY=your_api_key_here
```

5. Start the development server
```
npm run dev
```


## UI Preview
#### Home Page
- Search bar
- Filters
- Recipe grid
#### Recipe Details Page
- Full recipe image
- Ingredients list
- Instructions (HTML or step‑based)

### Tailwind Theme
Includes:
- Brand color palette
- Card shadows
- Fade‑in + slide‑up animations
- Inter font family

### API Endpoints Used
- GET /recipes/complexSearch
- GET /recipes/{id}/information

## Build for Production
```
npm run build
```


## Known Issues
- Some recipes do not include instructions; the app falls back to analyzedInstructions.
- API rate limits may apply depending on your Spoonacular plan.
