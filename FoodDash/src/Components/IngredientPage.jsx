import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function IngredientPage() {
  const { id } = useParams()
  const [ingredient, setIngredient] = useState(null)

  useEffect(() => {
      const fetchIngredientDetails = async () => {
          try {
            console.log(id)
              const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list${id}`)
              setIngredient(response.data.meals[0])
          } catch (error) {
              console.log('Error fetching ingredient details:', error)
          }
      }

      fetchIngredientDetails()
  }, [id])

  return (
      <div>
          <h2>Ingredient Page</h2>
          {ingredient ? (
            <div>
              <p>Name: {ingredient.strIngredient}</p>
              <p>Description: {ingredient.strDescription}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
      </div>
  )
}