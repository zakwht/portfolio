import styled from "@emotion/styled";

const icons: Record<string, string> = {
  "graph api": "graphql",
  sklearn: "scipy",
  pymol: "moleculer",
  bash: "gnubash",
  sql: "postgresql",
  "data analysis": "simpleanalytics",
  "data modeling": "openjsfoundation",
  "version control": "git",
  "research methods": "egghead",
  "machine learning": "cryptomator",
  "experimental design": "neutralinojs",
  "technical writing": "libreofficebase",
  statistics: "weightsandbiases",
  "info viz": "anaconda",
  collaboration: "harbor",
  "pipelines/etl": "spine"
};

export const Stack = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 16px;
`;

const iconSlug = (tool: string) =>
  tool.toLowerCase() in icons
    ? icons[tool.toLowerCase()]
    : tool.replace(".", "dot").toLowerCase();

export const StackIcon = ({ tool }: { tool: string }) => (
  <img
    width="14px"
    alt={tool}
    src={`https://cdn.simpleicons.org/${iconSlug(tool)}`}
  />
);
