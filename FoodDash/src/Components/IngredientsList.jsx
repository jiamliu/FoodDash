import axios from "axios"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"


export default function IngredientsList() {
  const [ ingredients,setIngredients ]= useState([])
    useEffect (()=>{
        const getIngredients = async () => {
            try{
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
                //console.log(response)
                setIngredients(response.data.meals)
                console.log(ingredients)
            } catch (error){
                console.log('error fetching data', error)
            }
        }
        getIngredients()
    },[])

    return(
        <div>
            <h2>Ingredients List </h2>
            <ul>
                {ingredients.map(ingredient => (
                <li key={ingredient.idIngredient}>
                    <Link to={`/ingredient/${ingredient.idIngredient}`}>
                    <span>{ingredient.strIngredient}</span>
                    </Link>
                </li>
            ))}
            </ul>
        </div>      
    )
}