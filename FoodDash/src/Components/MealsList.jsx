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
    <div className='MealPage'>
      <div className='MealsContainer'>
        {meals.map(meal => (
          <div className ="mealsContainer" key={meal.idMeal}>
            <Link to={`/meals/${meal.idMeal}`}>
            <h2>{meal.strMeal}</h2>
              <img className= 'imggroup' src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>
          </div>
        ))}
        </div>
    
    </div>
  );
};

export default MealsList;
