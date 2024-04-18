import responseMovies from "../mocks/whit-results.json";
import withoutResults from "../mocks/whit-results.json";

export function useMovies() {
    const movies = responseMovies.Search;
  
    const mappetMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  
    return { movies: mappetMovies };
  }