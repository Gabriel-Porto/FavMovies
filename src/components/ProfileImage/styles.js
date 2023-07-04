import styled from "styled-components"

export const Container = styled.div`
  position: relative;
    
  width: 18.6rem;
  height: 18.6rem;

  margin-top: 5.1rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
  }

  > button {
    width: 4.8rem;
    min-height: 4.8rem;

    position: absolute;
    right: 0;
    bottom: 0;

    border: none;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.GOLD};
}
`
