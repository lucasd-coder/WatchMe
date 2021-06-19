
import "../styles/content.scss";
import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  title: string;
  subtitle: string;
  component: MovieProps[];
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">{props.title}<span>{props.subtitle}</span></span>        
      </header>
      <main>
          <div className="movies-list">
            {props.component.map(movie => (
              <MovieCard 
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
      </main>
    </div>
  )
}