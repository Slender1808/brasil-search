import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";

export default async function read(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const contents = await fs.readFile("/tmp/teste.txt", {
      encoding: "utf8",
    });

    res.status(200).send(contents);
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
}
