import { AppProps } from "next/app";
import styled from "@emotion/styled";
import "../App.css";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Head from "next/head";

const HeaderStyled = styled.header`
  color: white;
  padding: 48px 48px 20px;
  display: flex;
  justify-content: space-between;
  position: relative;

  h1,
  h3 {
    margin-block: 0;
    font-weight: 200;
    position: absolute;
    right: 48px;
  }

  h3 {
    top: 88px;
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

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <script type="application/ld+json">
      {`{
        "@context": "http://schema.org",
        "@type": "Person",
        "@id": "https://zakwhite.ca",
        "name": "Zak White",
        "nationality": "Canada",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of Victoria",
          "sameAs": "https://uvic.ca"
        },
        "gender": "Male",
        "description": "Software Developer",
        "jobTitle": "Software Developer",
        "url": "https://zakwhite.ca",
        "image": "https:/zakwhite.ca/img/birdwatching.jpeg",
        "sameAs": [
          "https://github.com/zakwht",
          "https://www.linkedin.com/in/zakwhite/",
          "https://ebird.org/profile/NTk3MjU4OQ"
        ]
      }`}
    </script>
    </Head>
    <HeaderStyled>
      <h1>Zak White</h1>
      <h3>Data Analyst</h3>
    </HeaderStyled>
    <main>
      <Component {...pageProps} />
    </main>
    <FooterStyled>
      <FooterLinksStyled>
        <a href="https://github.com/zakwht" data-link="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/zakwhite" data-link="LinkedIn">
          <FaLinkedin />
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
