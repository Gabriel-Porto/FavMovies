import { Container } from "./style"
import { Input } from "../Input"

export function Header() {

  const handleReponsiviseness = () => {
    const profileSection = document.querySelector(".title")
    profileSection.classList.toggle("displayNone")
  }

  return (
    <Container>
      <h1 className="title">FavMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <div className="profileSection">
        <div className="profileName">
          <h4>Gabriel Porto</h4>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/gabriel-porto.png" alt="foto do perfil" />
      </div>
    </Container>
  )
}
