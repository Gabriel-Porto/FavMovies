import { Container } from "./style"

export function Button({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <Container 
        type="button" 
        icon={Icon}
        disabled={loading}
        {...rest}
    >
      {Icon ? <Icon size={20} /> : null}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
