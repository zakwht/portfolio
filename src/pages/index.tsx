import styled from "@emotion/styled";
import React from "react";
import { Typer, TyperElement } from "react-yat";
import { Project, ProjectSummary } from "../components/Project";

//.map(-> key)
// this is for fun? lol
// const projects: Project[] = [
//   {
//     key: "universal-search",
//     title: "Universal Search",
//     role: "Primary Developer",
//     group: "Regroove",
//     description: "yaml. Imagine if I typed a long long paragraph about it... wouldn't that be quite something! Antum. Etiam accumsan maximus orci ut porta. Curabitur est ante, commodo sed nunc id, tincidunt efficitur nunc. Vestibulum pharetra mi id arcu placerat, et ligma.",
//     links: [{
//       icon: "website",
//       url: "https://now.regroove.ca"
//     }, {
//       icon: "github",
//       url: "abc"
//     }, {
//       icon: "blog",
//       url: "github"
//     }],
//     year: "2020"
//   },
//   {
//     title: "Logo Repo",
//     role: "Product Owner",
//     group: "Regroove",
//     description: "This is all in yaml. Imagine if I typed a long long paragraph about it... wouldn't that be quite something! Antum. Etiam accumsan maximus orci ut porta. Curabitur est ante, commodo sed nunc id, tincidunt efficitur nunc. Vestibulum pharetra mi id arcu placerat, et convallis turpis suscipit. Aliquam laoreet ligula lectus, in ",
//     key: "logo-repo",
//     links: [
//       {
//         icon: "website",
//         url: "https://thelogorepo.com"
//       }
//     ],
//     year: "2021"
//   },
//   {
//     key: "roku",
//     title: "Roku ECP Wrapper",
//     role: "Personal Project",
//     description: "some text here.",
//     links: [
//       {
//         icon: "npm",
//         url: "npmjs.org/npm/packages/roku-ecp"
//       },
//       {
//         icon: "github",
//         url: "github"
//       } 
//     ],
//     year: "2021"
//   },
//   {
//     key: "apod",
//     title: "APOD Browser Extension",
//     role: "Personal Project",
//     description: "api, ne if I typed a long long paragraph about it... wouldn't that be quite something! Antum. Etiam accumsan maximus orci ut porta. Curabitur est ante, commodo sed nunc id, tincidunt efficitur nunc. Vestibulum pharetra mi id arcu placerat, et convallis turpis",
//     links: [{
//       icon: "chrome",
//       url: "chrome://extensions"
//     }, {
//       icon: "github",
//       url: "github.com"
//     }],
//     year: "2020"
//   },
//   {
//     key: "ffl",
//     title: "Tasks Bot",
//     role: "Primary Developer",
//     group: "Regroove",
//     description: "Made a bot using the Bot Framework that runs in Microsoft Teams, uses the Graph API to add tasks to To-Do/Planner. Azure.",
//     links: [{
//       icon: "blog",
//       url: "https://regroove.ca/blog"
//     }],
//     year: "2020"
//   },
//   {
//     key: "mastermind",
//     title: "Mastermind",
//     role: "Personal Project",
//     description: "Made with Python using the Tkinter library as an introduction project to working with GUIs in python.",
//     links: [{ icon: "github", url: "https://github.com/zakwht/mastermind "}],
//     year: "2018"
//   },
//   {
//     key: "navo",
//     title: "Navo",
//     role: "Junior Developer",
//     group: "Regroove",
//     description: "Organize company bookmarks across multi-platform app. Testing, front-end enhancements, etc?",
//     links: [{ 
//       icon: "website",
//       url: "https://genavo.com"    
//     }],
//     year: "2020"
//   },
//   {
//     key: "minesweeper",
//     title: "Minesweeper",
//     description: "AI",
//     role: "SENG474",
//     group: "UVic",
//     links: [{
//       icon: "github",
//       url: "https://github.com/chunthebear/deep-q-learning-Minesweeper"
//     }, {
//       icon: "report",
//       url: "https://raw.githubusercontent.com/chunthebear/"
//     }],
//     year: "2021"
//   }
// ]


// const ProjectsLayout = styled.section`
//   column-width: 400px;
//   column-count: 3;
//   column-fill: balance;

//   margin: 20px;
// `


export const HomeRoute: React.FC = () => {
  return (
    <>
    <Typer prefix="" cursorWidth={1}>
      <TyperElement>Developer</TyperElement>
      <TyperElement>Designer</TyperElement>
      <TyperElement>Consultant</TyperElement>
      <TyperElement>Student</TyperElement>
    </Typer>
    {/* <ProjectsLayout>
    {projects.map(ProjectSummary)}
    </ProjectsLayout> */}
    </>
  );
};

export default HomeRoute;