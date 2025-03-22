import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "../components/Helmet";

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
`;

export const AboutRoute: React.FC = () => (
  <>
    <Helmet title="About" />
    <AboutStyled>
      <p>
        Canadian full-stack software developer.
      </p>
      <p>
        Stack
      </p>
    </AboutStyled>
  </>
);

export default AboutRoute;
