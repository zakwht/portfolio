import styled from "@emotion/styled";
import React from "react";
import { Project, ProjectSummary } from "./Project";
import { GetStaticProps } from "next";
import projects from "../../content/projects.json";

const ProjectsLayout = styled.section`
  column-width: 320px;
  column-count: 2;
  column-fill: balance;
`;

export const ProjectRoute = ({ projects }: { projects: Project[] }) => (
  <>
    <ProjectsLayout id="projects">{projects.filter(p => p.group === "UVic").map(ProjectSummary)}</ProjectsLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: { projects: projects.sort(() => Math.random() - 0.5) }
});

export default ProjectRoute;
