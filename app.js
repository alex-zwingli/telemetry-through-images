const express = require("express");
const open = require("open");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Received request for image.");
  console.log("req.query", req.query);
  console.log("Record query parameters in telemetry database ...");
  console.log("\n*****************************************\n");
  const imgPath = `${process.cwd()}/img/${req.query.img}.jpg`;
  res.sendFile(imgPath);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}\n`);
});

open(process.cwd() + "/index.html");
