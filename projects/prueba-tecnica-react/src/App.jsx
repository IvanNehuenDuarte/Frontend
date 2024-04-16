import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT) // El fetch devuelve una promesa
      .then((res) => res.json()) // Concateno promesa, res,json me deuvelve una promesa
      .then((data) => setFact(data.fact)); // Concateno promesa
  }, []); 
        // Si no estuviera el "[]" cada vez que se renderiza el componente, se ejecuta el efecto.
        // Con el "[]" se ejecuta 1 vez.
        // Con "[setFact]"  sería la primera vez que se renderiza el componente y cada vez que el valor de setFact cambia.

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}
