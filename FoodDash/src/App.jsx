import { useState , useEffect, useContext } from 'react'
import axios from 'axios'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import IngredientsList from './Components/IngredientsList'
import IngredientPage from './Components/IngredientPage'
import MealsList from './Components/MealsList'
import MealPage from './Components/MealPage'
import Contact from './Components/Contact'
import DataContext from './DataContext'

function App() {

const [searchQuery,setSearchQuery] = useState('')
const [inputValue, setInputValue] = useState('')
const [searchType,setSearchType] =useState('meal')

  return (
    <>
    <div className='Page'>
 
    <DataContext.Provider value ={{searchQuery,setSearchQuery,inputValue,setInputValue,searchType,setSearchType}}>
    <div className='Header'>
    
 <Header/>
    </div>
      <Routes>
          <Route exact path='/' element= {<Home/>}  />
          <Route exact path ='/ingredients' element={<IngredientsList/>}/>
          <Route exact path ='/ingredient/:id' element={<IngredientPage/>}/>
          <Route exact path ='/meals' element={<MealsList/>}/>
          <Route exact path ='/meals/:id' element={<MealPage/>}/>
          <Route exact path ='/Contact' element={<Contact/>}/>
      </Routes>
      </DataContext.Provider>
      </div>
      
    </>
  )
}

export default App
