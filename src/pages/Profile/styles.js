import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > a {
    position: absolute;
    top: 6.4rem;
    left: 14.4rem;
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.4rem;
  }

  &::before {
    content: "";
    width: 100%;
    height: 14.4rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${({ theme }) => theme.COLORS.GOLD_SECONDARY};
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .formSection {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`
