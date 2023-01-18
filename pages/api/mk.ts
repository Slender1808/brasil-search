import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";

export default async function read(req: NextApiRequest, res: NextApiResponse) {
  try {
    await fs.writeFile("/tmp/teste.txt", "1808");
    res.status(200).send("ok");
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
}
