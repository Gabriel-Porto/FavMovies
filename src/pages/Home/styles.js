import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  grid-template-columns:
    "header"
    "content";

  > main {
    grid-area: content;
    margin: 4.5rem 11rem 5rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    
    margin-top: 2.34rem;
    padding-bottom: 6rem;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > button {
    width: 20rem;
    font-weight: 700;
  }
`
