import './App.css';
import React from "react";
import { BrowserRouter , Route } from "react-router-dom";
import  SignIn from "./components/pages/SignIn";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import DefaultPage from "./components/pages/DefaultPage";
import Recipes from "./components/pages/Recipes";
import RecipeDetails from "./components/pages/RecipeDetails";
import { useState } from "react";

function App() {
  const [setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <BrowserRouter>
      <div className="App">
        <div className="route">
          <Route>
            <Navbar>
            <Route
              exact
              path="/"
              element={<SignIn setIsAuth={setIsAuth} />}
            ></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/recipes" element={<Recipes />}></Route>
            <Route exact path="/recipes/:recipe_id" element={<RecipeDetails />}></Route>
            <Route element={DefaultPage} />
            </Navbar>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
