import { Container, Title } from "../Home/styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { CardMovie } from "../../components/CardMovie/indes"

import { FiPlus } from "react-icons/fi"
// import { useEffect, useState } from "react"

export function Home() {

  const moviesMock = [
    {
      id: 1,
      title: "Interestellar",
      rating: 4.5,
      synopsis: `As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.`,
      genres: [
        { id: 1, name: "Ficção Científica" },
        { id: 2, name: "Drama" },
        { id: 3, name: "Família" }
      ]
    },
    {
      id: 2,
      title: "Baby Driver",
      rating: 3.9,
      synopsis: `O talentoso motorista de fuga Baby confia nas batidas de sua própria trilha sonora para ser o melhor que existe. A música silencia um zumbido que o perturba desde um acidente na infância. Após conhecer a mulher dos seus sonhos, ele reconhece uma oportunidade de se livrar do estilo de vida questionável e recomeçar do zero. Obrigado a trabalhar para um chefão do crime, Baby lida com a música ao mesmo tempo em que um golpe fadado ao fracasso ameaça sua vida, seu amor e sua liberdade.`,
      genres: [
        { id: 1, name: "Ficção Científica" },
        { id: 2, name: "Ação" },
        { id: 3, name: "Crime" }
      ]
    },
    {
      id: 3,
      title: "Eternos",
      rating: 2.2,
      synopsis: `Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.`,
      genres: [
        { id: 1, name: "Ficção Científica" },
        { id: 2, name: "Super herói" },
        { id: 3, name: "LGBTQIA+" }
      ]
    },
  ]

  return (
    <Container>
      <Header />
      <main>
        <Title>
          <h1>Meus Filmes</h1>
          <Button icon={FiPlus} title="Adicionar Filme" />
        </Title>

        <div className="cards">
          {moviesMock.map((movie) => (
            <CardMovie
              key={i}
              title={movie.title}
              rating={movie.rating}
              synopsis={movie.synopsis}
              genres={movie.genres}
            />
          ))}
        </div>
      </main>
    </Container>
  )
}
