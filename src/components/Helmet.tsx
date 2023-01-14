import React from "react";
import Head from "next/head";

export const Helmet: React.FC<{ title?: string, children?: React.ReactChildren }> = ({
  title,
  children
}) => (
  <Head>
    <title key="title">{title ? `${title} | Zak White` : "Zak White"}</title>
    {children}
  </Head>
);
