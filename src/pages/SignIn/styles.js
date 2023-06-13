import styled from "styled-components"
import backgroundImg  from "../../assets/movietheater.png";


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.div`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;


  margin: 0 auto;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: bold;
    font-size: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-weight: 400;
    font-size: 14px;
    min-width: 301px;

    margin-bottom: 48px;
  }

  > h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 48px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 500;
    align-self: center;

    margin-top: 42px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    filter: brightness(0.8);
    background-size: cover;
`
