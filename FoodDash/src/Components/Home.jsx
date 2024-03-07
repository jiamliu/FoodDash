
import axios from "axios"
import { useEffect, useState ,useContext} from "react"
 import MealsList  from  './MealsList'
import MealPageText from './MealPageText'
import DataContext from "../DataContext"
import { Link } from "react-router-dom"
import ImageGallery from "./ImageGallery"


export default function Home() {


  const { searchQuery, setSearchQuery } = useContext(DataContext)

  useEffect(() => {
    console.log(searchQuery)
}, [searchQuery])



return(
  <>
       {!searchQuery && <ImageGallery />}
      {searchQuery && (
        <div className="container">
          <MealPageText />
       
        </div>
      )}
</>

)
}