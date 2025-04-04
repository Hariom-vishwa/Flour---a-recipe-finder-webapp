import React from "react";
import { NavLink } from "react-router-dom";
import Error from './Error'

const Cards = ({ details }) => {
  console.log(details);
  return (
    <>
    <h1 className="dishesHeading">- Dishes -</h1>
    <div class="cards">
      {!details
        ? <div>
          <Error/>
        </div>
        : details.map((items) => {
            return (
              <div className="itemCard">
                <img src={items.strMealThumb} alt={items.strMeal} />
                <div className="itemCate">
                  <h1>{items.strMeal}</h1>
                  <p>{items.strCategory}</p>
                </div>
                <NavLink to={`/${items.idMeal}`}>
                <button className="recipeBtn">Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
    </>
  );
};

export default Cards;
