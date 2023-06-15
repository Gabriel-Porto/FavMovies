import { Container, Title } from "../Home/styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { CardMovie } from "../../components/CardMovie/indes"

import { FiPlus } from "react-icons/fi"

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Title>
          <h1>Meus Filmes</h1>
          <Button icon={FiPlus} title="Adicionar Filme" />
        </Title>

        <div className="cards">
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </div>
      </main>
    </Container>
  )
}
