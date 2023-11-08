// Import the necessary components and hooks
import React, { useState, useEffect, useCallback } from 'react';

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  // const loadMealIdeas = useCallback(async () => {
  //   const mealIdeas = await fetchMealIdeas(ingredient);
  //   setMeals(mealIdeas);
  // }, [ingredient]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals && meals.map((meal) => (
          <li key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Mark the parent component as a client component
MealIdeas.whyDidYouRender = true;

export default MealIdeas;
