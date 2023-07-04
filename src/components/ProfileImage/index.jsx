import { Container } from "./styles";
import { FiCamera } from "react-icons/fi";
import { Button } from "../Button";

export function ProfileImage() {
    return (
        <Container>
            <img src="https://github.com/gabriel-porto.png" alt="" />

            <Button icon={FiCamera} />
        </Container>
    )
}