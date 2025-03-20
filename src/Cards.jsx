import React from "react";

const Cards = ({ details }) => {
  console.log(details);
  return (
    <>
    <h1 className="dishesHeading">- Dishes -</h1>
    <div class="cards">
      {!details
        ? <h1 className="errorMessage">Dishes Not Found !!!</h1>
        : details.map((items) => {
            return (
              <div className="itemCard">
                <img src={items.strMealThumb} alt="" />
                <div className="itemCate">
                  <h1>{items.strMeal}</h1>
                  <p>{items.strCategory}</p>
                </div>
                <button className="recipeBtn">Recipe</button>
              </div>
            );
          })}
    </div>
    </>
  );
};

export default Cards;
