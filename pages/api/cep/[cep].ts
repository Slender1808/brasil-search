import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import fetch from "make-fetch-happen";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cep } = req.query;
  console.log("cep", cep);
  try {
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`, {
      cachePath: "/tmp/br/",
    })
      .then((res) => {
        return res.json(); // download the body as JSON
      })
      .then((body) => {
        res.status(200).json(body);
      });
  } catch (err) {
    console.log("err", err);
    res.status(500).send(err);
  }
}
