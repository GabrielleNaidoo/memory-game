import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import PlayerModal from "./components/PlayerModal";
import "./styles/App.css";

function App() {
  return (
    <>
      <PlayerModal />
    </>

    // <Routes>
    //   <Route path="/game" element={/*loop through and then display all the cards here */ }></Route>
    // </Routes>
  );
}

export default App;
