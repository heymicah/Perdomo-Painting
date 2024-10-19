import './App.css';
import logo from "./images/Perdomo's Painting-A1.png";

function App() {
  return (
    <div className="App">
      <header className="image-header">
        <div className="logo-container">
          <img src={logo} alt="Perdomo's Painting Logo" className="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
