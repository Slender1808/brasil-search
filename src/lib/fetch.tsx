import fetch from "make-fetch-happen";

async function fetch_promise(url: string): Promise<any> {
  return new Promise(async (resolve, reject) => {
    fetch(url, {
      cachePath: "/tmp/br/",
      cache: 'force-cache'
    })
      .then((res) => {
        return res.json(); // download the body as JSON
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err);
      });
  });
}

export default fetch_promise;
