import https from "https";

const apiUrl = "https://burnlees-news.onrender.com/api/";

exports.handler = async (event) => {
    try {
      await pingUrl(apiUrl);
      console.log(`Successfully pinged ${apiUrl}`);
    } catch (error) {
      console.error(`Error pinging ${apiUrl}, ${error.message}`);
    }
};

const pingUrl = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 200) {
          resolve();
        } else {
          reject(
            new Error(`Failed to ping ${url}: Status code ${res.statusCode}`)
          );
        }
      })
      .on("error", (e) => {
        reject(new Error(`Error pinging ${url}: ${e.message}`));
      });
  });
};
