const express = require("express");
const sequelize = require("./db/connect");

const app = require("./app");

// Router
const personRouter = require("./route/PersonApi");

const port = process.env.PORT || 7000;

app.use("/", personRouter);

async function startDatabase() {
  try {
    await sequelize.sync();

    console.log("Connected to Database successfully!");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, async () => {
  startDatabase();
  console.log("Server is up on port " + port);
});
