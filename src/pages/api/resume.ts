import type { NextApiRequest, NextApiResponse } from "next";

const get = async (req: NextApiRequest, res: NextApiResponse) => {
  const URL = "/resume1.pdf";
  const data = await fetch(URL).then((r) => r.body);

  res.setHeader("content-type", "application/pdf");
  //@ts-ignore
  data.pipe(res);
};

export default get;
