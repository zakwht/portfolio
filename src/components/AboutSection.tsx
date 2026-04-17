import React from "react";
import styled from "@emotion/styled";
import { Helmet } from "./Helmet";
import { StackIcon, Technology } from "./Project";
import { ProposalSummary } from "./Proposal";

const AboutStyled = styled.div`
  margin: 64px auto 0;
  // max-width: 880px;
  // font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.02rem;

  > img {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 320px;
    max-height: 320px;
    object-fit: cover;
  }

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
  column-count: 4;

  @media only screen and (max-width: 480px) {
    padding-left: 40px;
    column-count: 2;
  }
`;

const tools = [
    "Python",
  "Machine Learning",
  "Data Analysis",
  "Research Methods",
  "Version Control",
  "Data Modeling",
  "Technical Writing",
  "Statistics",
  "Info Viz",
  "Pipelines/ETL",
  "Collaboration",
    "JavaScript",
  "R",
  "Bash",
  "SQL", 
    "React",
];

const ideas = [
  {
    key: "AD",
    headline: "A cost-sensitive diagnostic pipeline for preclinical Alzheimer's disease detection",
    question: "Can a multi-stage diagnostic pipeline compete with full-modality models while reducing cost?",
    abstract: "Develop and evaluate a multi-stage cost-aware diagnostic pipeline for preclinical Alzheimer's disease that maintains high sensitivity while balancing cost.",
    topics: ["Computational Biology", "ML Interpretability", "Health Informatics"]
  },
  {
    key: "Semantics",
    headline: "Investigating the role of semantic HTML",
    question: "To what extent does semantic HTML improve machine interpretability and downstream usability of web content?",
    abstract: "Conduct an empirical study of the effects on semantic web design for SEO, accessibility, performance, and machine interpretability",
    topics: ["Data Engineering", "Information Retrieval", "Accessibility", "Web Engineering"]
  }
]

export const AboutRoute: React.FC = () => (
  <>
    <Helmet />
    <AboutStyled>
      <img alt="Birdwatching" draggable="false" src="/img/birdwatching.jpeg" />
      <section>
      <p>
        Canadian Computer Science graduate looking for Master's project opportunities.
      </p>
      <ul>
        <li>BSc. Honours Computer Science from The University of Victoria, with a minor in Statistics</li>
        <li>5+ years professional experience in software development</li>
        <li>I'm currently working in Data Analysis for a BC Crown Corporation</li>
      </ul>
      </section>
      <section id="skills">
        <Stack>
          {tools.map((tool) => (
            <Technology key={tool}>
              <StackIcon tool={tool} />
              <span>{tool}</span>
            </Technology>
          ))}
        </Stack>
      </section>
      <section id="interests">
      <p>
        My academic background is in computational biology, machine learning, and statistics.
</p><p>

        I am particularly interested in interdisciplinary research (applications of computer science in other domains), and research that intersects software & statistics. 
</p><p>

        Some concepts that stand out to me:
        <ul>
          <li>Bioinformatics/computational biology & health informatics</li>
          <li>AI/machine learning (machine ethics, interpretability, sustainability)</li>
          <li>Data science & engineering (pipelines, data analysis, information retrieval, knowledge graphs, data governance)</li>
          <li>HCI (accessibility, UX) and information visualization</li>
        </ul>

      </p>
      </section>

    </AboutStyled>
    <section id="ideas">
      {ideas.map(ProposalSummary)}
    </section>


  </>
);

export default AboutRoute;
