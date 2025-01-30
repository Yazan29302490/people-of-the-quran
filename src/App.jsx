// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import Main from "./Component/Main/Main.jsx";
import Robot from "./Component/Robot/Robot.jsx";
import Miscellaneous from "./Component/Miscellaneous/Miscellaneous.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="co-header-main">
        <div className="background">
          <div className="glow g-1"></div>
          <div className="glow g-2"></div>
          <div className="glow g-3"></div>
        </div>
        <Header></Header>
        <Main></Main>
        <Robot></Robot>
        <Miscellaneous></Miscellaneous>
      </div>
    </div>
  )
}

export default App
