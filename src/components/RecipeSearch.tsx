
import React, { useState } from 'react';
import axios from 'axios';

export interface Recipe {
    id: number;
    title: string;
    description: string;
  }
  
  export interface RecipeResponse {
    recipes: Recipe[];
  }



const RecipeSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`);
      setResults(response.data.recipes);
    } catch (error) {
      console.error('Error searching for recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Recipes</h1>
      <input 
        type="text" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search for a recipe..."
      />
      <button onClick={searchRecipes}>Search</button>
      {loading ? <p>Loading...</p> : (
        <ul>
          {results.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeSearch;