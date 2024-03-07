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
        <>
      
        <h2 className="titleingr">Ingredients List </h2>
        <div className="inglist">
          
           
                {ingredients.map(ingredient => (
                <div key={ingredient.idIngredient}>
                    <Link to={`/ingredient/${ingredient.idIngredient}`}>
                    <h3>{ingredient.strIngredient}</h3>
                    </Link>
                </div>
            ))}
          
        </div> 
        </>     
    )
}