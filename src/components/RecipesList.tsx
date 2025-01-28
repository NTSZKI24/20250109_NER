
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface Recipe {
    id: number;
    title: string;
    description: string;
  }
  
  export interface RecipeResponse {
    recipes: Recipe[];
  }


const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes');
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error('Error fetching the recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;