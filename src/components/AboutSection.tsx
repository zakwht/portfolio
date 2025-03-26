import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "./Helmet";
import { StackIcon, Technology } from "./Project";

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

const Stack = styled.ul`
  padding-left: 64px;
  column-count: 4;
`;

const tools = [
  "JavaScript",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "React",
  "Next.js",
  "Vue.js",
  "Svelte",
  "Hugo",
  "Node.js",
  "Firebase",
  "Express"
];

export const AboutRoute: React.FC = () => (
  <>
    <Helmet title="About" />
    <AboutStyled>
      <p>
        Canadian full-stack software developer with a passion for developing
        high-quality web solutions.
      </p>
      <Stack>
        {tools.map((tool) => (
          <Technology key={tool}>
            <StackIcon tool={tool} />
            <span>{tool}</span>
          </Technology>
        ))}
      </Stack>
    </AboutStyled>
  </>
);

export default AboutRoute;
