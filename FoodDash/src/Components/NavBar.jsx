import { Link } from "react-router-dom"


export default function NavBar () {



    return (
        <>
        <h2>Nav Bar </h2>
        <div className="LinksContainer">
        <Link to="/">Home</Link>
        <Link to ="/Meals">Meals</Link>
        <Link to='/Ingredients'>Ingredients</Link>
        <Link to ='/Contact'>Contact Us</Link>
        </div>
       <input type="text"  id="SearchBar" />  
        <button type="button" >Search</button>
        </>
    )
}