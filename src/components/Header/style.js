import styled from "styled-components"

export const Container = styled.div`
  min-width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 123px;

  grid-area: header;

  padding: 24px 123px;
  display: flex;
  align-items: center;
  gap: 64px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  > h1 {
    color: ${({ theme }) => theme.COLORS.GOLD};
    font-weight: 700;
    line-height: 32px;
  }

  .profileSection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;

    > img {
      width: 64px;
      height: 64px;
    }
  }

  .profileName {
    display: flex;
    flex-direction: column;
    align-items: end;
    > a {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`
