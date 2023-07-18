import styled from "styled-components"

export const Container = styled.div`
  grid-area: content;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column: auto;
  }


  gap: 2.4rem;

  margin-bottom: 6rem;

  padding: 3.2rem;
`
