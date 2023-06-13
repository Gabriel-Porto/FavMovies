import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>FavMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <div className="inputs">
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
        </div>
        <Button title="Entrar" />

        <a href="#">Criar Conta</a>
      </Form>

      <Background />

    </Container>
  )
}
