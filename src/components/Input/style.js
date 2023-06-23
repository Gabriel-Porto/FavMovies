import styled from "styled-components"

export const Container = styled.div`
  height: 5.6rem;
  width: 100%;

  min-width: 20rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 10px;

  display: flex;
  align-items: center;

  > input {
    height: 5.6rem;
    width: 100%;

    padding-left: 2.4rem;
    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > svg {
    margin-left: 1.6rem;
  }

`
