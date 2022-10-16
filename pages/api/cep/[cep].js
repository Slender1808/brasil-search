// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import readline from "readline";

export default function handler(req, res) {
  const cep = Number(req.query.cep);
  var i = 0;
  console.log(req.query);
  if (cep <= 99999999) {
    var lineReader = readline.createInterface({
      input: fs.createReadStream("./gen/cep.json"),
    });

    lineReader.on("line", (line) => {
      
      i++;
      if (i % 100000 == 0) {
        console.log(i,line);
      }

      if (i == cep) {
        let data = JSON.parse(line);
        console.log(i, data);
        lineReader.close();
        return res.status(200).json(data);
      }
    });

    lineReader.on("end", () => {
      console.log("line: " + last);
      lineReader.resume();
      return res.status(404).json({
        error: true,
        message: "Please provide a CEP.",
      });
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "Please provide a CEP.",
    });
  }
}
