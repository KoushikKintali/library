const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();

// app.use(morgan("combined"));
app.use(morgan("tiny"));

app.get("/", function(req, res) {
  //   res.send("Hello from my library app
  //   res.sendFile(__dirname + "/views/index.html");
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.listen(3000, () => {
  console.log(`Server Started at ${chalk.green("3000")}`);
  //   debug(`Server Started at ${chalk.green("3000")}`);
});
