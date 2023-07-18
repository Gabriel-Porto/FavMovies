import { Container } from "./styles"
import { ImStarFull } from "react-icons/im"
import { ImStarEmpty } from "react-icons/im"
import { ImStarHalf } from "react-icons/im"


export function StarsRating(rating) {

    const starRender = () => {
        let stars = []
        for (let i = 0;i < 5;i++) {
            if (i < Math.floor(rating)) {
                stars.push(<ImStarFull key={i} />)
            } else {
                if (rating % 1 >= .5) {
                    if (i === Math.floor(rating)) {
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
            {starRender()}
        </Container>
    )
}