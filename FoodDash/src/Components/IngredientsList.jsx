import axios from "axios"
import { useEffect, useState } from "react"





export default function IngredientsList() {
  const [ ingredients,setIngredients ]= useState([])
    useEffect (()=>{
        const getIngredients = async () => {
            try{
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
                console.log(response)
                setIngredients(response.data.meals)
                // console.log(response)
            } catch (error){
                console.log('error fetching data', error)
            }
        }
        getIngredients()
    },[])

    return(

      <div className="Home">
        <h1>HOME </h1>
       

</div>




    
       
    )
}