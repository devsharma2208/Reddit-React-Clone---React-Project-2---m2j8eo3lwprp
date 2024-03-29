import { useState } from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import Left_side_Bar from "./Left_side_Bar/Left_side_Bar";
import Login from "./Signup/Login/Login";
import { Route, Routes } from "react-router-dom";
import Create_Post from "./Create_Post/Create_Post";
import Comments from "./Comments/Comments";
import Empty from "./Empty/Empty";
import Premimum from "./Premimum/Premimum";
import Community_Details from "./Create_Community_modal/Community_Details";
import ContextProvider from "./ContextApi/ContextProvider";

function App() {
  const [lognIn, setLognIn] = useState(false);
  return (
    <ContextProvider>
      <div className="App">
        <Header setLognIn={setLognIn} />

        {lognIn && <Login setLognIn={setLognIn} />}
        <Routes>
          <Route path="/" element={<Left_side_Bar setLognIn={setLognIn} />} />
          <Route path="submit" element={<Create_Post />} />
          <Route path="submit/:id" element={<Create_Post />} />
          <Route path="/comments/:name" element={<Comments />} />
          <Route path="/empty" element={<Empty />} />
          <Route path="/premimum" element={<Premimum />} />
          <Route path="/community/:id/:name" element={<Community_Details />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
