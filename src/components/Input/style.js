import styled from "styled-components"

export const Container = styled.div`
  height: 56px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 10px;

  display: flex;
  align-items: center;

  > input {
    height: 56px;
    width: 100%;

    padding-left: 24px;
    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > svg {
    margin-left: 16px;
  }

`
