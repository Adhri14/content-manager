const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3001;
const pathToFile = path.resolve("./data.json");

app.get("/", (req, res) => {
  res.send({ body: "Hello world" });
});

app.get("/api/resources", (req, res) => {
  const stringFile = fs.readFileSync(pathToFile);
  res.send({ data: JSON.parse(stringFile) });
});

app.listen(port, () => {
  console.log("server is running in port : http://localhost:" + port);
});
