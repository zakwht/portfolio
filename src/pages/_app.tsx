
import type { AppProps} from 'next/app'
import Link from 'next/link';
import styled from "@emotion/styled";
import '../App.css';
import {Helmet} from "../components/Helmet";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

/* for active page link highlight:
  left: -4px;
  content: '';
  width: calc(100% + 8px);
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: -4px;
  border-radius: 8px;
*/

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
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      transition: all 0.5s;
      filter: brightness(0.8);
    }
  }
`

const NavStyled = styled.nav`
  position: absolute;
  right: 48px;
  bottom: 20px;

  @media only screen and (max-width: 480px) {
    left: 0;
    top: 64px;
  }

  a {
    float: bottom;
    line-height: 1.5;
    margin-left: 28px;
    font-size: 1.1rem;
  }
`

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
`

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
`

const MainStyled = styled.main`
  padding-bottom: 80px;
  margin: 32px 24px 0;
`

//move header and footer to components.


export const App: React.FC<AppProps> = ({Component, pageProps}) => 
  <>
    <Helmet title="Portfolio" />
    <HeaderStyled>
      <h1><Link href="/">Zak White</Link></h1>
      <NavStyled>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </NavStyled>
    </HeaderStyled>
    <MainStyled>
      <Component {...pageProps} />
    </MainStyled>
    <FooterStyled>
      <FooterLinksStyled>
      <a href="https://github.com/zakwht" data-link="GitHub"
        ><FaGithub /></a
      ><a href="https://linkedin.com/in/zakwhite" data-link="LinkedIn"
        ><FaLinkedin /></a
      ><a href="mailto:zakwht@gmail.com" data-link="Mail">
        <FaEnvelope />
      </a>
      </FooterLinksStyled>
      <span>© {new Date().getFullYear()}</span>
    </FooterStyled>
  </>

export default App;
