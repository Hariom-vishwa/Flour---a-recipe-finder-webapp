import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Recipeinfo from "./Recipeinfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:mealid" element={<Recipeinfo />} />
      </Routes>
    </>
  );
}

export default App;
