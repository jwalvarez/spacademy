import "./App.css";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { contador, incrementar, restar, resetear } = useCounter(0);

  return (
    <div className="App">
      <h1>Bienvenido a UserRandom</h1>
      <h2>Contador de usuarios</h2>
      <span>{contador}</span>
      <div className="button-group">
        <button onClick={() => incrementar(1)}>incrementar</button>
        <button onClick={() => resetear()}>resetear</button>
        <button onClick={() => restar(1)}>restar</button>
      </div>
    </div>
  );
}

export default App;
