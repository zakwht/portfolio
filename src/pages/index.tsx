import React from "react";
import AboutRoute from "../components/AboutSection";
import ProjectRoute from "../components/ProjectsSection";
import { GetStaticProps } from "next";
import projects from "../../content/projects.json";
import { Project } from "../components/Project";

export const HomeRoute = ({ projects }: { projects: Project[] }) => (
  <>
    <AboutRoute />
    <ProjectRoute projects={projects} />
  </>
);

export default HomeRoute;

export const getStaticProps: GetStaticProps = async () => ({
  props: { projects: projects.sort(() => Math.random() - 0.5) }
});
