import { Container, Title } from "../Home/styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { CardMovie } from "../../components/CardMovie/indes"

import { FiPlus } from "react-icons/fi"
import { useEffect, useState } from "react"

export function Home() {
  const [movies, setMovies] = useState([])

  const fetchMovies = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => response.json())
      .then((data) => setMovies(data))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <Title>
          <h1>Meus Filmes</h1>
          <Button icon={FiPlus} title="Adicionar Filme" />
        </Title>

        <div className="cards">
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              title={movie.title}
              synopsis={movie.Description}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}
