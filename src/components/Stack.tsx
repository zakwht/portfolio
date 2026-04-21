import styled from "@emotion/styled";

export const Stack = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 16px;
`;

const iconSlug = (tool: string) => {
  switch (tool.toLowerCase()) {
    case "graph api":
      return "graphql";
    case "sklearn":
      return "scipy";
    case "pymol":
      return "moleculer";
    case "bash":
      return "gnubash";
    case "sql":
      return "postgresql";
    case "data analysis":
      return "simpleanalytics";
    case "data modeling":
      return "openjsfoundation";
    case "version control":
      return "git";
    case "research methods":
      return "egghead";
    case "machine learning":
      return "cryptomator";
    case "experimental design":
      return "neutralinojs";
    case "technical writing":
      return "libreofficebase";
    case "statistics":
      return "weightsandbiases";
    case "info viz":
      return "anaconda";
    case "collaboration":
      return "harbor";
    case "pipelines/etl":
      return "spine";
    default:
      return tool.replace(".", "dot").toLowerCase();
  }
};

export const StackIcon = ({ tool }: { tool: string }) => (
  <img
    width="14px"
    alt={tool}
    src={`https://cdn.simpleicons.org/${iconSlug(tool)}`}
  />
);
