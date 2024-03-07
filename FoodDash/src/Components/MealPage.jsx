import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DEFAULT_FLAG_URL = 'https://www.countryflags.io/unknown/flat/64.png';

export default function MealPage() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [flagURL, setFlagURL] = useState(DEFAULT_FLAG_URL); 

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const mealResponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setMeal(mealResponse.data.meals[0]); 
                if (mealResponse.data.meals[0]) {
                    const area = mealResponse.data.meals[0].strArea;
                    fetchFlag(area);
                }
            } catch (error) {
                console.log('Error fetching meal details:', error);
            }
        };

        const fetchFlag = async (area) => {
            try {
                
                const flagURL = `images/icons/flags/big/${area.toLowerCase()}.png`;
                setFlagURL(flagURL);
            } catch (error) {
                console.log('Error fetching flag:', error);
                setFlagURL(DEFAULT_FLAG_URL); 
            }
        };

        fetchMealDetails();
    }, [id]);

    return (
        <div className='MealPage'>
          
            {meal ? (
                <div className='mealContainer'>
                    <h3>{meal.strMeal}</h3><h4><img src={flagURL} alt='flag'/> {meal.strArea}</h4> 
                    <img className='imgSingle' src={meal.strMealThumb} alt={meal.strMeal} />
                    <div className='Ingredients'>
                    <h4>Ingredients with Measurements:</h4>
                        {Object.entries(meal)
                            .filter(([key, value]) => key.startsWith('strIngredient') && value !== '' && value !== null)
                            .map(([key, value]) => (
                                <li key={key}>
                                    <span>{value}</span>: <span>{meal[`strMeasure${key.split('strIngredient')[1]}`]}</span>
                                </li>
                            ))}
                    </div>
                    <p>Instructions: {meal.strInstructions}</p>
                   
                  
                   
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
