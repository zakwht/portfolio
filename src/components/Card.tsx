import styled from "@emotion/styled";

export const Card = styled.article`
  break-inside: avoid;
  background-color: white; // thistle;
  border-radius: 12px;
  margin: 0 0 16px;
  display: inline-block;
  box-shadow: 0px 6px 10px 0 hsl(210deg 23% 48% / 10%);
  overflow: hidden;
  color: black;
  font-weight: initial;
  line-height: initial;

  &:hover {
    box-shadow: 0 0 6px 4px rgb(0 0 0 / 8%);

    > a img {
      transform: scale(1.05);
    }
  }

  > img,
  > a img {
    transition: transform 0.5s;
    filter: brightness(0.95);
    width: 100%;
    vertical-align: top;
  }

  img {
    user-select: none;
  }

  @media only screen and (max-width: 480px) {
    li span {
      display: none;
    }
  }

  &:last-of-type {
    margin: 0;
  }

  p {
    margin: 16px 0;
  }

  > span {
    display: block;
    padding: 1rem;
  }

  h3 {
    margin-block: 0;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
