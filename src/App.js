import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SigIn";
import Home from "./Pages/Home";
import AddRecipe from "./Pages/Addrecipe";
import AddedRecipes from "./Pages/Addedrecipes";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<SignIn />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/addrecipe" element={<AddRecipe />}></Route>
            <Route exact path="/addedrecipe" element={<AddedRecipes />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
