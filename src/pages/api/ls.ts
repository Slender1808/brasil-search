import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const files = await fs.readdir("/tmp/br/");
    res.status(200).json(files);
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
}
