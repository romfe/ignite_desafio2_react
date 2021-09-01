import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface Props {
  selecionado: string,
  filmes: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[]
}

export function Content(props: Props) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selecionado}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.filmes.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}