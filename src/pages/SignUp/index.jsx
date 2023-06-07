import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft } from "react-icons/fi"


export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>FavMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua Conta</h2>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Button title="Entrar" />

        
        <ButtonText title="Voltar para o login" icon />
      </Form>

      <Background />

    </Container>
  )
}
