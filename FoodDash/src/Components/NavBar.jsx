import { Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import DataContext from '../DataContext'

export default function NavBar() {

const { searchQuery, setSearchQuery } = useContext(DataContext)

const {inputValue,setInputValue} = useContext(DataContext)
const {searchType,setSearchType} = useContext(DataContext)

    const handleChange = (e) => {
        setInputValue(e.target.value)
       
    }

    const handleSubmit = () => {
        setSearchQuery(inputValue)
      
    }
    const handleSelectChange = (e) => {
        setSearchType(e.target.value)
        console.log(searchType)
    }

    useEffect(() => {
        console.log(searchQuery)
        console.log(searchType)
    }, [searchQuery,searchType])

    const clearSearchQuery = () => {
        setSearchQuery('')
        setInputValue('')
     
    }

    return (
        <>
          
            <div className="LinksContainer">
                <Link to="/" onClick={clearSearchQuery}>Home</Link>
                <Link to="/Meals" onClick={clearSearchQuery}>Meals</Link>
                <Link to="/Ingredients" onClick={clearSearchQuery}>Ingredients</Link>
                <Link to="/Contact" onClick={clearSearchQuery}>Contact Us</Link>
            </div>
            <div className="searchContainer"> 
            <select id="selectMenu" value={searchType} onChange={handleSelectChange} >
                <option value="meal" > Meal</option>
                 <option value="category" > Category</option>
             </select>
            <input type="text" id="SearchBar" placeholder='Search ' value={inputValue} onChange={handleChange} />
            <button type="button" onClick={handleSubmit}>Search</button>
            </div>
        </>
    )
}
