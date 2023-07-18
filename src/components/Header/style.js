import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 12.3rem;

  grid-area: header;

  padding: 2.4rem 12.3rem;
  display: flex;
  align-items: center;
  gap: 6.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

  > h1 {
    color: ${({ theme }) => theme.COLORS.GOLD};
    font-weight: 700;
    line-height: 3.2rem;
  }

  .profileSection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.9rem;

    > img {
      width: 6.4rem;
      height: 6.4rem;
    }
  }

  .profileName {
    display: flex;
    flex-direction: column;
    align-items: end;

    > a {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > h4 {
      min-width: max-content;
    }
  }

  @media (max-width: 800px) {
    .displayNone {
      display: none;
    }
  }
`
