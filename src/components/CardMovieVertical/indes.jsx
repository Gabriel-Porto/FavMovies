import { Container } from "./styles"
import { StarsRating } from "../StarsRating"

function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};

export function CardMovieVertical(props) {

  return (
    <Container>
      <img src={props.poster} alt={props.title + " poster"} />
      <h1>{truncate(props.title, 35)}</h1>
      <p>{props.year}</p>
    </Container>
  )
}