import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function IngredientPage() {
  const { id } = useParams()
  const [ingredient, setIngredient] = useState(null)

  useEffect(() => {
      const fetchIngredientDetails = async () => {
          try {
            console.log(id)
              const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
              const filteredIngredient = response.data.meals.find(item => item.idIngredient === id)
              if (filteredIngredient) {
                setIngredient(filteredIngredient)
              } else {
                console.log('Ingredient not found.')
              }
          } catch (error) {
              console.log('Error fetching ingredient details:', error)
          }
      }

      fetchIngredientDetails()
  }, [id])

  return (
      <div className='IngrdDeatails'>
          <Link className= ' link' to="/Ingredients" >Back</Link>
          {ingredient ? (
            <div>
              <h2 className='ingrName'>Name: {ingredient.strIngredient}</h2>
              <p>Description: {ingredient.strDescription}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
      </div>
  )
}
