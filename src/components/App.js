import { useState } from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import Left_side_Bar from "./Left_side_Bar/Left_side_Bar";
import Login from "./Signup/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  const [lognIn, setLognIn] = useState(false);
  return (
    <div className="App">
      <Header setLognIn={setLognIn} />
      <Left_side_Bar />
      {lognIn && <Login setLognIn={setLognIn} />}
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
