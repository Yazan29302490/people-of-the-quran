// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header.jsx";
import Main from "./Component/Main/Main.jsx";
import Robot from "./Component/Robot/Robot.jsx";
import Miscellaneous from "./Component/Miscellaneous/Miscellaneous.jsx";
import "./App.css";
import { useEffect } from "react";

function App() {
  // trigger dark mode on load
  useEffect(() => {
    const body = document.querySelector("body");
    const checkbox = document.getElementById("checkbox");

    const isDarkMode = JSON.parse(localStorage.getItem("darkMode")) === true;
    if (isDarkMode) {
      body.classList.add("active");
      checkbox.checked = true;
    } else {
      body.classList.remove("active");
      checkbox.checked = false;
    }
  }, []);

  return (
    <div className="App">
      <div className="co-header-main">
        <Header />
        <Main />
        <Robot />
      </div>
      <Miscellaneous />
    </div>
  );
}

export default App;
