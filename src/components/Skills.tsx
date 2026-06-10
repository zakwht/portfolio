import styled from "@emotion/styled";
import skills from "../../content/skills.json";
import { StackIcon } from "./Stack";

export const Skills = styled.ul`
  column-count: 4;

  @media only screen and (max-width: 480px) {
    padding-left: 40px;
    column-count: 2;
  }

  li {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 4px;
    align-items: baseline;
  }
`;

export const SkillsSection: React.FC = () => (
  <section id="skills">
    <Skills>
      {skills.map((skill) => (
        <li key={skill}>
          <StackIcon tool={skill} />
          <span>{skill}</span>
        </li>
      ))}
    </Skills>
  </section>
);
