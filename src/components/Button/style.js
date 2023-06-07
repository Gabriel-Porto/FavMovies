import styled from "styled-components"

export const Container = styled.div`
  min-height: 56px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  font-weight: 500;
  border: none;

  cursor: pointer;

  padding: 0 16px;
  margin-top: 16px;

  &:disabled {
    opacity: 0.5;
  }

`
