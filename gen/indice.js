const fs = require("fs");

var data = "";
var cep = "00000000";
var lastCep = "00000000";

for (let index = 0; index <= 99; index++) {
  cep = ((index + 1)+ "00000000").slice(0,8);
  lastCep = ((index)+ "00000000").slice(0,8);
  data = data + `<Link href="/ceps/${index}">cep:${cep}-${lastCep}</Link>\n`;

  console.log(index, cep);
}

fs.appendFileSync(`indice.html`, data);