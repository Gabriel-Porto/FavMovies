import { CardMovie } from "../CardMovie/indes";
import { Container } from "./styles";
import { CardMovieVertical } from "../CardMovieVertical/indes";

export function MovieList(props) {
    return (
        <Container>
            {props.movies.map((movie, index) => (
                <CardMovieVertical 
                    key={index} 
                    title={movie.Title} 
                    poster={movie.Poster} 
                    year={movie.Year}
                />
            ))}
        </Container>
    )
}