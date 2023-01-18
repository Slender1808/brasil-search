const fs = require("fs");

const size = 100000;
const sitemap_size = size / 50000; // 2
/*
w(0,0)

function w(sitemap, cep) {
  if (cep > size) {
    return;
  }

  console.log(cep, sitemap, sitemap % sitemap_size);
  fs.appendFileSync(
    `/tmp/sitemap/sitemap-${sitemap % sitemap_size}.xml`,
    `<url>
  <loc>https://brasil-search.vercel.app/cep/${String(cep).padStart(
    8,
    "0"
  )}</loc>
  <lastmod>2023-01-18T18:33:15.179Z</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.8</priority>
</url>`
  );
  w(sitemap + 1, cep + 1);
}*/

let cep = 0;

for (let sitemap = 0; cep < size; cep++) {

  console.log(cep, sitemap, sitemap % sitemap_size);
  fs.appendFileSync(
    `/tmp/sitemap/sitemap-${sitemap % sitemap_size}.xml`,
    `<url>
  <loc>https://brasil-search.vercel.app/cep/${String(cep*1000).padStart(
    8,
    "0"
  )}</loc>
  <lastmod>2023-01-18T18:33:15.179Z</lastmod>
  <changefreq>yearly</changefreq>
  <priority>0.8</priority>
</url>`
  );
  sitemap++;
}
