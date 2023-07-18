import { Container } from "./styles"
import { StarsRating } from "../StarsRating"



export function CardMovie(props) {

  return (
    <Container>
      <h1>{props.title}</h1>
      <StarsRating rating={props.imdbRating / 2}/>
      <p>{props.synopsis}</p>
      {/* <div className="tags">
        {props.genres.map((genre) => (<Tag key={genre.id} name={genre.name} />))}
      </div> */}
    </Container>
  )
}