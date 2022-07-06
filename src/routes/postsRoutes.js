const express = require("express");
const router = express.Router();

const logRequest = require("../middlewares/logRequests");

router.get("/", logRequest, (req, res) => {
  console.log(req.params);
  res.send(JSON.stringify("tudão"));
  res.status(200);
  res.end();
});

router.post("/", logRequest, (req, res) => {
  console.log(JSON.stringify(req.body));
  res.status(201);
  res.end();
});

router.get("/:id", logRequest, (req, res) => {
  console.log(req.params);
  res.send(JSON.stringify(1));
  res.status(200);
  res.end();
});

router.put("/:id", logRequest, (req, res) => {
  console.log(req.body);
  res.status(203);
  res.end();
});

router.delete("/:id", logRequest, (req, res) => {
  res.status(203);
  res.end();
});

module.exports = router;
