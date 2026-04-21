import React from "react";
import styled from "@emotion/styled";

const AboutStyled = styled.div`
  margin: 64px auto 0;
  line-height: 1.5;
  letter-spacing: 0.02rem;

  > img {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 320px;
    max-height: 320px;
    object-fit: cover;
    margin-bottom: 16px;
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

export const ideas = [
  {
    key: "AD",
    headline:
      "A cost-sensitive diagnostic pipeline for preclinical Alzheimer's disease detection",
    question:
      "Can a multi-stage diagnostic pipeline compete with full-modality models while reducing cost?",
    abstract:
      "Develop and evaluate a multi-stage cost-aware diagnostic pipeline for preclinical Alzheimer's disease that maintains high sensitivity while balancing cost.",
    topics: [
      "Computational Biology",
      "ML Interpretability",
      "Health Informatics"
    ]
  },
  {
    key: "Semantics",
    headline: "Investigating the role of semantic HTML",
    question:
      "To what extent does semantic HTML improve machine interpretability and downstream usability of web content?",
    abstract:
      "Conduct an empirical study of the effects on semantic web design for SEO, accessibility, performance, and machine interpretability",
    topics: [
      "Data Engineering",
      "Information Retrieval",
      "Accessibility",
      "Web Engineering"
    ]
  }
];

export const AboutSection: React.FC = () => (
  <>
    <AboutStyled>
      <img alt="Birdwatching" draggable="false" src="/img/birdwatching.jpeg" />
      <section>
        <p>
          Canadian Computer Science graduate looking for Master's project
          opportunities.
        </p>
        <ul>
          <li>
            BSc. Honours Computer Science from The University of Victoria, with
            a minor in Statistics
          </li>
          <li>5+ years professional experience in software development</li>
          <li>Currently working in Data Analysis for a BC Crown Corporation</li>
        </ul>
        <p>
          Please read about my interests, skills & projects below, or review <a href="/resume.pdf">my resume</a> or <a href="/github">GitHub dashboard</a>.
        </p>
      </section>
    </AboutStyled>
  </>
);

export const InterestsSection: React.FC = () => (
  <section id="interests">
    <p>
      My academic background is in computational biology, machine learning, and
      statistics.
    </p>
    <p>
      I am particularly interested in interdisciplinary research (applications
      of computer science in other domains), and research that intersects
      software & statistics.
    </p>
    <p>Some concepts that stand out to me:</p>
    <ul>
      <li>Bioinformatics/computational biology & health informatics</li>
      <li>
        AI/machine learning (machine ethics, interpretability, sustainability)
      </li>
      <li>
        Data science & engineering (pipelines, data analysis, information
        retrieval, knowledge graphs, data governance)
      </li>
      <li>HCI (accessibility, UX) and information visualization</li>
    </ul>
  </section>
);
