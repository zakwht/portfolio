import React from "react";
import styled from "@emotion/styled";

const ProjectCard = styled.article`
  break-inside: avoid;
  background-color: white; // thistle;
  border-radius: 12px;
  margin: 8px 0;
  display: inline-block;
  box-shadow: 0px 6px 10px 0 hsl(210deg 23% 48% / 10%);
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 6px 4px rgb(0 0 0 / 8%);

    > a img {
      transform: scale(1.05);
    }
  }

  > img,
  > a img {
    transition: transform 0.5s;
    filter: brightness(0.95);
    width: 100%;
    vertical-align: top;
  }

  img {
    user-select: none;
  }
`;

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
`

const Technology = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`

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

const iconSlug = (tool: string) => {

  switch (tool.toLowerCase()) {
    case "vue.js":
      return "vuedotjs"
    case "graph api":
      return "graphql"
    case "spfx":
    case "bot framework":
    case "azure":
      return "makerbot"
    case "sklearn":
      return "scipy"
    case "pymol":
      return "moleculer"
    default:
      return tool.toLowerCase();
  }
}



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
  <ProjectCard key={key} id={key}>
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
        {stack.map((l) => (
          <Technology key={l}>
          <img 
            width="14px"
            src={`https://cdn.simpleicons.org/${iconSlug(l)}`} 
          />
          <span>{l}</span>
          </Technology>
        ))}
      </Stack>
    </ProjectText>
  </ProjectCard>
);
