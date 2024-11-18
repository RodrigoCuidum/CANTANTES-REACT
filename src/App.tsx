import { useState } from "react";
import SizeSelector from "./components/SizeSelector";
import "./App.css";

function App() {
  const [currentCantante, setCurrentCantante] = useState("");
  return (
    <div className="App App-header">
      <h1>Cantante favorito: <br />
      { currentCantante }</h1>
      <SizeSelector 
        selectedCantante={ currentCantante }
        onCantanteChange={ setCurrentCantante }
      />
    </div>
  );
}

export default App;
