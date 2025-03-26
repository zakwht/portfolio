import { AppProps } from "next/app";
import styled from "@emotion/styled";
import "../App.css";
import { FaGithub, FaMicrosoft, FaEnvelope } from "react-icons/fa";

const HeaderStyled = styled.header`
  color: white;
  padding: 48px 48px 20px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media only screen and (max-width: 480px) {
    padding: 20px 28px;
  }

  h1 {
    margin-block: 0;
    font-weight: 200;
    position: absolute;
    right: 48px;
  }
`;

const FooterStyled = styled.footer`
  svg {
    margin-bottom: -3px;
  }

  span {
    position: absolute;
    bottom: 16px;
    right: 24px;
    color: white;

    @media only screen and (max-width: 480px) {
      left: 0;
      right: 0;
      text-align: center;
    }
  }
`;

const FooterLinksStyled = styled.nav`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    bottom: 32px;
  }

  a {
    color: white;
    display: block;
    width: 48px;
    height: 48px;
    margin: 16px;
    font-size: 24px;
    border-radius: 50%;
    background-color: white; // #F3F6FF;
    color: black;
    text-align: center;
    line-height: 48px;
    transition: all 0.3s;

    &:hover {
      margin: 0px 8px;
      width: 64px;
      height: 64px;
      line-height: 64px;
      font-size: 32px;
      color: white;

      &[data-link="Mail"] {
        background-color: #d44638;
      }
      &[data-link="GitHub"] {
        background-color: #24292e;
      }
      &[data-link="LinkedIn"] {
        background-color: #0073b1;
      }
    }
  }
`;

const MainStyled = styled.main`
  padding-bottom: 80px;
  margin: 32px 24px 0;

  @media only screen and (max-width: 480px) {
    padding-bottom: 120px;
  }
`;

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <HeaderStyled>
      <h1>Zak White</h1>
    </HeaderStyled>
    <MainStyled>
      <Component {...pageProps} />
    </MainStyled>
    <FooterStyled>
      <FooterLinksStyled>
        <a href="https://github.com/zakwht" data-link="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/zakwhite" data-link="LinkedIn">
          <FaMicrosoft />
        </a>
        <a href="mailto:zakwht@gmail.com" data-link="Mail">
          <FaEnvelope />
        </a>
      </FooterLinksStyled>
      <span>© {new Date().getFullYear()}</span>
    </FooterStyled>
  </>
);

export default App;
