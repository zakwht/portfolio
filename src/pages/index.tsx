import React from "react";
import { AboutSection, ideas, InterestsSection } from "../components/Biography";
import { GetStaticProps } from "next";
import projects from "../../content/projects.json";
import courses from "../../content/courses.json";
import { Project, ProjectSummary } from "../components/Project";
import { ProposalSummary } from "../components/Proposal";
import { SkillsSection } from "../components/Skills";

interface Course {
  "title": string;
  "code":  string;
  "grade": string;
  "overview": string;
  outline?: string;
}

export const HomeRoute = ({ projects, courses }: { projects: Project[], courses: Course[] }) => (
  <>
    <AboutSection />
    <SkillsSection />
    <InterestsSection />
    <section id="ideas">{ideas.map(ProposalSummary)}</section>
    <section id="courses" className="two-col">
      {courses.map(({ code, title, grade }) => (
        <p key={code}>
          {code} <span className="light">{title} ({grade})</span>
        </p>
      ))}
    </section>
    <section className="two-col" id="projects">
      {projects.filter((p) => p.group === "UVic").sort((a,b) => a.description.length - b.description.length).map(ProjectSummary)}
    </section>
    <section className="two-col" id="personal projects">
      {projects.filter((p) => p.role === "Personal Project").sort((a,b) => a.description.length - b.description.length).map(ProjectSummary)}
    </section>
  </>
);

export default HomeRoute;

export const getStaticProps: GetStaticProps = async () => ({
  props: { projects, courses }
});
