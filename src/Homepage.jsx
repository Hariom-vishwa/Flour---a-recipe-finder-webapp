import React, { useState } from 'react'
import './Homepage.css'
import Cards from './Cards'



export default function Homepage() {

  const [mealsData, setMealsData] = useState()
  const [searchVal, setSearchVal] = useState()

const handleInput = (e) => {
setSearchVal(e.target.value)
}

  // fetching API 

  const fetching = async () => {
    const gettingData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`)
    const getJsonData = await gettingData.json()
    setMealsData(getJsonData.meals)
  }

  return (
    <>
    <div className="navBar">
        <div className="logo">
            <h1>FLOUR</h1>
        </div>
        <div className="searchCont">
            <input type="text" placeholder='Enter your recipe name' onChange={handleInput}/>
            <button onClick={fetching}>Search</button>
        </div>
    </div>
    <Cards details={mealsData} />
    </>
  )
}
