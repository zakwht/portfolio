import React from "react";
import styled from "@emotion/styled";
import { Card } from "./Card";

const ProjectText = styled.span`
  display: block;
  padding: 1rem 1rem 0.8rem;

  .question {
    font-style: italic;
  }

  h3 {
    margin-block: 0;
  }
`;

const Topics = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 8px;

  > li {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: attr(data-colour type(<color>), "red");
    color: white;
    border-radius: 16px;
    padding: 4px 8px;
    font-size: 0.75em;
  }
`;

const topicColor: { [key: string]: string } = {
  "Computational Biology": "#d7e",
  "Health Informatics": "#d7e",
  "ML Interpretability": "#37a",
  "Data Engineering": "#152",
  "Information Retrieval": "#152",
  "Accessibility": "#741",
  "Data Ethics": "#741",
  "Web Engineering": "#152",
  "Bioinformatics": "#d7e",
  "Information Visualization": "#741",
  "Data Analysis": "#152",
  "Machine Learning": "#37a"
};

export interface Proposal {
  key: string;
  headline: string;
  question: string;
  abstract: string;
  topics: string[];
}

export const ProposalSummary: React.FC<Proposal> = ({
  headline,
  question,
  abstract,
  topics,
  key,
  ...props
}) => (
  <Card key={key} id={key}>
    <ProjectText {...props}>
      <h3>{headline}</h3>
      <p className="question">{question}</p>
      <p>{abstract}</p>
      <Topics>
        {topics.map((topic) => (
          <li key={topic} data-colour={topicColor[topic]}>
            <span>{topic}</span>
          </li>
        ))}
      </Topics>
    </ProjectText>
  </Card>
);
