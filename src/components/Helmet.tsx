import React from "react";
import Head from "next/head";

export const Helmet: React.FC<{
  title?: string;
  children?: React.ReactElement;
}> = ({ title, children }) => (
  <Head>
    <script type="application/ld+json">
      {`{
        "@context": "http://schema.org",
        "@type": "Person",
        "@id": "https://zakwhite.ca",
        "name": "Zak White",
        "nationality": "Canada",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "University of Victoria",
          "sameAs": "https://uvic.ca"
        },
        "gender": "Male",
        "description": "Software Developer",
        "jobTitle": "Software Developer",
        "url": "https://zakwhite.ca",
        "image": "https:/zakwhite.ca/img/birdwatching.jpeg",
        "sameAs": [
          "https://github.com/zakwht",
          "https://www.linkedin.com/in/zakwhite/",
          "https://ebird.org/profile/NTk3MjU4OQ"
        ]
      }`}
    </script>
    <meta
      name="description"
      content="Canadian full-stack software developer with a passion for developing high-quality web solutions."
    />
    <title key="title">{title ? `${title} | Zak White` : "Zak White"}</title>
    {children}
  </Head>
);
