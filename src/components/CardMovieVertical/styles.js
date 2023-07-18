import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  display: flex;
  flex-direction: column;
  
  gap: 1.5rem;

  max-height: 55rem;

  padding: 3.2rem;

  border-radius: 3rem;

  > h1 {
    font-size: 2rem;
  }

  > img {
    align-self: center;
    width: 80%;
    height: 25rem;
  }

  > p {
    color: var(--gray, #999591);
    font-family: Roboto;
  }

  .tags {
    display: flex;
    gap: 0.8rem;
  }

  &:hover {
    transition: 250ms;
    transform: scale(1.05);
    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.GOLD};
  }
`
