import type { NextApiRequest, NextApiResponse } from "next";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = "/resume.pdf";
  const data = await fetch(URL).then((r) => r.body);

  res.setHeader("content-type", "application/pdf");
  data.pipe(res);
};

export default get;
