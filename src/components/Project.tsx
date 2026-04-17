import React from "react";
import styled from "@emotion/styled";
import { FaMicrosoft } from "react-icons/fa";
import { Card } from "./Card";

const ProjectText = styled.span`
  display: block;
  padding: 1rem;

  h3 {
    margin-block: 0;
  }
`;

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

const Stack = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 16px;
`;

export const Technology = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
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

export const StackIcon = ({ tool }: { tool: string }) => {
  if (["spfx", "bot framework", "azure"].includes(tool.toLowerCase()))
    return <FaMicrosoft color="f14f21" />;
  return (
    <img width="14px" alt={tool} src={`https://cdn.simpleicons.org/${iconSlug(tool)}`} />
  );
};

const iconSlug = (tool: string) => {
  switch (tool.toLowerCase()) {
    case "graph api":
      return "graphql";
    case "sklearn":
      return "scipy";
    case "pymol":
      return "moleculer";
    case "bash":
      return "gnubash";
    case "sql":
      return "postgresql";
    case "data analysis":
      return "simpleanalytics";
    case "data modeling":
      return "openjsfoundation";
    case "version control":
      return "git";
    case "research methods":
      return "egghead";
    case "machine learning":
      return "cryptomator";
    case "experimental design":
      return "neutralinojs";
    case "technical writing":
      return "libreofficebase";
    case "statistics":
      return "weightsandbiases";
    case "info viz":
      return "anaconda";
    case "collaboration":
      return "harbor";
    case "pipelines/etl": return "spine"
    default:
      return tool.replace(".", "dot").toLowerCase();
  }
};

// TODO: this is a list
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
    <ProjectText {...props}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Stack>
        {stack.map((tool) => (
          <Technology key={tool}>
            <StackIcon tool={tool} />
            <span>{tool}</span>
          </Technology>
        ))}
      </Stack>
    </ProjectText>
  </Card>
);
