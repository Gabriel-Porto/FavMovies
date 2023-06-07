import { Container } from "./style"
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"

export function Input({ type, placeholder, ...rest }) {
  return (
    <Container {...rest}>
      {type === "email" && <FiMail size={20} />}
      {type === "password" && <FiLock size={20} />}
      {type === "text" && <FiLogIn size={20} />}
      <input type={type} placeholder={placeholder} />
    </Container>
  )
}
