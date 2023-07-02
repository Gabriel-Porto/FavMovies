import { Container } from "./styles"
import { Tag } from "../Tag"
import { ImStarFull } from "react-icons/im"
import { ImStarEmpty } from "react-icons/im"
import { ImStarHalf } from "react-icons/im"


export function CardMovie(props) {
  console.log(props.rating)

  const starRender = () => {
    let stars = []
    for (let i = 0;i < 5;i++) {
      if (i < Math.floor(props.rating)) {
        stars.push(<ImStarFull key={i} />)
      } else {
        if (props.rating % 1 >= .5) {
          if (i === Math.floor(props.rating)) {
            stars.push(<ImStarHalf key={i} />)
          } else {
            stars.push(<ImStarEmpty key={i} />)
          }
        } else {
          stars.push(<ImStarEmpty key={i} />)
        }
      }
    }

    return stars
  }

  return (
    <Container>
      <h1>{props.title}</h1>
      <div className="score">
        {starRender()}
      </div>
      <p>{props.synopsis}</p>
      <div className="tags">
        {props.genres.map((genre) => (<Tag key={genre.id} name={genre.name} />))}
      </div>
    </Container>
  )
}