import React from "react";
import styled from "@emotion/styled";
import { Card } from "./Card";
import { Stack, StackIcon } from "./Stack";

const ProjectLogo = styled.div`
  margin-top: -56px;

  figure {
    position: relative;
    margin: 0;
    width: 64px;
    background-color: white;
    padding: 12px;
    border-radius: 12px;
    margin-left: 24px;
    box-shadow: 0 0 12px 4px rgb(0 0 0 / 12%);

    img {
      border-radius: 12px;
      width: 64px;
    }
  }
`;

export interface Project {
  key: string;
  title: string;
  role?: string;
  group?: string;
  description: string;
  url?: string;
  year?: string;
  stack: string[];
}

export const ProjectSummary: React.FC<Project> = ({
  key,
  title,
  role,
  group,
  description,
  url,
  year,
  stack,
  ...props
}) => (
  <Card key={key} id={key}>
    {url ? (
      <a href={url} target="__blank">
        <img src={`img/projects/${key}.png`} alt={title} draggable={false} />
      </a>
    ) : (
      <img src={`img/projects/${key}.png`} alt={title} draggable={false} />
    )}
    <ProjectLogo>
      <figure>
        <img
          src={`img/projects/${key}-logo.png`}
          alt={title}
          draggable={false}
        />
      </figure>
    </ProjectLogo>
    <span {...props}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Stack>
        {stack.map((tool) => (
          <li key={tool}>
            <StackIcon tool={tool} />
            <span>{tool}</span>
          </li>
        ))}
      </Stack>
    </span>
  </Card>
);
