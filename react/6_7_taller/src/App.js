import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const resetear = () => {
    setContador(0);
  };

  return (
    <div className="App">
      <h1>Bienvenido a UserRandom</h1>
      <h2>Contador de usuarios</h2>
      <span>{contador}</span>
      <div className="button-group">
        <button onClick={incrementar}>incrementar</button>
        <button onClick={resetear}>resetear</button>
        <button onClick={restar}>restar</button>
      </div>
    </div>
  );
}

export default App;
