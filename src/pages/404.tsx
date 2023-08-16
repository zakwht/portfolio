import React from "react";

export const Route404: React.FC = () => <></>;

export default Route404;

export const getStaticProps = () => {
  return {
    redirect: {
      destination: "/"
    }
  };
};
