const express = require("express");

const app = require("./app");
const firstStageRouter = require("./route/StageOneApi");

const port = process.env.PORT || 7000;

app.use("/", firstStageRouter);

app.listen(port, async () => {
  console.log("Server is up on port " + port);
});
