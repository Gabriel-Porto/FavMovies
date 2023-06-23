import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GOLD_SECONDARY};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  height: 22.2rem;

  border-radius: 1.6rem;

  padding: 3.2rem;

  > p {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    height: 5.2rem;
    overflow: hidden;
    color: var(--gray, #999591);
    font-family: Roboto;
  }

  .tags {
    display: flex;
    gap: .8rem;
  }
`
