// MealsList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=') // Example API endpoint
        setMeals(response.data.meals);
      } catch (error) {
        console.log('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <h2>Meals List</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            <Link to={`/meals/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <span>{meal.strMeal}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
