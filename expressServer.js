const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  const result = fs.readFileSync(
    path.join(__dirname + "/static/index.html"),
    "utf-8"
  );
  res.send(result);
});

app.listen(4000, () => {
  console.log("listen on http://localhost:4000");
});
