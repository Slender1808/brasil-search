// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const StreamArray = require("stream-json/streamers/StreamArray");
const fs = require("fs");

export default function handler(req, res) {
  const jsonStream = StreamArray.withParser();

  //internal Node readable stream option, pipe to stream-json to convert it for us
  fs.createReadStream("../../gen/avl1.json").pipe(jsonStream.input);

  //You'll get json objects here
  //Key is the array-index here
  jsonStream.on("data", ({ key, value }) => {
    console.log(key, value);
  });

  jsonStream.on("end", ({ key, value }) => {
    console.log("All Done");
  });

  res.status(200).json({ name: "John Doe" });
}
