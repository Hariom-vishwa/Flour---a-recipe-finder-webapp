import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import "./Homepage.css";

const Recipeinfo = () => {
  const { mealid } = useParams();
  const [mealRecipe, setMealRecipe] = useState();
  console.log(mealid);

  const getMealById = async () => {
    const getMeal = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const mealJson = await getMeal.json();
    console.log(mealJson.meals[0]);
    setMealRecipe(mealJson.meals[0]);
  };

  if (mealid != "") {
    getMealById();
  }


  // Logo styling 

  const logoStyle = {
    color: "var(--pri-col)",
  } 

  return (
    <>
      {!mealRecipe ? (
        "Data Not Found"
      ) : (
        <>
          <div className="logo">
            <h1 style={logoStyle}>Flour</h1>
          </div>
          <div className="recipeCont">
            <img src={mealRecipe.strMealThumb} alt="" />
            <div className="recipeDets">
              <div className="headingsButton">
                <h1>Recipe Details</h1>
                <button className="recipeBtn">{mealRecipe.strMeal}</button>
                <h3>Instructions</h3>
              </div>
              <p>{mealRecipe.strInstructions}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Recipeinfo;
