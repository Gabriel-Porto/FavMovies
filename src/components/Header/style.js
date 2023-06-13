import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 123px;

  padding: 24px 123px;
  display: flex;
  align-items: center;
  gap: 64px;
  
  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 700;
    line-height: 32px;
  }

  .profileSection {
    width: 18%;
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
