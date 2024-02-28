import { useState } from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import Left_side_Bar from "./Left_side_Bar/Left_side_Bar";
import Login from "./Signup/Login/Login";
import { Route, Routes } from "react-router-dom";
import Create_Post from "./Create_Post/Create_Post";
import Comments from "./Comments/Comments";
import Empty from "./Empty/Empty";

function App() {
  const [lognIn, setLognIn] = useState(false);
  return (
    <div className="App">
      <Header setLognIn={setLognIn} />

      {lognIn && <Login setLognIn={setLognIn} />}
      <Routes>
        <Route path="/" element={<Left_side_Bar setLognIn={setLognIn} />} />
        <Route path="submit" element={<Create_Post />} />
        <Route path="/comments/:name" element={<Comments />} />
        <Route path="/empty" element={<Empty />} />
      </Routes>
    </div>
  );
}

export default App;
