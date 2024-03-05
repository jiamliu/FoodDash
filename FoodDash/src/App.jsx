import { useState , useEffect, useContext } from 'react'
import axios from 'axios'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import DataContext from './DataContext'
import Header from './Components/Header'
import Home from './Components/Home'
import IngredientsList from './Components/IngredientsList'
import IngredientPage from './Components/IngredientPage'
import MealsList from './Components/MealsList'
import MealPage from './Components/MealPage'


function App() {
 
  return (
    <>
    <div className='Page'>
    <div className='Header'>
 <Header/>
    </div>
      <Routes>
          <Route exact path='/' element= {<Home/>}  />
          <Route exact path ='/Ingredients' element={<IngredientsList/>}/>
          <Route exact path ='/Ingredient/:id' element={<IngredientPage/>}/>
          <Route exact path ='/Meals' element={<MealsList/>}/>
          <Route exact path ='/Meals/:id' element={<MealPage/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
