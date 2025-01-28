import Header from "./Component/Header/Header.jsx";
import Main from "./Component/Main/Main.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="co-header-main">
        <div className="background">
          <div className="glow g-1"></div>
          <div className="glow g-2"></div>
        </div>
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  )
}

export default App
