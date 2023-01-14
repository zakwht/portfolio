import React from "react";
import { Helmet } from "../components/Helmet";
import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import resume from "../../content/resume.json";

const ResumeStyled = styled.article`
  color: white;
  max-width: 720px;
  margin: 32px auto;
  line-height: 1.25;
  font-weight: 300;

  h2 {
    letter-spacing: 0.08rem;
    font-weight: 100;
  }

  ul {
    list-style: none;
    font-size: 14px;
  }

  h3 {
    margin: 0px 0px 0px;
    font-size: 16px;
    font-weight: 500;
  }

  span,
  time {
    text-decoration: none;
    color: #bbb;
  }

  li > ul {
    list-style: square;
    padding: 8px 0px 0px 20px;
  }

  li > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const ResumeSectionStyled = styled.section`
  padding-inline-start: 32px;

  > ul > li:not(:last-child) {
    margin-bottom: 20px;
  }
  > ul {
    position: relative;
  }
  > ul::before {
    content: "";
    position: absolute;
    left: 8px;
    margin: 8px 0;
    width: 2px;
    height: calc(100% - 10px);
    background-color: mediumseagreen;
  }
  > ul h3::before {
    content: "•";
    position: absolute;
    left: 1.5px;
    font-size: 32px;
    line-height: 0.48;
    color: mediumseagreen;
    font-weight: bold;
  }
`;

interface ResumeEntry {
  title: string;
  subtitle?: string;
  date?: string;
  items: string[];
}

interface ResumeSection {
  title: string;
  items: ResumeEntry[];
}

const ResumeEntryLayout = ({ title, subtitle, date, items }: ResumeEntry) => (
  <li key={title}>
    <div>
      <h3>{title}</h3>
      {!!date && <time>{date}</time>}
    </div>
    {!!subtitle && <span>{subtitle}</span>}
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </li>
);

const ResumeSectionLayout = ({ title, items }: ResumeSection) => (
  <ResumeSectionStyled id={title.toLowerCase()} key={title}>
    <h2>{title}</h2>
    <ul>{items.map(ResumeEntryLayout)}</ul>
  </ResumeSectionStyled>
);

export const ResumeRoute = ({ resume }: { resume: ResumeSection[] }) => {
  return (
    <>
      <Helmet title="Resume" />
      <ResumeStyled>{resume.map(ResumeSectionLayout)}</ResumeStyled>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: { resume }
});

export default ResumeRoute;
