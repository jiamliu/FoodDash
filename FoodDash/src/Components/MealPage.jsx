import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MealPage() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setMeal(response.data.meals[0]); // Use 'meals' instead of 'meal' for correct response key
            } catch (error) {
                console.log('Error fetching meal details:', error);
            }
        };

        fetchMealDetails();
    }, [id]);

    return (
        <div>
            <h2>Meal Page</h2>
            {meal ? (
                <div>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <p>{meal.strInstructions}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
