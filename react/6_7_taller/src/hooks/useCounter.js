import { useState } from "react";

export const useCounter = (init) => {
  const [contador, setContador] = useState(init);

  const incrementar = (factor) => {
    setContador(contador + factor);
  };

  const restar = (factor) => {
    setContador(contador - factor);
  };

  const resetear = () => {
    setContador(0);
  };

  return {
    contador,
    incrementar,
    resetear,
    restar,
  };
};
