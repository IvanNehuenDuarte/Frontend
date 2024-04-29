// El fetch devuelve una promesa
// Concateno promesa, res,json me deuvelve una promesa

//         // Si no estuviera el "[]" cada vez que se renderiza el componente, se ejecuta el efecto.
//         // Con el "[]" se ejecuta 1 vez.
//         // Con "[setFact]"  sería la primera vez que se renderiza el componente y cada vez que el valor de setFact cambia.

//     // Hay 2 formas de buscar 1 o más palabras, una es la que está puesta, solo cambio el 1 por otro numero y me da más palabras, la otras es con fact.split(' ').slice(0, 3).join(' ') el join es porque son 3 palabras.

import './App.css'
import { useCatImage } from './hooks/useCatImages.js'
import { useCatFact } from "./hooks/useCatFact.js";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
}