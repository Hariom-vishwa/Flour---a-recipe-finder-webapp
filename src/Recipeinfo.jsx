import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Recipeinfo = () => {
  const {mealid} = useParams()
  const [mealRecipe, setMealRecipe] = useState()
  console.log(mealid);

  const getMealById = async () =>{
    const getMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    const mealJson = await getMeal.json()
    console.log(mealJson.meals[0])
    setMealRecipe(mealJson.meals[0])
  }

  if(mealid != ""){
    getMealById()
  }
  
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h1>{mealRecipe.strMeal} - Recipe Details</h1>
        <button></button>
      </div>
    </div>
  )
}

export default Recipeinfo