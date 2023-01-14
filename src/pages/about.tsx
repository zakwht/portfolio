import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "../components/Helmet";
import Link from "next/link";

const AboutStyled = styled.section`
  color: #eee;
  margin: 64px auto;
  max-width: 720px;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.02rem;

  a {
    color: mediumseagreen;
    text-decoration: none;
    
    &:hover {
      transition: all 0.5s;
      filter: brightness(0.8);
    }
  }
`

export const AboutRoute: React.FC = () => (
  <>
    <Helmet title="About" />
    <AboutStyled>
      <p>
        Hi <span style={{color: "transparent", textShadow: "0 0 0 mediumseagreen"}}>👋</span> I'm Zak, a software developer based in Victoria, BC.</p>
      <p>
        I'm a 2022 University of Victoria grad, having earned an honours bachelor's degree in computer science with a minor in statistics.
        Of big interest to me are the fields at the intersection of these two disciplines: data science, machine learning, analysis of algorithms.
        My other academic interests include machine ethics, graph theory, and optimization algorithms.
      </p>
      <p>
        Most of my development experience involves building web applications with React &amp; TypeScript, with a focus on encompassing the Semantic Web.
        I've worked within the scope of many programming paradigms, using languages including Java, Python, Racket, and R.
      </p>
      <p>
        Checkout my <Link href="/projects">projects</Link>!
      </p>
    </AboutStyled>
  </>
);

export default AboutRoute;
