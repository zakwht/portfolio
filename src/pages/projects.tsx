import styled from "@emotion/styled";
import React from "react";
import { Helmet } from "../components/Helmet";
import { Project, ProjectSummary } from "../components/Project";
import { GetStaticProps } from "next";
import projects from "../../content/projects.json";

const ProjectsLayout = styled.section`
  column-width: 320px;
  column-count: 3;
  column-fill: balance;

  // margin: 20px;
`;

export const HomeRoute = ({ projects }: { projects: Project[] }) => (
  <>
    <Helmet title="Projects" />
    <ProjectsLayout>{projects.map(ProjectSummary)}</ProjectsLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: { projects: projects.sort(() => Math.random() - 0.5) }
});

export default HomeRoute;
