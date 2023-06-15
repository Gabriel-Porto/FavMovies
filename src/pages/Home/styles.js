import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  grid-template-columns:
    "header"
    "content";

  > main {
    grid-area: content;
    margin: 45px 110px 50px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-top: 37px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    width: 200px;
    font-weight: 700;
  }
`
