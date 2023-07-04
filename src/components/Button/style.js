import styled from "styled-components"

export const Container = styled.button`
  min-height: 4.8rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GOLD};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  font-weight: 500;
  border: none;

  cursor: pointer;

  padding: 0 16px;

  &:disabled {
    opacity: 0.5;
  }

`
