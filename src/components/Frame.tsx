import styled from "@emotion/styled";
import React from "react";

const FrameStyled = styled.iframe`
  position: fixed;
  inset: 0;
  border: none;
  height: 100vh;
  width: 100vw;
`;

export const Frame: React.FC<{ title?: string; src?: string }> = ({
  title,
  src
}) => <FrameStyled src={src} title={title} />;
