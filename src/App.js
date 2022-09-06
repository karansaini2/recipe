import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SigIn";
import Home from "./Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<SignIn />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
