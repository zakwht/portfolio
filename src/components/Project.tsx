import React from "react";
import styled from "@emotion/styled";
import { FaFileInvoice, FaGithub, FaReadme, FaChrome, FaNpm, FaStore, FaLink} from "react-icons/fa"

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

    > img {
      transform: scale(1.05);
    }
  }

  > img {
    transition: transform 0.5s;
    filter: brightness(0.95);
    width: 100%;
    vertical-align: top;
  }

  img {
    user-select: none;
  }
`

const ProjectText = styled.span`
  display: block;
  padding: 1rem;

  h3 {
    margin-block: 0;
  }

  a {
    margin-right: 12px;
    font-size: 18px;
    color: inherit;
  }

  time {
    float: right;
    font-weight: 200;
  }

  .role {
    margin-right: 0.3rem;
  }

  .group {
    font-weight: 300;
    font-size: 0.8rem;
  }

  div {
    min-height: 22px;
  }
`

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
`

type IconType = "github" | "website" | "chrome" | "blog" | "npm" | "store" | "report";

const ProjectIcon: React.FC<{type: IconType}> = ({type}) => {
  switch(type) {
    case "github": return <FaGithub />
    case "chrome": return <FaChrome />
    case "npm": return <FaNpm style={{transform: "scale(1.5)", margin: "0 0.2rem 0 0.3rem"}} />
    case "blog": return <FaReadme />
    case "website": return <FaLink />;
    case "store": return <FaStore />
    case "report": return <FaFileInvoice />
  }
}


export interface Project {
  key: string;
  title: string;
  role?: string;
  group?: string;
  description: string;
  links?: {icon: IconType; url: string}[];
  year?: string;
}

export const ProjectSummary: React.FC<Project> = ({ key, title, role, group, description, links = [], year, ...props }) => (
  <ProjectCard key={key} id={key}>
    <img src={`img/projects/${key}.png`} alt={title} draggable={false} />
    <ProjectLogo>
      <figure>
        <img src={`img/projects/${key}-logo.png`} alt={title} draggable={false} />
      </figure>
    </ProjectLogo>
    <ProjectText {...props}>
      <h3>{title}</h3>
      {!!role && <span className="role">{role}</span>}
      {!!group && <span className="group">({group})</span>}
      <p>{description}</p>
      <div>
      {links.map(l => (
        <a key={l.url} href={l.url} target="_blank" rel="noreferrer"><ProjectIcon type={l.icon} /></a>
      ))}
      {!!year && <time>{year}</time>}
      </div>
    </ProjectText>
  </ProjectCard>
);
