import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  padding: .5rem 1.6rem;
  align-items: flex-start;

  width: fit-content;
  min-height: 1.4rem;

  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
`
