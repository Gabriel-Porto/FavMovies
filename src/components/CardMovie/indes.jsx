import { Container } from "./styles"
import { Tag } from "../Tag"

export function CardMovie(props) {
  return (
    <Container>
      <h1>{props.title}</h1>
      {/* <div className="score">{props.imdbrating}</div> */}
      <p>{props.synopsis}</p>
      <div className="tags">
        <Tag name="Ficção Cientifica" />
        <Tag name="Drama" />
        <Tag name="Família" />
      </div>
    </Container>
  )
}
