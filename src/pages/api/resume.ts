import type { NextApiRequest, NextApiResponse } from "next";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = "https://github.com/zakwht/portfolio/blob/masters/public/resume-static.pdf?raw=true"
  const data = await fetch(URL).then((r) => r.body);

  res.setHeader("content-type", "application/pdf");
  // @ts-ignore
  data.pipe(res);
};

export default get;
