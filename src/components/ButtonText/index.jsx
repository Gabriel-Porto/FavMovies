import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function ButtonText({ title, icon, ...rest }) {
  return <Container {...rest}>{icon ? <FiArrowLeft size={20}/> : ""}{title}</Container>;
}