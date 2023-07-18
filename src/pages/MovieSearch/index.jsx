import { Container } from "./styles";
import { Header } from "../../components/Header";
import { MovieList } from "../../components/MovieList";

import { useEffect, useState } from "react"


export function MovieSearch() {

    const [movies, setMovies] = useState([])

    const fetchMovies = () => {
        fetch(`http://www.omdbapi.com/?s=star wars&apikey=263d22d8`)
            .then((response) => response.json())
            .then((data) => setMovies(data.Search))
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <Container>
            <Header />
            <MovieList movies={movies} />
        </Container>
    )
}