const https = require("https");

https
  .get("https://api.nasa.gv/planetary/apod?api_key=DEMO_KEY", (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      try {
        process.send(JSON.parse(data).explanation);
      } catch {
        process.exit(1);
      }
    });
  })
  .on("error", (err) => {
    process.exit(1);
  });
