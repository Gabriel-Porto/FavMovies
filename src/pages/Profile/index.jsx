import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { ProfileImage } from "../../components/ProfileImage";

export function Profile() {
    return (
        <Container>
            <ButtonText title="Voltar" icon />
            <main>

                <ProfileImage />

                <Form>
                    <div className="formSection">
                        <Input type="text" placeholder="Nome" />
                        <Input type="email" placeholder="E-mail" />
                    </div>

                    <div className="formSection">
                        <Input type="password" placeholder="Senha" />
                        <Input type="password" placeholder="Confirmar Senha" />
                    </div>

                    <Button title="Salvar" disabled />

                </Form>
            </main>
        </Container>
    )
}