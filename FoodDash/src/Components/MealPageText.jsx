import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DataContext from '../DataContext'

export default function MealPage() {
  const { searchQuery, setSearchQuery } = useContext(DataContext)
  const { searchType,setSearchType } = useContext(DataContext)
  const [meal, setMeal] = useState(null)
const [meals,setMeals] = useState([])
console.log(searchType)

useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        let response
        if (searchType === 'meal') {
          response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
          setMeal(response.data.meals[0] || [])
          console.log('meal', response)
        } else if (searchType === 'category') {
          response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchQuery}`)
          setMeals(response.data.meals || [])
          console.log('this is meals', response)
        }
      } catch (error) {
        console.log('Error fetching meal details:', error)
      }
    }

    if (searchQuery) {
      fetchMealDetails()
    }
  }, [searchQuery, searchType])

  const clearSearchQuery = () => {
    setSearchQuery('')
    setSearchType('')
  }

  return (
    <div className='MealPage'>
    
     
      {meal ? (
        <div className='mealContainer'>
            <Link className= ' link' to="/" onClick={clearSearchQuery}>Home</Link>
          <h3>{meal.strMeal}</h3>
          <img className='imgSingle' src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
         
        </div>
      ) : (
        <div className='MealsContainer'>
          {meals.map((meal, index) => (
            <div className='mealsContainer' key={index}>
              <Link to={`/meals/${meal.idMeal}`}>
              <h2>{meal.strMeal}</h2>
              <img className= 'imggroup' src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}