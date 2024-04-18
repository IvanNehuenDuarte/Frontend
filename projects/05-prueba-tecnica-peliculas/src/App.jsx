import "./App.css";
import { useMovies } from './hooks/useMovies'
import { Movies } from "./components/Movies";

function App() {
    const { movies } = useMovies()

  return (
    <div className="page">

      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input type="text" placeholder="Avenger, Star Wars, Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={ movies } />
      </main>
    </div>
  );
}

export default App;
