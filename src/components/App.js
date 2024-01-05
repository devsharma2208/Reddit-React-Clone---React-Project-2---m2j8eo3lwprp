import { useState } from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import Left_side_Bar from "./Left_side_Bar/Left_side_Bar";
import Login from "./Signup/Login/Login";
import { Route, Routes } from "react-router-dom";
import Create_Post from "./Create_Post/Create_Post";

function App() {
  const [lognIn, setLognIn] = useState(false);
  return (
    <div className="App">
      <Header setLognIn={setLognIn} />

      {lognIn && <Login setLognIn={setLognIn} />}
      <Routes>
        <Route path="/" element={<Left_side_Bar />} />
        <Route path="submit" element={<Create_Post />} />
      </Routes>
    </div>
  );
}

export default App;
