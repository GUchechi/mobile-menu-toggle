import { useState } from 'react';
import './App.css';

function App() {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  return (
    <div className="hero">
      <nav>
        <div className={(hiddenMenu ? "hidden" : "") + " menu"}>
          <a href="#/">Home</a>
          <a href="#/">Projects</a>
          <a href="#/">Contact</a>
        </div>
        <span onClick={() => setHiddenMenu(!hiddenMenu)}>
          {hiddenMenu ? "|||" : "X"}
        </span>
      </nav>
    </div>
  )
}

export default App;
